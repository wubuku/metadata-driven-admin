import {Component, ComponentFactoryResolver, EventEmitter, Input, OnChanges, SimpleChanges, ViewChild, ViewContainerRef} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';
import {ComponentManager} from '../../../service/component-manager';
import {FormItem} from '../../../model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'ma-form-control',
  template: `
    <ng-container #control></ng-container>
  `,
  styleUrls: [`../../base.less`]
})
export class MaFormControlComponent implements OnChanges {


  @Input()
  item: FormItem;

  @ViewChild('control', {read: ViewContainerRef, static: true})
  container: ViewContainerRef;

  settingEventEmitter = new EventEmitter<any>();

  constructor(private resolver: ComponentFactoryResolver, private messageService: NzMessageService, private componentManager: ComponentManager) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.item.isFirstChange()) {
      this.container.clear();
    }
    const component = this.componentManager.getComponent(this.item.type);
    if (component) {
      const factory = this.resolver.resolveComponentFactory(component);
      this.container.createComponent(factory);
    } else {
      this.messageService.error(`不支持的表单=>${this.item.field} : ${this.item.type}`);
    }
  }

  setting() {
    this.settingEventEmitter.emit();
  }

  subscribeSettingEvent(next?: (value: any) => void, error?: (error: any) => void, complete?: () => void): Subscription {
    return this.settingEventEmitter.subscribe(next, error, complete);
  }
}


