import {Injectable} from '@angular/core';
import {MA_VERSION, Setting} from '../model';
import {ViewGenerator} from '../generator/view-generator';
import {ViewService} from '../service/view.service';
import {MetaUpgraderService} from './meta-upgrader.service';
import {MaPatch} from './ma-patch';
import {RamlService} from '../service/raml.service';


/**
 * 最后执行这个补丁程序（自动升级程序）
 */
@Injectable()
export class MetaUpgraderPatch extends MaPatch {

  constructor(private viewGenerator: ViewGenerator,
              private viewService: ViewService,
              private accessor: MetaUpgraderService,
              private ramlService: RamlService) {
    super();
  }

  async execute(setting?: Setting): Promise<void> {
    if (setting) {
      const apiVersion = Boolean(setting) ? 0 : setting.apiVersion || 0;
      const raml = await this.ramlService.getRaml().toPromise();
      if (String(raml.version) > String(apiVersion)) {
        console.log('后台自动升级元数据...');
        const views = await this.viewService.getAll().toPromise();
        const newMapped = [];
        const generatedViews = this.viewGenerator.generateViews(raml);
        const controlGroups = [];
        for (const generatedView of generatedViews) {
          const view = views.find(v => v.path === generatedView.path);
          if (view === undefined) {
            newMapped.push(generatedView);
          } else {
            controlGroups.push([generatedView, view]);
          }
        }
        const diff = this.viewGenerator.diff(controlGroups);

        setting.appVersion = MA_VERSION;
        setting.apiVersion = raml.version;
        await this.accessor.doUpdate(newMapped, diff, setting);
        console.log('后台自动升级元数据完成!');
      }
    }
  }


  order(): number {
    return Number.MAX_SAFE_INTEGER;
  }

  version(): number {
    return MA_VERSION;
  }
}


