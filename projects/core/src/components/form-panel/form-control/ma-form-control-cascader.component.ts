import {Component} from '@angular/core';
import {MaFormControlBaseComponent} from './ma-form-control-base.component';
import {MaFormControlComponent} from './ma-form-control.component';
import {MaFormPanelComponent} from '../ma-form-panel.component';
import {Cascader} from '../../../model';
import {ModalService} from '../../../wrapper/modal.service';
import {MaFormControlChoiceSettingComponent} from './ma-form-control-choice-setting.component';

@Component({
  template: `
    <div [formGroup]="formGroup">
      <nz-cascader
        [formControlName]="item.field" [nzOptions]="item.options"></nz-cascader>
    </div>
  `,
})
export class MaFormControlCascaderComponent extends MaFormControlBaseComponent<Cascader> {

  constructor(wrapper: MaFormControlComponent, formPanel: MaFormPanelComponent, modalService: ModalService) {
    super(wrapper, formPanel, modalService, MaFormControlChoiceSettingComponent);
  }
}
