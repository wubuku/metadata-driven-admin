import {EventEmitter, Injectable, SimpleChange, SimpleChanges} from '@angular/core';
import {Subscription} from 'rxjs';
import {NzMessageService} from 'ng-zorro-antd';
import {RouterService} from '../wrapper/router.service';
import {ViewService} from './view.service';
import {Component} from '../model';
import {ModalService} from '../wrapper/modal.service';
import {MaViewSettingComponent} from '../components/base/ma-view-setting.component';

export enum ViewMode {
  VIEW = 0,
  DESIGN = 1
}

export declare type DesignSignalType = 'save' | 'delete' | 'revert';

export interface DesignEvent {
  type: DesignSignalType;
}

export interface DesignComponent {
  component: any;
  path: string;
  route: string;
  viewMode: ViewMode;

  ngOnChanges(changes: SimpleChanges): void;
}

@Injectable({providedIn: 'root'})
export class DesignService {

  private toggle = new EventEmitter<ViewMode>();

  private design = new EventEmitter<DesignEvent>();

  private viewMode = ViewMode.VIEW;

  private designComponent: DesignComponent;

  constructor(private viewService: ViewService,
              private modalService: ModalService,
              private messageService: NzMessageService,
              private router: RouterService) {

    router.onNavigationStart(() => {
      if (this.viewMode === ViewMode.DESIGN) {
        // modalService.confirm({
        //   nzTitle: '离开此页面？',
        //   nzContent: '当前页面正处于设计中，是否确定离开？',
        //   nzOnOk: () => {
        //     this.viewMode = ViewMode.VIEW;
        //   }
        // });
        this.viewMode = ViewMode.VIEW;
      }
    });
    this.subscribeViewModeSwitch(this.updateDesignComponentViewMode);
    this.subscribeDesignEvent(this.processDesignEvent);
  }


  toggleViewMode(): ViewMode {
    this.viewMode = this.viewMode === ViewMode.VIEW ? ViewMode.DESIGN : ViewMode.VIEW;
    this.toggle.emit(this.viewMode);

    if (this.viewMode === ViewMode.DESIGN) {
      console.log(this.designComponent.component);
      this.messageService.info('进入编辑器模式');
    } else {
      this.messageService.info('退出编辑器模式');
    }
    return this.viewMode;
  }

  emitDesignEvent(signalType: DesignSignalType) {
    this.design.emit({type: signalType});
  }

  subscribeViewModeSwitch(next?: (value: ViewMode) => void, error?: (error: any) => void, complete?: () => void): Subscription {
    return this.toggle.subscribe(next, error, complete);
  }

  subscribeDesignEvent(next?: (value: DesignEvent) => void, error?: (error: any) => void, complete?: () => void): Subscription {
    return this.design.subscribe(next, error, complete);
  }

  registerDesignComponent(component: DesignComponent) {
    this.designComponent = component;
  }

  updateDesignComponentViewMode = (viewMode: ViewMode) => {
    if (this.designComponent) {
      const oldValue = this.designComponent.viewMode;
      this.designComponent.viewMode = viewMode;
      if (this.designComponent.ngOnChanges) {
        this.designComponent.ngOnChanges({
          viewMode: new SimpleChange(oldValue, this.designComponent.viewMode, false)
        });
      }
    }
  }

  processDesignEvent = (event: DesignEvent) => {
    if (this.designComponent) {
      if (event.type === 'revert') {
        this.viewService.getByPath(this.designComponent.route).then(view => {
          const oldValue = this.designComponent.component;
          this.designComponent.component = Component.create(view.data);
          this.designComponent.ngOnChanges({
            component: new SimpleChange(oldValue, this.designComponent.component, false)
          });
        });
      } else if (event.type === 'delete') {
        this.modalService.confirm({
          nzTitle: '确定删除此视图',
          nzOnOk: () => {
            this.viewService.remove(this.designComponent.route);
            this.router.navigate('/');
          }
        });
      } else if (event.type === 'save') {
        this.viewService.getByPath(this.designComponent.route).then(view => {
          this.modalService.create({
            nzWidth: '40%',
            nzTitle: '保存视图',
            nzContent: MaViewSettingComponent,
            nzComponentParams: {view},
            nzOnOk: () => {
              view.data = this.designComponent.component;
              this.viewService.saveOrUpdate(view);
              this.toggleViewMode();
            }
          });
        });

      }
    }
  }
}

