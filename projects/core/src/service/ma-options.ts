import {Inject, Injectable, InjectionToken, Type} from '@angular/core';

export const MA_OPTIONS = new InjectionToken<MaOptions>('MA_OPTIONS');

@Injectable()
export class MaOptions {
  appId: string;
  api?: string;
  frameComponent?: Type<any>; // frameComponent
  // constructor(@Inject(MA_OPTIONS) options: MaOptions) {
  //   Object.assign(this, options);
  // }
}



