import {Component, OnInit, Optional} from '@angular/core';
import {NzMessageService, NzModalRef} from 'ng-zorro-antd';
import {RamlService} from '../../../service/raml.service';
import {Method, Raml, Resource} from '../../../model';
import {ViewGenerator} from '../../../generator/view-generator';
import {ViewService} from '../../../service/view.service';
import {RouterService} from '../../../wrapper/router.service';

@Component({
  templateUrl: 'ma-interface-list.component.html',
  styleUrls: ['../../base.less']
})
export class MaInterfaceListComponent implements OnInit {
  raml = new Raml();

  constructor(private messageService: NzMessageService, @Optional() public modalRef: NzModalRef,
              private ramlService: RamlService, private routerService: RouterService,
              private viewService: ViewService, private viewGenerator: ViewGenerator) {
  }

  ngOnInit(): void {
    this.ramlService.getRaml().subscribe(raml => this.raml = raml);
  }

  emit(resource: Resource, action: Method) {
    let contentType;
    if (action.body && action.body.length > 0) {
      contentType = action.body[0].name;
    }
    let accept;
    if (action.responses && action.responses.length > 0) {
      const responseBody = action.responses[0].body;
      if (responseBody && responseBody.length > 0) {
        accept = responseBody[0].name;
      }
    }
    const method = action.method;

    let path = resource.qualifiedPath;

    if (this.raml.baseUri.endsWith('/')) {
      path = this.raml.baseUri.substring(0, this.raml.baseUri.length - 1) + path;
    } else {
      path = this.raml.baseUri + path;
    }
    if (this.modalRef) {
      this.modalRef.destroy({method, path, contentType, accept});
    }
  }

  navigate(resource: Resource, method: Method) {
    let path = resource.qualifiedPath;
    if (method.method !== 'get') {
      path += '.' + method.method;
    }
    this.routerService.navigate(path);
  }

  async rebuild(resource: Resource, method: Method) {
    const view = this.viewGenerator.generateView(this.raml, resource, method);
    if (view) {
      await this.viewService.saveOrUpdate(view);
      this.navigate(resource, method);
    } else {
      this.messageService.info(`接口${resource.qualifiedPath}[${method.method}]不能被映射为视图`);
    }
  }
}
