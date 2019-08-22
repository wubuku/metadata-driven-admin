import {Component} from '@angular/core';
import {DataPicker} from '../../../model';
import {MaFormControlBaseComponent} from './ma-form-control-base.component';
import {MaFormControlComponent} from './ma-form-control.component';
import {MaFormPanelComponent} from '../ma-form-panel.component';
import {ModalService} from '../../../wrapper/modal.service';
import {MaFormControlDataPickerSettingComponent} from './ma-form-control-data-picker-setting.component';

@Component({
  template: `
    <div [formGroup]="formGroup">
      <ma-data-picker [formControlName]="item.field" [viewPath]="item.viewPath" [objectPath]="item.objectPath" (select)="onSelected($event)"></ma-data-picker>
    </div>
  `,
})
export class MaFormControlDataPickerComponent extends MaFormControlBaseComponent<DataPicker> {

  constructor(wrapper: MaFormControlComponent, formPanel: MaFormPanelComponent, modalService: ModalService) {
    super(wrapper, formPanel, modalService, MaFormControlDataPickerSettingComponent);
  }

  onSelected(value: any) {
    if (this.item.onSelected) {
      this.item.onSelected(value);
    }
  }
}
