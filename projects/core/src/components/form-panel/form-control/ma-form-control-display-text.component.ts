import {Component} from '@angular/core';
import {MaFormControlBaseComponent} from './ma-form-control-base.component';
import {DisplayText} from '../../../model';
import {MaFormControlComponent} from './ma-form-control.component';
import {MaFormPanelComponent} from '../ma-form-panel.component';
import {ModalService} from '../../../wrapper/modal.service';
import {MaFormControlDisplayTextSettingComponent} from './ma-form-control-display-text-setting.component';

@Component({
  template: `
    {{formGroup.value[item.field] || '无'}}
  `,
})
export class MaFormControlDisplayTextComponent extends MaFormControlBaseComponent<DisplayText> {

  constructor(wrapper: MaFormControlComponent, formPanel: MaFormPanelComponent, modalService: ModalService) {
    super(wrapper, formPanel, modalService, MaFormControlDisplayTextSettingComponent);
  }

}
