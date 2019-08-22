import {Inject, Injectable} from '@angular/core';
import {MA_PATCH, MaPatch} from './ma-patch';
import {SettingService} from '../service/setting.service';
import {Setting} from '../model';
import {MA_APP_INITIALIZER, MaInitializer} from './ma-initializer';

interface PatchGroup {
  version: number;
  items: MaPatch[];
}

@Injectable({providedIn: 'root'})
export class Bootstrap {

  constructor(@Inject(MA_APP_INITIALIZER) private initializers: MaInitializer[],
              @Inject(MA_PATCH) private patches: MaPatch[],
              private settingService: SettingService) {

  }

  orderBy(p1: PatchGroup, p2: PatchGroup): number {
    return p1.version - p2.version;
  }

  async boot() {
    const setting = await this.settingService.get().toPromise();
    await this.doExecuteAppInitializers(setting);
    await this.doExecutePatches(setting);
  }


  async doExecuteAppInitializers(setting: Setting) {
    const initializers = this.initializers.sort((initializer1, initializer2) => initializer1.order() - initializer2.order());
    for (const initializer of initializers) {
      await initializer.execute(setting);
    }
  }

  /**
   * 执行补丁程序
   * 1. 判断系统配置是否不为空
   * 2. 如果不为空则继续执行
   */
  async doExecutePatches(setting: Setting) {
    if (setting) {
      const groups: PatchGroup[] = [];
      for (const item of this.patches) {
        let group = groups.find(g => item.version() === g.version);
        if (!Boolean(group)) {
          group = {version: item.version(), items: []};
          groups.push(group);
        }
        group.items.push(item);
      }
      groups.sort(this.orderBy);
      const appVersion = setting.appVersion || 0;
      for (const group of groups) {
        if (appVersion < group.version) {
          const items = group.items.sort((patch1, patch2) => patch1.order() - patch2.order());
          for (const item of items) {
            await item.execute(setting);
          }
        }
      }
    }
  }

}

