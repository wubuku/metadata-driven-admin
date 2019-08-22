import {Injectable} from '@angular/core';
import {ViewService} from '../service/view.service';
import {SettingService} from '../service/setting.service';
import {Setting, View} from '../model';

@Injectable({providedIn: 'root'})
export class MetaUpgraderService {

  constructor(private viewService: ViewService, private settingService: SettingService) {

  }

  async doUpdate(newMapped: View[], diff: View[], setting: Setting) {
    await this.viewService.batchSave(newMapped); // 保存新创建的视图
    await this.viewService.batchSave(diff, true); // 保存不同的
    await this.settingService.saveOrUpdate(setting).toPromise();
  }
}
