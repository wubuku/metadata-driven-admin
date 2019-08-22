import {Component, EventEmitter, OnChanges, Optional, SimpleChanges} from '@angular/core';
import {MaSeparatePageBaseComponent} from '../base/ma-separate-page-base.component';
import {Tab, TabSet, View} from '../../model';
import {MaDynamicComponent} from '../dynamic/ma-dynamic.component';
import {extractUriVariables, formatPath, includesAll} from '../../util';
import {RouterService} from '../../wrapper/router.service';
import {ViewService} from '../../service/view.service';
import {ModalService} from '../../wrapper/modal.service';
import {MaViewManagementComponent} from '../management/view/ma-view-management.component';
import {Route} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd';
import {DesignService} from '../../service/design.service';

@Component({
  selector: 'ma-tabset',
  templateUrl: './ma-tabset.component.html',
  styleUrls: ['./ma-tabset.component.less']
})
export class MaTabsetComponent extends MaSeparatePageBaseComponent<TabSet> implements OnChanges {


  tabIndex = 0;

  constructor(private viewService: ViewService,
              private routerService: RouterService,
              private modalService: ModalService,
              private messageService: NzMessageService,
              designService: DesignService,
              @Optional()dynamicComponent: MaDynamicComponent) {
    super(designService, dynamicComponent);
  }


  ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);
  }

  formatPath(path: string) {
    return formatPath(path, this.uriParameters);
  }

  navigate(path: string) {
    this.routerService.navigate(this.formatPath(path));
  }

  addTab() {
    const onClose = new EventEmitter<View | Route>();
    this.modalService.create({
      nzTitle: '选择一个视图',
      nzContent: MaViewManagementComponent,
      nzAfterClose: onClose,
      nzFooter: null,
    });
    onClose.subscribe(view => {
      if (!this.component.children) {
        this.component.children = [];
      }
      const uriParameterKeys = Object.keys(this.uriParameters);
      const viewUriVariables = extractUriVariables(view.path);
      const include = includesAll(uriParameterKeys, viewUriVariables);
      if (include) {
        this.component.children.push(new Tab({title: view.name, path: view.path}));
      } else {
        this.messageService.error(`选中视图(${view.path})包含有路径参数无法匹配， 如果包含路径参数，所有路径参数必须在[${uriParameterKeys}]数组内`);
      }
    });
  }

  removeTab(i: number) {
    this.component.children.splice(i, 1);
  }


}
