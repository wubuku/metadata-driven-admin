import {Component} from '@angular/core';
import {MaFormControlBaseComponent} from './ma-form-control-base.component';
import {Switch} from '../../../model';
import {MaFormControlComponent} from './ma-form-control.component';
import {MaFormPanelComponent} from '../ma-form-panel.component';
import {ModalService} from '../../../wrapper/modal.service';
import {MaFormControlSwitchSettingComponent} from './ma-form-control-switch-setting.component';

@Component({
  template: `
    <div [formGroup]="formGroup">
      <nz-switch *ngIf="item.mode == 'switch'" [formControlName]="item.field"></nz-switch>
      <label nz-checkbox *ngIf="item.mode == 'checkbox'" [formControlName]="item.field"></label>
    </div>
  `,
})
export class MaFormControlSwitchComponent extends MaFormControlBaseComponent<Switch> {

  constructor(wrapper: MaFormControlComponent, formPanel: MaFormPanelComponent, modalService: ModalService) {
    super(wrapper, formPanel, modalService, MaFormControlSwitchSettingComponent);
  }

}
