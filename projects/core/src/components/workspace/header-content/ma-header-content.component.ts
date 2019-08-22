import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, TemplateRef} from '@angular/core';
import {Subscription} from 'rxjs';
import {RouterService} from '../../../wrapper/router.service';
import {I18nService} from '../../../service/i18n.service';
import {SettingService} from '../../../service/setting.service';
import {Setting} from '../../../model';

@Component({
  selector: 'ma-header-content',
  templateUrl: 'ma-header-content.component.html',
  styleUrls: ['ma-header-content.component.less']
})
export class MaHeaderContentComponent implements OnInit, OnDestroy {

  @Input()
  showTopSearchBar = true;

  @Input()
  showLanguageSwitcher = true;

  @Input()
  toolbars: TemplateRef<void>;

  @Output()
  toggleCollapsed: EventEmitter<boolean> = new EventEmitter<boolean>();

  collapsedState = false;

  private un: Subscription;
  basePath: string;
  app: Setting;
  language: string;
  languages: any;



  constructor(private routerService: RouterService, private settingsService: SettingService, private i18n: I18nService) {

  }

  ngOnInit(): void {
    this.un = this.settingsService.get().subscribe(app => this.app = app);

    this.basePath = this.routerService.baseRoute;

    this.language = this.i18n.getLocale();
    this.languages = this.i18n.getLocales();
  }

  ngOnDestroy(): void {
    this.un.unsubscribe();
  }

  emitCollapsedState() {
    this.collapsedState = !this.collapsedState;
    this.toggleCollapsed.emit(this.collapsedState);
  }

  switchLanguage(lang: string) {
    this.i18n.setLocale(lang);
    this.routerService.reload();
  }

}
