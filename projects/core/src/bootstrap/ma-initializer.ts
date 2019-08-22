import {InjectionToken} from '@angular/core';
import {Setting} from '../model';


export abstract class MaInitializer {
  order(): number {
    return 0;
  }

  abstract execute(setting?: Setting): Promise<void>;
}

export const MA_APP_INITIALIZER = new InjectionToken<string>('MA_APP_INITIALIZER');
