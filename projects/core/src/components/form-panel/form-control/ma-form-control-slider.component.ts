import {Component} from '@angular/core';
import {MaFormControlBaseComponent} from './ma-form-control-base.component';
import {Slider} from '../../../model';
import {MaFormControlComponent} from './ma-form-control.component';
import {MaFormPanelComponent} from '../ma-form-panel.component';
import {ModalService} from '../../../wrapper/modal.service';
import {MaFormControlNumberSettingComponent} from './ma-form-control-number-setting.component';

@Component({
  template: `
    <div [formGroup]="formGroup">
      <nz-slider [formControlName]="item.field" [nzStep]="item.stride" [nzMax]="item.max" [nzMin]="item.min"></nz-slider>
    </div>
  `,
})
export class MaFormControlSliderComponent extends MaFormControlBaseComponent<Slider> {

  constructor(wrapper: MaFormControlComponent, formPanel: MaFormPanelComponent, modalService: ModalService) {
    super(wrapper, formPanel, modalService, MaFormControlNumberSettingComponent);
  }

}
