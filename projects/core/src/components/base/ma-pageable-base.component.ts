import {Button, DesignModePage, HttpRequestOptions, List, Order, Page, Table} from '../../model';
import {MaSeparatePageBaseComponent} from './ma-separate-page-base.component';
import {EventEmitter, Input, OnChanges, Optional, Output, SimpleChanges, TemplateRef, ViewChild} from '@angular/core';
import {MaDataLoaderComponent} from '../data-loader/ma-data-loader.component';
import {formatPath} from '../../util';
import {MaDynamicComponent} from '../dynamic/ma-dynamic.component';
import {ViewService} from '../../service/view.service';
import {ModalService} from '../../wrapper/modal.service';
import {RouterService} from '../../wrapper/router.service';
import {NzModalRef} from 'ng-zorro-antd';
import {DesignService, ViewMode} from '../../service/design.service';

/**
 * 可分页的基础类
 */
export class MaPageableBaseComponent<C extends (Table | List)> extends MaSeparatePageBaseComponent<C> implements OnChanges {
  /**
   * 表头
   */
  @Input()
  header?: TemplateRef<void> | string;

  /**
   * 表脚
   */
  @Input()
  footer?: TemplateRef<void> | string;

  /**
   * 自定义的表格顶部按钮
   */
  @Input()
  buttons?: TemplateRef<void>;

  /**
   * 自定义的行尾按钮
   */
  @Input()
  rowButtons?: TemplateRef<any>;

  /**
   * 查询表单的按钮
   */
  @Input()
  dataLoaderButtons?: TemplateRef<void>;


  @Input()
  beforeQueryCallback: (options: HttpRequestOptions) => void;

  /**
   * 获得查询表单的数据
   */
  @Output()
  dataLoaded: EventEmitter<any> = new EventEmitter();


  @ViewChild(MaDataLoaderComponent, {static: true})
  dataLoader: MaDataLoaderComponent;


  order: Order;
  page = new Page({});

  constructor(protected viewService: ViewService,
              protected modalService: ModalService,
              protected routerService: RouterService,
              designService: DesignService,
              @Optional() dynamicComponent: MaDynamicComponent,
              @Optional() public modalRef: NzModalRef) {
    super(designService, dynamicComponent);
  }

  query = () => {
    this.dataLoader.load();
  }

  queryCallback = (options: HttpRequestOptions) => {
    if (this.beforeQueryCallback) {
      this.beforeQueryCallback(options);
    }
    options.params = Object.assign({}, options.params, this.page.toPageRequest(this.order));
  }

  receiveQueryResponse(data) {
    if (data instanceof Array) {
      this.page = new Page({content: data});
    } else {
      this.page = new Page(data);
    }
    this.dataLoaded.emit(this.page);
  }

  emit(data: any) {
    if (this.modalRef) {
      this.modalRef.destroy(data);
    }
  }

  async processClick(button: Button, data?: any) {
    if (button.triggerType === 'modal') {
      await this.createModal(button, data);
    } else if (button.triggerType === 'link') {
      let path = formatPath(button.path, data);
      if (this.uriParameters) {
        path = formatPath(path, this.uriParameters);
      }
      this.routerService.navigate(path);
    }
  }

  async createModal(button: Button, data?: any) {
    let path = formatPath(button.path, data);
    if (this.uriParameters) {
      path = formatPath(path, this.uriParameters);
    }

    this.modalService.create({
      nzTitle: null,
      nzContent: MaDynamicComponent,
      nzFooter: null,
      nzComponentParams: {path},
      nzOnOk: () => this.query()
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);
    if (changes.hasOwnProperty('viewMode')) {
      if (this.viewMode === ViewMode.DESIGN) {
        this.page = new DesignModePage(this.page);
      } else if (this.page instanceof DesignModePage) {
        this.page = this.page.restorePage();
      }
    }
  }
}
