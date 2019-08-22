import {Component, Input, Optional, TemplateRef} from '@angular/core';
import {NzMessageService, NzModalRef} from 'ng-zorro-antd';
import {Form} from '../../model';
import {HttpClient} from '@angular/common/http';
import {formatPath} from '../../util';
import {MaSeparatePageBaseComponent} from '../base/ma-separate-page-base.component';
import {MaDynamicComponent} from '../dynamic/ma-dynamic.component';
import {ModalService} from '../../wrapper/modal.service';
import {MaFormSettingComponent} from './ma-form-setting.component';
import {DesignService} from '../../service/design.service';


@Component({
  selector: 'ma-form',
  templateUrl: './ma-form.component.html',
  styleUrls: ['./ma-form.component.less']
})
export class MaFormComponent extends MaSeparatePageBaseComponent<Form> {

  /**
   * 查询表单的按钮
   */
  @Input()
  dataLoaderButtons: TemplateRef<void>;

  /**
   * 表单的按钮
   */
  @Input()
  buttons?: TemplateRef<void>;

  formValue: any;

  constructor(private http: HttpClient,
              private messageService: NzMessageService,
              private modalService: ModalService,
              designService: DesignService,
              @Optional() dynamicComponent: MaDynamicComponent,
              @Optional() public modalRef: NzModalRef) {
    super(designService, dynamicComponent);
  }


  dataLoaded(formValue: any) {
    this.formValue = {body: formValue};
  }

  submit(formValue: any) {
    const options: any = {};
    options.params = {};

    const contentType = this.component.contentType || 'application/json';
    options.headers = {'Content-Type': contentType};

    if (formValue.headers) {
      Object.assign(options.headers, formValue.headers);
    }

    if (formValue.queryParameters) {
      Object.assign(options.params, formValue.queryParameters);
    }


    const formSubmit = contentType === 'application/x-www-form-urlencoded';
    const requestBody = formValue.body;
    if (requestBody) {
      if (formSubmit) {
        options.body = this.toURLSearchParams(requestBody);
      } else {
        options.body = requestBody;
      }
    }

    try {
      const method = this.component.method;
      const url = formatPath(this.component.path, this.uriParameters);

      this.http.request(method, url, options)
        .subscribe(() => {
          if (this.modalRef) {
            this.modalRef.triggerOk();
          }
        });
    } catch (e) {
      this.messageService.error(e);
    }
  }

  toURLSearchParams(requestBody: any): URLSearchParams {
    const searchParams = new URLSearchParams();
    for (const key of Object.keys(requestBody)) {
      searchParams.set(key, requestBody[key]);
    }
    return searchParams;
  }

  openFormSetting() {
    this.modalService.openSettingComponent('表单元数据设置', MaFormSettingComponent, {value: this.component});
  }

}
