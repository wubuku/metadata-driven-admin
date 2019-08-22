import {Input, OnDestroy, Type} from '@angular/core';
import {FormItem} from '../../../model';
import {FormGroup} from '@angular/forms';
import {MaFormControlComponent} from './ma-form-control.component';
import {MaFormPanelComponent} from '../ma-form-panel.component';
import {ModalService} from '../../../wrapper/modal.service';
import {Subscription} from 'rxjs';

export class MaFormControlBaseComponent<F extends FormItem = FormItem> implements OnDestroy {
  @Input()
  item: F;

  @Input()
  formGroup: FormGroup;

  settingSubscription: Subscription;

  constructor(wrapper: MaFormControlComponent, container: MaFormPanelComponent, protected modalService: ModalService, protected settingComponent: Type<any>) {
    this.item = <F>wrapper.item;
    this.formGroup = container.formGroup;
    this.settingSubscription = wrapper.subscribeSettingEvent(() => {
      this.openSettingComponent();
    });
  }

  openSettingComponent() {
    this.modalService
      .openSettingComponent('设置表单字段' + this.item.field, this.settingComponent, {value: this.item})
      .afterClose.subscribe(() => {
      const formValue = this.formGroup.value;
      if (this.item.value && !formValue[this.item.field]) {
        this.formGroup.patchValue({[this.item.field]: this.item.value});
      }
    });
  }

  ngOnDestroy(): void {
    this.settingSubscription.unsubscribe();
  }


}
