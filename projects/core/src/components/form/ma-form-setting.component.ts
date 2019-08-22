import {Component, Input, OnInit} from '@angular/core';
import {DataLoader, Form, FormItem, Row} from '../../model';
import {extractUriVariables, includesAll} from '../../util';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'ma-form-setting',
  template: `
    <div nz-form>
      <div nz-row nzGutter="12" nzType="flex" nzJustify="start" nzAlign="top">
        <div nz-col nzSpan="12">
          <nz-form-item>
            <nz-form-label nzSpan="8">请选择数据加载接口</nz-form-label>
            <nz-form-control nzSpan="16">
              <ma-data-picker viewPath="/management/interfaces" objectPath="path" placeholder="请选择数据加载接口"
                              [(ngModel)]="dataLoaderPath"
                              (ngModelChange)="checkAndUpdateDataLoaderPath($event)"
                              (select)="checkAndUpdateDataLoader($event)"></ma-data-picker>
            </nz-form-control>
          </nz-form-item>
        </div>
        <div nz-col nzSpan="12">
          <nz-form-item>
            <nz-form-label nzSpan="8">Http请求方法</nz-form-label>
            <nz-form-control nzSpan="16">
              <input [(ngModel)]="dataLoaderMethod" nz-input readonly/>
            </nz-form-control>
          </nz-form-item>
        </div>

        <div nz-col nzSpan="12">
          <nz-form-item>
            <nz-form-label nzSpan="8">水平间隔距离</nz-form-label>
            <nz-form-control nzSpan="16">
              <nz-slider [nzMin]="0" [nzMax]="24" [(ngModel)]="row.horizontal"></nz-slider>
            </nz-form-control>
          </nz-form-item>
        </div>
        <div nz-col nzSpan="12">
          <nz-form-item>
            <nz-form-label nzSpan="8">垂直间隔距离</nz-form-label>
            <nz-form-control nzSpan="16">
              <nz-slider [nzMin]="0" [nzMax]="48" [nzStep]="3" [(ngModel)]="row.vertical"></nz-slider>
            </nz-form-control>
          </nz-form-item>
        </div>
      </div>
    </div>
  `,
})
export class MaFormSettingComponent implements OnInit {

  @Input()
  value: Form;

  row: Row<FormItem>;

  dataLoaderPath: string;
  dataLoaderMethod: string;

  constructor(private messageService: NzMessageService) {

  }

  ngOnInit(): void {
    this.row = this.value.formPanel.body;
    if (this.value.dataLoader) {
      const {path, method} = this.value.dataLoader;
      this.dataLoaderPath = path;
      this.dataLoaderMethod = method;
    }
  }

  checkAndUpdateDataLoaderPath(event: any) {
    if (event === '' || event === null || event === undefined) {
      this.value.dataLoader = null;
      this.dataLoaderMethod = null;
    }
  }

  checkAndUpdateDataLoader(event: any) {
    if (event && event.path) {
      const formUriVariables = extractUriVariables(this.value.path);
      if (includesAll(formUriVariables, extractUriVariables(event.path))) {
        this.dataLoaderMethod = event.method;
        this.value.dataLoader = new DataLoader({
          path: event.path,
          method: event.method
        });
      } else {
        this.messageService.error(`选中视图(${event.path})包含有路径参数无法匹配， 如果包含路径参数，所有路径参数必须在${formUriVariables}数组内`);
        this.value.dataLoader = null;
        this.dataLoaderMethod = null;
      }
    }
  }

}
