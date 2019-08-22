import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {RouterService} from '../../wrapper/router.service';

@Component({
  selector: 'ma-wildcard-route',
  template: `
    <ma-dynamic [path]="viewPath"></ma-dynamic>
  `,
  styleUrls: ['./ma-wildcard-route.component.less']
})
export class MaWildcardRouteComponent implements OnDestroy, OnInit {


  viewPath: string;

  un: Subscription;

  constructor(private routerService: RouterService) {

  }

  ngOnInit(): void {
    this.un = this.routerService.onNavigationEnd(this.initPath);
    /**
     * 由于父级组件MaWorkspaceComponent会等待Bootstrap执行完成才初始化内容组件,
     * 以至于在该组件中无法接收到NavigationEnd事件, 因此需要手动初始化当前path的值.
     */
    this.initPath();
  }

  ngOnDestroy(): void {
    this.un.unsubscribe();
  }

  initPath = () => {
    this.viewPath = '/' + this.routerService.getContentComponentRoute();
  }

}
