import {Component, HostListener, Inject, Input, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {ActivatedRoute, PRIMARY_OUTLET} from '@angular/router';
import {Subscription} from 'rxjs';
import {BreadcrumbOption, NZ_ROUTE_DATA_BREADCRUMB} from 'ng-zorro-antd';

import {Bootstrap} from '../../bootstrap/bootstrap';
import {RouterService} from '../../wrapper/router.service';
import {DesignService, DesignSignalType, ViewMode} from '../../service/design.service';


@Component({
  selector: 'ma-workspace',
  templateUrl: 'ma-workspace.component.html',
  styleUrls: ['ma-workspace.component.less']
})
export class MaWorkspaceComponent implements OnInit, OnDestroy {

  @Input()
  showTopSearchBar = true;

  @Input()
  showLanguageSwitcher = true;

  @Input()
  headerToolbars: TemplateRef<void>;

  @Input()
  content: TemplateRef<void>;

  viewMode = ViewMode.VIEW;

  contentHeight = 0;

  initialized = false;

  isCollapsed = false;

  breadcrumbs: BreadcrumbOption[];

  routerSubscription: Subscription;

  viewModeSubscription: Subscription;

  constructor(@Inject(DOCUMENT) private document: any, private bootstrap: Bootstrap,
              private router: RouterService, private viewModeSwitch: DesignService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.resizeContentHeight();
    this.routerSubscription = this.router.onNavigationEnd(this.initRouterView);
    this.bootstrap.boot().then(() => {
      this.initialized = true;
      this.initRouterView();
    });
    this.viewModeSubscription = this.viewModeSwitch.subscribeViewModeSwitch(viewMode => {
      this.viewMode = viewMode;
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
    this.viewModeSubscription.unsubscribe();
  }

  initRouterView = () => {
    this.breadcrumbs = [];

    let baseUrl = '/';
    let primary = this.activatedRoute;

    while (primary) {
      const paths = primary.snapshot.url.map(segment => segment.path);
      if (paths.length === 0) {
        paths.push('');
      }

      for (const path of paths) {
        if (this.breadcrumbs.length > 0 && !path) {
          continue;
        }

        const nextUrl = baseUrl + `/${path}`;
        this.breadcrumbs.push({
          params: primary.snapshot.params,
          label: primary.snapshot.data[NZ_ROUTE_DATA_BREADCRUMB] || path || 'Home',
          url: nextUrl
        });
        baseUrl = nextUrl;
      }

      primary = primary.children.find(child => child.outlet === PRIMARY_OUTLET);
    }
  }

  toggleCollapsed(value: boolean) {
    this.isCollapsed = value;
  }


  @HostListener('window:resize')
  resizeContentHeight() {
    if (this.viewMode === ViewMode.DESIGN) {
      this.contentHeight = this.document.body.clientHeight - 64 - 65;
    } else {
      this.contentHeight = this.document.body.clientHeight - 64;
    }
  }

  @HostListener('document:keydown', ['$event'])
  toggleViewMode(event: KeyboardEvent) {
    if (event.ctrlKey && event.key.toLowerCase() === 'i') {
      event.preventDefault();
      event.stopPropagation();

      this.viewModeSwitch.toggleViewMode();
      this.resizeContentHeight();
    }
  }


  dispatchDesignEvent(type: DesignSignalType) {
    this.viewModeSwitch.emitDesignEvent(type);
  }
}
