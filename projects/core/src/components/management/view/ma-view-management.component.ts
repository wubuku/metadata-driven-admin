import {Component, OnInit, Optional} from '@angular/core';
import {NzModalRef} from 'ng-zorro-antd';
import {Route} from '@angular/router';
import {ViewService} from '../../../service/view.service';
import {ViewGenerator} from '../../../generator/view-generator';
import {I18nService} from '../../../service/i18n.service';
import {RouterService} from '../../../wrapper/router.service';
import {ModalService} from '../../../wrapper/modal.service';
import {View} from '../../../model';
import {RamlService} from '../../../service/raml.service';
import {DesignService} from '../../../service/design.service';


@Component({
  templateUrl: 'ma-view-management.component.html',
  styleUrls: ['../../base.less']
})
export class MaViewManagementComponent implements OnInit {


  page = 1;
  size = 50;
  total = 0;

  views: View[] = [];
  displayViews: View[];
  languages: any;

  searchText = '';

  tabIndex = 0;

  noneWildRoutes: Route[];

  inBuilding: boolean;


  constructor(private viewGenerator: ViewGenerator,
              private viewService: ViewService,
              private i18n: I18nService,
              private router: RouterService,
              private modalService: ModalService,
              private ramlService: RamlService,
              private viewModeSwitch: DesignService,
              @Optional() public modalRef: NzModalRef) {
  }

  ngOnInit(): void {
    this.languages = this.i18n.getLocales();
    this.noneWildRoutes = this.router.findStaticDeepestRoutes();
    this.viewService.getAll(this.i18n.getLocale()).subscribe(this.initViews);
  }


  initViews = (views: View[]) => {
    this.views = views;
    this.filter();
  }


  isAccessible(viewPath: string) {
    return !viewPath.includes('{');
  }


  getStartEnd() {
    const start = this.page * this.size - this.size;
    const end = start + this.size;
    return {start, end};
  }

  filter() {
    let filtered = this.views;
    const searchText = this.searchText.toUpperCase();
    if (searchText) {
      filtered = this.views.filter(v => {
        const name = v.name || '';
        const path = v.path || '';
        return name.toUpperCase().includes(searchText) || path.toUpperCase().includes(searchText);
      });
    }

    this.total = filtered.length;
    const {start, end} = this.getStartEnd();
    this.displayViews = filtered.slice(start, end);
  }

  reset() {
    this.searchText = '';
    this.filter();
  }

  emit(view: View | Route) {
    if (this.modalRef) {
      this.modalRef.destroy(view);
    }
  }

  gotoAndDesign(path: string) {
    this.router.navigate(path).then(result => {
      if (result) {
        this.viewModeSwitch.toggleViewMode();
      }
    });
  }

  remove(path: string) {
    const modalAgent = this.modalService.confirm({
      nzContent: `确定删除视图？`,
      nzOnOk: () => {
        this.viewService.remove(path).then(() => {
          const index = this.views.findIndex(v => v.path === path);
          this.views.splice(index, 1);

          const displayIndex = this.displayViews.findIndex(v => v.path === path);
          this.displayViews.splice(displayIndex, 1);

          modalAgent.destroy();
        });
      }
    }, 'warning');
  }

  async buildViewsFromRaml() {
    this.inBuilding = true;
    const raml = await this.ramlService.getRaml().toPromise();
    const generated = this.viewGenerator.generateViews(raml);
    try {
      await this.viewService.batchSave(generated, false);
      this.viewService.getAll(this.i18n.getLocale()).subscribe(this.initViews);
    } catch (e) {
      console.error(e);
    } finally {
      this.inBuilding = false;
    }
  }
}
