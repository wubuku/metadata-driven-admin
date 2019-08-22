import {Component} from '@angular/core';
import {MaFormPanelComponent} from '../ma-form-panel.component';
import {MaFormControlComponent} from './ma-form-control.component';
import {MaFormControlBaseComponent} from './ma-form-control-base.component';
import {ModalService} from '../../../wrapper/modal.service';
import {MaFormControlTextSettingComponent} from './ma-form-control-text-setting.component';

@Component({
  template: `
    <div [formGroup]="formGroup">
      <input nz-input [formControlName]="item.field"/>
    </div>
  `,
})
export class MaFormControlTextComponent extends MaFormControlBaseComponent {

  constructor(wrapper: MaFormControlComponent, formPanel: MaFormPanelComponent, modalService: ModalService) {
    super(wrapper, formPanel, modalService, MaFormControlTextSettingComponent);
  }

}
