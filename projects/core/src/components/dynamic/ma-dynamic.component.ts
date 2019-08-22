import {Component, ComponentFactoryResolver, ComponentRef, Input, ViewChild, ViewContainerRef} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';
import {View} from '../../model';
import {ComponentManager} from '../../service/component-manager';
import {ViewService} from '../../service/view.service';
import {ModalService} from '../../wrapper/modal.service';

@Component({
  selector: 'ma-dynamic',
  template: `
    <ng-container #container></ng-container>
  `,
  styleUrls: ['./ma-dynamic.component.less'],
})
export class MaDynamicComponent {

  view: View;

  innerPath: string;


  @ViewChild('container', {read: ViewContainerRef, static: true})
  container: ViewContainerRef;


  componentRef: ComponentRef<any>;


  constructor(private resolver: ComponentFactoryResolver, private messageService: NzMessageService, private modalService: ModalService,
              private componentManager: ComponentManager, private viewService: ViewService) {

  }

  get path() {
    return this.innerPath;
  }

  @Input()
  set path(path: string) {
    this.innerPath = path;
    this.container.clear();
    this.resolveComponent();
  }

  resolveComponent() {
    if (this.path === '/') {
      return;
    }
    this.viewService.getByPath(this.path).then(view => {
      this.view = view;
      this.doResolveComponent();
    });
  }

  doResolveComponent = () => {
    const componentType = this.view.data.type;
    const componentClass = this.componentManager.getComponent(componentType);
    if (componentClass) {
      const componentFactory = this.resolver.resolveComponentFactory(componentClass);
      this.componentRef = this.container.createComponent(componentFactory);
    } else {
      this.messageService.error(`不支持的组件=> ${componentType}`);
    }
  }

}

