import {MaInitializer} from './ma-initializer';
import {Injectable} from '@angular/core';
import {StyleService} from '../service/style.service';
import {IconSourceService} from '../service/icon-source.service';
import {Setting} from '../model';


@Injectable()
export class StyleInitializer extends MaInitializer {

  constructor(private iconSourceService: IconSourceService, private styleService: StyleService) {
    super();
  }

  async execute(setting?: Setting): Promise<void> {
    const sources = await this.iconSourceService.getAll().toPromise();
    for (const item of sources) {
      this.iconSourceService.import(item);
    }
    if (setting) {
      // this.styleService.updateVariables(setting.theme);
    }
  }

  order(): number {
    return Number.MIN_SAFE_INTEGER;
  }
}
