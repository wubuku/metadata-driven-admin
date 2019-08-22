import {Component} from '@angular/core';
import {MaFormControlBaseComponent} from './ma-form-control-base.component';
import {MaFormControlComponent} from './ma-form-control.component';
import {MaFormPanelComponent} from '../ma-form-panel.component';
import {TextArea} from '../../../model';
import {ModalService} from '../../../wrapper/modal.service';
import {MaFormControlTextareaSettingComponent} from './ma-form-control-textarea-setting.component';

@Component({
  template: `
    <div [formGroup]="formGroup">
      <textarea nz-input [formControlName]="item.field" [placeholder]="item.description || item.label" [nzAutosize]="item.auto || item.size"></textarea>
    </div>
  `,
})
export class MaFormControlTextareaComponent extends MaFormControlBaseComponent<TextArea> {

  constructor(wrapper: MaFormControlComponent, formPanel: MaFormPanelComponent, modalService: ModalService) {
    super(wrapper, formPanel, modalService, MaFormControlTextareaSettingComponent);
  }

}
