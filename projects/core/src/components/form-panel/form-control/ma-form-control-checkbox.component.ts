import {Component} from '@angular/core';
import {MaFormControlBaseComponent} from './ma-form-control-base.component';
import {Checkbox} from '../../../model';
import {MaFormControlComponent} from './ma-form-control.component';
import {MaFormPanelComponent} from '../ma-form-panel.component';
import {ModalService} from '../../../wrapper/modal.service';
import {MaFormControlChoiceSettingComponent} from './ma-form-control-choice-setting.component';

@Component({
  template: `
    <div [formGroup]="formGroup">
      <nz-checkbox-group [formControlName]="item.field"></nz-checkbox-group>
    </div>
  `,
})
export class MaFormControlCheckboxComponent extends MaFormControlBaseComponent<Checkbox> {

  constructor(wrapper: MaFormControlComponent, formPanel: MaFormPanelComponent, modalService: ModalService) {
    super(wrapper, formPanel, modalService, MaFormControlChoiceSettingComponent);
  }

}
