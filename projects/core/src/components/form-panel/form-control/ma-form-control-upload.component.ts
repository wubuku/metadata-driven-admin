import {Component} from '@angular/core';
import {MaFormControlBaseComponent} from './ma-form-control-base.component';
import {MaFormControlComponent} from './ma-form-control.component';
import {MaFormPanelComponent} from '../ma-form-panel.component';
import {UploadPicker} from '../../../model';
import {ModalService} from '../../../wrapper/modal.service';
import {MaFormControlUploadSettingComponent} from './ma-form-control-upload-setting.component';

@Component({
  template: `
    <div [formGroup]="formGroup">
      <nz-upload nzAction="/api/settings/aliyun-oss" [nzListType]="item.listType" [nzShowButton]="item.multiple">
        <i nz-icon type="plus"></i>
        <div class="ant-upload-text">Upload</div>
      </nz-upload>
    </div>
  `,
})
export class MaFormControlUploadComponent extends MaFormControlBaseComponent<UploadPicker> {

  constructor(wrapper: MaFormControlComponent, formPanel: MaFormPanelComponent, modalService: ModalService) {
    super(wrapper, formPanel, modalService, MaFormControlUploadSettingComponent);
  }

}
