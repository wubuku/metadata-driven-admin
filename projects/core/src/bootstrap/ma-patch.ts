import {InjectionToken} from '@angular/core';
import {MaInitializer} from './ma-initializer';

export abstract class MaPatch extends MaInitializer {
  abstract version(): number;
}


export const MA_PATCH = new InjectionToken<string>('MA_PATCH');



