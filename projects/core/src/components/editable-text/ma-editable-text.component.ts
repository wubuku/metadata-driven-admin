import {Component, ElementRef, forwardRef, Input, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ViewMode} from '../../service/design.service';

@Component({
  selector: 'ma-editable-text',
  template: `
    <span class="ellipsis-text" 
          [attr.contenteditable]="viewMode == 1"
          (input)="writeValue($event.target.innerHTML, true)"
          (blur)="onTouched($event)"
          (keydown.enter)="checkEnterKey($event)" #span></span>
  `,
  styleUrls: ['./ma-editable-text.component.less'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MaEditableTextComponent),
    multi: true
  }]
})
export class MaEditableTextComponent implements ControlValueAccessor {

  @Input()
  viewMode: ViewMode;


  disabled: boolean;

  value: string;

  @ViewChild('span',{static: true})
  span: ElementRef<HTMLSpanElement>;

  onChange = (value?: any) => {

  }

  onTouched = (event?: any) => {

  }


  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: string, manual?: boolean): void {
    if (this.value !== value) {
      this.value = value;
      // 如果是手动写入，则向外发送change事件
      if (manual) {
        this.onChange(value);
      } else {
        this.span.nativeElement.innerHTML = value;
      }
    }
  }

  checkEnterKey(event: KeyboardEvent) {
    event.preventDefault();
    event.stopPropagation();
  }
}
