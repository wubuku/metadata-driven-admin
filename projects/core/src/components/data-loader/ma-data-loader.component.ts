import {AfterViewInit, Component, EventEmitter, HostBinding, Input, OnChanges, Output, SimpleChanges, TemplateRef, ViewChild} from '@angular/core';
import {DataLoader, HttpRequestOptions} from '../../model';
import {HttpClient} from '@angular/common/http';
import {TransformService} from '../../service/transform.service';
import {formatPath, isFunction} from '../../util';
import {MaFormPanelComponent} from '../form-panel/ma-form-panel.component';
import {ViewMode} from '../../service/design.service';
import {ModalService} from '../../wrapper/modal.service';
import {MaDataLoaderSettingComponent} from './ma-data-loader-setting.component';


@Component({
  selector: 'ma-data-loader',
  templateUrl: './ma-data-loader.component.html',
  styleUrls: ['./ma-data-loader.component.less']
})
export class MaDataLoaderComponent implements OnChanges, AfterViewInit {

  @Input()
  dataLoader: DataLoader;

  @Input()
  dataLoaderButtons: TemplateRef<void>;

  @Input()
  dataLoadCallback?: (options: HttpRequestOptions) => void;

  @Output()
  dataLoaded?: EventEmitter<any> = new EventEmitter();

  @Input()
  uriParameters: { [key: string]: string };

  @Input()
  viewMode: ViewMode;

  @HostBinding('class.hide')
  hide: boolean;

  @ViewChild(MaFormPanelComponent, {static: false})
  formPanelComponent: MaFormPanelComponent;

  constructor(private http: HttpClient, private transformer: TransformService,
              private modalService: ModalService) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('dataLoader')) {
      const {formPanel} = this.dataLoader;
      let length = 0;
      if (formPanel) {
        for (const cell of formPanel.body.children) {
          length += cell.width;
        }
      }
      this.hide = length === 0;
    }
  }

  ngAfterViewInit(): void {
    this.load();
  }

  processQueryParameters(queryParameters: any) {
    const queryParams: any = {};
    const prefix = 'queryParameters.';
    if (queryParameters) {
      for (const cell of this.dataLoader.formPanel.body.children) {
        const item = cell.content;
        if (item.field.startsWith(prefix)) {
          const field = item.field.substring(prefix.length);
          const fieldValue = queryParameters[field];
          if (fieldValue) {
            if (item.op && item.op !== 'eq') {
              let paramValue = item.op + '(' + fieldValue + ')';
              if (fieldValue instanceof Array) {
                if (item.op === 'between' && paramValue.length === 2) {
                  fieldValue.sort((a, b) => {
                    if (!isNaN(a) && !isNaN(b)) {
                      return parseFloat(a) - parseFloat(b);
                    }
                    return new Date(a).getTime() - new Date(b).getTime();
                  });
                }
                paramValue = item.op + '(' + fieldValue.join(',') + ')';
              }
              queryParams[field] = paramValue;
            } else {
              queryParams[field] = fieldValue;
            }
          }
        }
      }
      return Object.assign(queryParameters, queryParams);
    }
  }

  getInnerFormValue() {
    let value = {};
    if (this.formPanelComponent) {
      value = this.formPanelComponent.getFormValue();
    }
    return value;
  }

  load(input: any = this.getInnerFormValue()) {
    const options: any = {};
    options.headers = input.headers;
    options.params = this.processQueryParameters(input.queryParameters);
    options.body = input.body;

    if (isFunction(this.dataLoadCallback)) {
      this.dataLoadCallback(options);
    }

    const method = this.dataLoader.method;
    const url = formatPath(this.dataLoader.path, this.uriParameters);


    this.http
      .request(method, url, options)
      .subscribe(data => {
        this.transformer.transform(data, url, method).then(value => {
          this.dataLoaded.emit(value);
        });
      });
  }


  openDataLoaderSetting() {
    this.modalService.openSettingComponent('查询表单元数据设置', MaDataLoaderSettingComponent, {value: this.dataLoader});
  }

}
