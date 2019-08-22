import {Component} from '../../model';
import {MaDynamicComponent} from '../dynamic/ma-dynamic.component';
import {Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {extractUriParameters} from '../../util';
import {DesignService, ViewMode} from '../../service/design.service';

/**
 * 所有独立页面的基础类
 */
export class MaSeparatePageBaseComponent<C extends Component> implements OnInit, OnChanges, OnDestroy {

  @Input()
  component: C;

  @Input()
  path: string;

  @Input()
  route: string;

  /**
   * 视图模式
   * 0: view      显示
   * 1: design    设计
   */
  @Input()
  viewMode = ViewMode.VIEW;


  uriParameters: { [key: string]: string };



  constructor(private designService: DesignService, protected dynamicComponent?: MaDynamicComponent) {
    if (designService) {
      this.designService.registerDesignComponent(this);
    }

    if (this.dynamicComponent) {
      this.component = <C>Component.create(dynamicComponent.view.data);
      this.path = dynamicComponent.path; // 浏览器的实际路径
      this.route = dynamicComponent.view.path; // 该视图对应的路由表达式
    }
  }

  ngOnInit(): void {
    this.ngOnChanges({
      component: new SimpleChange(undefined, this.component, true),
      path: new SimpleChange(undefined, this.path, true),
      route: new SimpleChange(undefined, this.route, true),
    });
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('path') || changes.hasOwnProperty('route')) {
      this.uriParameters = extractUriParameters(this.path, this.route);
    }
  }

  ngOnDestroy(): void {
  }


}
