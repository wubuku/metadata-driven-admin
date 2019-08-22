import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Subscription} from 'rxjs';
import {Menu} from '../../../model';
import {RouterService} from '../../../wrapper/router.service';
import {MenuService} from '../../../service/menu.service';
import {DesignService, ViewMode} from '../../../service/design.service';
import {ComponentManager} from '../../../service/component-manager';
import {ComponentDefinition} from '../../../bootstrap/component-registrar';
import {CdkDragDrop} from '@angular/cdk/drag-drop';

export interface MenuNode extends Menu {
  reachable?: boolean; // 是否为一个页面的菜单
  children?: MenuNode[];
}

export interface ComponentGroup {
  type: string;
  name: string;
  componentDefinitions?: ComponentDefinition[];
}

@Component({
  selector: 'ma-side-content',
  templateUrl: 'ma-side-content.component.html',
  styleUrls: ['ma-side-content.component.less']
})
export class MaSideContentComponent implements OnChanges, OnInit, OnDestroy {

  @Input()
  isCollapsed = false;

  basePath: string;

  componentGroups: ComponentGroup[] = [
    {
      type: 'page',
      name: '页面组件'
    },
    {
      type: 'form-item',
      name: '表单控件'
    }
  ];


  menus: MenuNode[] = [];

  private menuSubscription: Subscription;


  viewMode: ViewMode = ViewMode.VIEW;

  private viewModeSubscription: Subscription;

  constructor(private menuService: MenuService, private routerService: RouterService,
              private viewModeSwitch: DesignService, private componentManager: ComponentManager) {
  }


  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
    this.basePath = this.routerService.baseRoute;
    this.componentGroups.forEach(group => group.componentDefinitions = this.componentManager.getComponentDefinitions(group.type));
    this.viewModeSubscription = this.viewModeSwitch.subscribeViewModeSwitch(viewMode => this.viewMode = viewMode);
    this.menuSubscription = this.menuService.getPermitMenus().subscribe(this.initMenus);
  }

  ngOnDestroy(): void {
    this.menuSubscription.unsubscribe();
    this.viewModeSubscription.unsubscribe();
  }

  initMenus = (menus: MenuNode[]) => {
    this.menus = [...menus];
    this.setReachable(this.menus);
  }

  setReachable(menus: MenuNode[]) {
    if (menus) {
      for (const menu of menus) {
        if (menu.path.charAt(0) === '/') {
          menu.reachable = true;
        }

        if (menu.children) {
          this.setReachable(menu.children);
        }
      }
    }
  }

  isOpen(menu: Menu) {
    if (menu.children) {
      return menu.children.find(sb => this.routerService.isActive(sb.path)) != null;
    }
    return false;
  }

  isActive(route: string) {
    return this.routerService.isActive(route);
  }

  /**
   * 受限于cdk的drag&drop底层实现，无法做到跨组件拖动，因此暂时放弃通过drag&drop实现对视图的修改逻辑
   */
  dropped(event: CdkDragDrop<any>, def: ComponentDefinition) {
    console.log('dropped', event);
    console.log('dropped', event.item['_pointerPositionAtLastDirectionChange'], event.item['_pickupPositionOnPage'], event.item['_pickupPositionInElement']);
  }


  dropListDropped(event) {
    console.log('dropListDropped', event);
  }
}
