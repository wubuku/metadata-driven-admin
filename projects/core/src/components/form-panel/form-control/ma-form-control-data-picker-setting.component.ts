import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Column, DataPicker, Option, Table, View} from '../../../model';
import {ViewService} from '../../../service/view.service';

@Component({
  template: `
    <div nz-form>
      <div nz-row nzGutter="12" nzType="flex" nzJustify="start" nzAlign="top">
        <div nz-col nzSpan="8">
          <nz-form-item>
            <nz-form-label nzSpan="8">是否必填</nz-form-label>
            <nz-form-control nzSpan="16">
              <nz-switch [(ngModel)]="value.required"></nz-switch>
            </nz-form-control>
          </nz-form-item>
        </div>

        <div nz-col nzSpan="8">
          <nz-form-item>
            <nz-form-label nzSpan="8">引用表达式</nz-form-label>
            <nz-form-control nzSpan="16">
              <nz-cascader
                [(ngModel)]="value.objectPath" [nzOptions]="options"></nz-cascader>
            </nz-form-control>
          </nz-form-item>
        </div>
        <div nz-col nzSpan="8">
          <nz-form-item>
            <nz-form-label nzSpan="8">选择数据列表</nz-form-label>
            <nz-form-control nzSpan="16">
              <ma-data-picker viewPath="/management/views" objectPath="path" placeholder="请选择一个视图" [(ngModel)]="value.viewPath" (select)="setOptions($event)"></ma-data-picker>
            </nz-form-control>
          </nz-form-item>
        </div>
      </div>
    </div>
  `
})
export class MaFormControlDataPickerSettingComponent implements OnChanges {
  @Input()
  value: DataPicker;
  options: Option[];

  constructor(private viewService: ViewService) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.value.viewPath) {
      this.viewService.getByPath(this.value.viewPath).then(this.setOptions);
    }
  }


  setOptions = (view: View) => {
    if (view.data) {
      if (view.data.type === 'table') {
        const table = view.data as Table;
        this.options = this.columnsToOptions(table.columns);
      }
    }
  }

  columnsToOptions = (columns: Column[]) => {
    const options = [];
    for (const column of columns) {
      const option = {} as Option;
      option.label = column.label;
      option.value = column.field;
      option.isLeaf = column.columns == null;
      if (!option.isLeaf) {
        option.children = this.columnsToOptions(column.columns);
      }
      options.push(option);
    }
    return options;

  }
}
