import {Component, Input} from '@angular/core';
import {Choice, Option} from '../../../model';

@Component({
  template: `
    <div nz-form>
      <div nz-row nzGutter="12" nzType="flex" nzJustify="start" nzAlign="top">
        <div nz-col nzSpan="12">
          <nz-form-item>
            <nz-form-label nzSpan="8">选项列表</nz-form-label>
            <nz-form-control nzSpan="16">
              <ng-template let-option let-i="index" let-last="last" let-parent="parent" #item>
                <nz-input-group nzCompact [nzAddOnAfter]="operator">
                  <input nz-input placeholder="请输入选项文本" [(ngModel)]="option.label" style="width: 40%"/>
                  <input nz-input placeholder="请输入选项值" [(ngModel)]="option.value" style="width: 60%"/>
                </nz-input-group>
                <ng-template #operator>
                  <!--如果是最后一项并且没有父节点，则添加，否则删除-->
                  <a title="{{last && !parent ? '添加' : '删除'}}选项" (click)="addOrDeleteOption(i, parent, last && !parent)" style="color: #555555">
                    <i nz-icon [type]="last && !parent ? 'plus': 'minus'"></i>
                  </a>
                  <a title="添加子选项" (click)="addSubOption(option)" style="margin-left: 8px; color: #555555;" *ngIf="value.type === 'cascader'">
                    <i nz-icon type="plus-circle"></i>
                  </a>
                </ng-template>
              </ng-template>
              <ma-tree-list [rootNodes]="value.options" [renderItem]="item"></ma-tree-list>
            </nz-form-control>
          </nz-form-item>
        </div>
        <div nz-col nzSpan="12">
          <nz-form-item>
            <nz-form-label nzSpan="8">是否必填</nz-form-label>
            <nz-form-control nzSpan="16">
              <nz-switch [(ngModel)]="value.required"></nz-switch>
            </nz-form-control>
          </nz-form-item>
          <br/>
          <nz-form-item>
            <nz-form-label nzSpan="8">默认值</nz-form-label>
            <nz-form-control nzSpan="16">
              <input nz-input [(ngModel)]="value.value" placeholder="请输入默认选中的选项（多选用逗号分隔）"/>
            </nz-form-control>
          </nz-form-item>
        </div>
      </div>
    </div>
  `
})
export class MaFormControlChoiceSettingComponent {

  _value: Choice;

  @Input()
  set value(value: Choice) {
    console.log('set value=>', value);
    this._value = value;
    if (!this._value.options) {
      this._value.options = [...Choice.DEFAULT_OPTIONS];
      // setTimeout(() => this._value.options = [...Choice.DEFAULT_OPTIONS]); // TODO ExpressionChangedAfterItHasBeenCheckedError
    }
  }

  get value() {
    return this._value;
  }

  addOrDeleteOption(i: number, parent: any, add: boolean) {
    const options = parent ? parent.children : this.value.options;
    const length = options.length;
    if (add) {
      options.push({label: '选项' + length, value: length});
    } else {
      options.splice(i, 1);
    }
  }

  addSubOption(option: Option) {
    if (!option.children) {
      option.children = [];
    }
    const length = option.children.length;
    option.children.push({label: '子选项' + length, value: length});
  }
}
