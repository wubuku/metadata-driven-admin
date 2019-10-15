import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ModalService} from '../../wrapper/modal.service';
import {ViewService} from '../../service/view.service';
import {RouterService} from '../../wrapper/router.service';
import {TranslateService} from '../../service/translate.service';

@Component({
  selector: 'ma-data-picker',
  template: `
    <nz-input-group [nzSuffix]="inputSuffix">
      <input nz-input [placeholder]="placeholder" (blur)="doTouched()" [(ngModel)]="value" (ngModelChange)="onChange($event)"/>
    </nz-input-group>
    <ng-template #inputSuffix>
      <i nz-icon type="filter" class="ma-data-picker-suffix" (click)="showReferenceDialog()"></i>
    </ng-template>
  `,
  styleUrls: ['./ma-data-picker.component.less'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MaDataPickerComponent),
    multi: true
  }]
})
export class MaDataPickerComponent implements ControlValueAccessor , OnInit {

  constructor(private modalService: ModalService, private viewService: ViewService, private router: RouterService, private translateService: TranslateService) {

  }


  value: any;

  disabled: boolean;


  @Input()
  placeholder?: string;

  @Input()
  objectPath?: string;

  @Input()
  viewPath: string;

  @Output()
  select = new EventEmitter<any>();

  ngOnInit(): void {
    this.placeholder = this.translateService.translate('dataloader.placeholder');
  }



  onChange = (value?: any) => {

  }

  onTouched = () => {

  }


  showReferenceDialog() {
    const onClose = new EventEmitter<any>();
    const componentType = this.router.getContentComponent(this.viewPath);
    this.modalService.create({
      nzTitle: this.placeholder,
      nzContent: componentType,
      nzComponentParams: {path: this.viewPath},
      nzWrapClassName: 'ma-data-picker-modal',
      nzAfterClose: onClose,
      nzFooter: null,
    });

    onClose.subscribe(this.receive);
  }

  receive = (value: any) => {
    if (value) {
      this.select.emit(value);
      if (this.objectPath) {
        const parts = this.objectPath.split('.');
        for (const part of parts) {
          value = value[part];
        }
      }
      this.value = value;
      this.onChange(this.value);
    }
  }

  doTouched() {
    this.onTouched();
  }


  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: (value?: any) => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: any): void {
    if (obj !== this.value) {
      this.value = obj;
    }
  }

}
