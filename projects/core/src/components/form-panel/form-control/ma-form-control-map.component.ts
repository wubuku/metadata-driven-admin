import {Component} from '@angular/core';
import {MaFormControlBaseComponent} from './ma-form-control-base.component';
import {MaFormControlComponent} from './ma-form-control.component';
import {MaFormPanelComponent} from '../ma-form-panel.component';
import {MapField, TextArea} from '../../../model';
import {ModalService} from '../../../wrapper/modal.service';
import {MaFormControlTextareaSettingComponent} from './ma-form-control-textarea-setting.component';
import {MaViewManagementComponent} from '../../management/view/ma-view-management.component';

@Component({
  template: `
    <div [formGroup]="formGroup">
      <strong>不支持Map类型的表单控件</strong>
    </div>
  `,
})
export class MaFormControlMapComponent extends MaFormControlBaseComponent<MapField> {

  constructor(wrapper: MaFormControlComponent, formPanel: MaFormPanelComponent, modalService: ModalService) {
    super(wrapper, formPanel, modalService, MaFormControlTextareaSettingComponent);
  }

  openSettingComponent() {
    this.modalService.warning({
      nzTitle: '不支持Map类型的表单控件'
    });
  }
}
