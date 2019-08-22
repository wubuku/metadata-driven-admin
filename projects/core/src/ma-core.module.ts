import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';

import {NgZorroAntdModule} from 'ng-zorro-antd';
import {MaWorkspaceComponent} from './components/workspace/ma-workspace.component';
import {MaIconManagementComponent} from './components/management/icon/ma-icon-management.component';
import {MaMenuManagementComponent} from './components/management/menu/ma-menu-management.component';
import {MaViewManagementComponent} from './components/management/view/ma-view-management.component';
import {MaInterfaceListComponent} from './components/management/interface/ma-interface-list.component';
import {MaSettingComponent} from './components/management/setting/ma-setting.component';
import {MaWildcardRouteComponent} from './components/wildcard/ma-wildcard-route.component';
import {MaSideContentComponent} from './components/workspace/side-content/ma-side-content.component';
import {MaSearchBarComponent} from './components/workspace/header-content/ma-search-bar.component';
import {MaHeaderContentComponent} from './components/workspace/header-content/ma-header-content.component';
import {MaDataPickerComponent} from './components/data-picker/ma-data-picker.component';
import {RouterService} from './wrapper/router.service';
import {TranslatePipe} from './pipe/translate.pipe';
import {MaOptions} from './service/ma-options';
import {I18nInterceptor} from './service/i18n.interceptor';
import {MaFormPanelComponent} from './components/form-panel/ma-form-panel.component';
import {MaDataLoaderComponent} from './components/data-loader/ma-data-loader.component';
import {MaFormComponent} from './components/form/ma-form.component';
import {MaDynamicComponent} from './components/dynamic/ma-dynamic.component';
import {MaTableComponent} from './components/table/ma-table.component';
import {MaFormControlComponent} from './components/form-panel/form-control/ma-form-control.component';
import {MaFormControlTextComponent} from './components/form-panel/form-control/ma-form-control-text.component';
import {MaFormControlCascaderComponent} from './components/form-panel/form-control/ma-form-control-cascader.component';
import {MaFormControlCheckboxComponent} from './components/form-panel/form-control/ma-form-control-checkbox.component';
import {MaFormControlDataPickerComponent} from './components/form-panel/form-control/ma-form-control-data-picker.component';
import {MaFormControlDateComponent} from './components/form-panel/form-control/ma-form-control-date.component';
import {MaFormControlDateRangeComponent} from './components/form-panel/form-control/ma-form-control-date-range.component';
import {MaFormControlDisplayTextComponent} from './components/form-panel/form-control/ma-form-control-display-text.component';
import {MaFormControlNumberComponent} from './components/form-panel/form-control/ma-form-control-number.component';
import {MaFormControlRadioComponent} from './components/form-panel/form-control/ma-form-control-radio.component';
import {MaFormControlRateComponent} from './components/form-panel/form-control/ma-form-control-rate.component';
import {MaFormControlRichTextComponent} from './components/form-panel/form-control/ma-form-control-rich-text.component';
import {MaFormControlSelectComponent} from './components/form-panel/form-control/ma-form-control-select.component';
import {MaFormControlSliderComponent} from './components/form-panel/form-control/ma-form-control-slider.component';
import {MaFormControlSwitchComponent} from './components/form-panel/form-control/ma-form-control-switch.component';
import {MaFormControlTextareaComponent} from './components/form-panel/form-control/ma-form-control-textarea.component';
import {MaFormControlTimeComponent} from './components/form-panel/form-control/ma-form-control-time.component';
import {MaFormControlUploadComponent} from './components/form-panel/form-control/ma-form-control-upload.component';
import {MaListComponent} from './components/list/ma-list.component';
import {MaDetailPanelComponent} from './components/detail-panel/ma-detail-panel.component';
import {MaTabsetComponent} from './components/tabset/ma-tabset.component';
import {MaIconComponent} from './components/workspace/side-content/ma-icon.component';
import {MA_PATCH} from './bootstrap/ma-patch';
import {MA_APP_INITIALIZER} from './bootstrap/ma-initializer';
import {ComponentRegistrar} from './bootstrap/component-registrar';
import {StyleInitializer} from './bootstrap/style-initializer';
import {MetaUpgraderPatch} from './bootstrap/meta-upgrader-patch';
import {MaEditableTextComponent} from './components/editable-text/ma-editable-text.component';
import {FilterPipe} from './pipe/filter.pipe';
import {MaFormSettingComponent} from './components/form/ma-form-setting.component';
import {MaFormControlUploadSettingComponent} from './components/form-panel/form-control/ma-form-control-upload-setting.component';
import {MaFormControlTimeSettingComponent} from './components/form-panel/form-control/ma-form-control-time-setting.component';
import {MaFormControlTextareaSettingComponent} from './components/form-panel/form-control/ma-form-control-textarea-setting.component';
import {MaFormControlTextSettingComponent} from './components/form-panel/form-control/ma-form-control-text-setting.component';
import {MaFormControlSwitchSettingComponent} from './components/form-panel/form-control/ma-form-control-switch-setting.component';
import {MaFormControlRateSettingComponent} from './components/form-panel/form-control/ma-form-control-rate-setting.component';
import {MaFormControlNumberSettingComponent} from './components/form-panel/form-control/ma-form-control-number-setting.component';
import {MaFormControlDisplayTextSettingComponent} from './components/form-panel/form-control/ma-form-control-display-text-setting.component';
import {MaFormControlDateSettingComponent} from './components/form-panel/form-control/ma-form-control-date-setting.component';
import {MaFormControlDataPickerSettingComponent} from './components/form-panel/form-control/ma-form-control-data-picker-setting.component';
import {MaFormControlChoiceSettingComponent} from './components/form-panel/form-control/ma-form-control-choice-setting.component';
import {MaDataLoaderSettingComponent} from './components/data-loader/ma-data-loader-setting.component';
import {MaButtonSettingComponent} from './components/button/ma-button-setting.component';
import {MaButtonComponent} from './components/button/ma-button.component';
import {MaDetailPanelSettingComponent} from './components/detail-panel/ma-detail-panel-setting.component';
import {MaResizeDirective} from './components/resize/ma-resize.directive';
import {MaTreeListComponent} from './components/list/ma-tree-list.component';
import {MaViewSettingComponent} from './components/base/ma-view-setting.component';
import {ExtensionMenuCustomizer, MA_MENU_CUSTOMIZER} from './service/menu-customizer';
import {RouterInspector} from './wrapper/router-inspector';
import {MA_ROUTER_INSPECTOR} from './wrapper/ma-router-inspector';
import {MA_ROUTE_FINDER} from './wrapper/ma-route-finder';
import {RouteFinder} from './wrapper/route.finder';
import {MaFormControlMapComponent} from './components/form-panel/form-control/ma-form-control-map.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DragDropModule,
    NgZorroAntdModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,    useClass: I18nInterceptor,          multi: true},
    {provide: MA_APP_INITIALIZER,   useClass: ComponentRegistrar,       multi: true},
    {provide: MA_APP_INITIALIZER,   useClass: StyleInitializer,         multi: true},
    {provide: MA_PATCH,             useClass: MetaUpgraderPatch,        multi: true},
    {provide: MA_ROUTE_FINDER,      useClass: RouteFinder                          },
    {provide: MA_ROUTER_INSPECTOR,  useClass: RouterInspector,          multi: true},
    {provide: MA_MENU_CUSTOMIZER,   useClass: ExtensionMenuCustomizer,  multi: true},
  ],
  declarations: [
    TranslatePipe,
    FilterPipe,
    MaWorkspaceComponent,
    MaHeaderContentComponent,
    MaSearchBarComponent,
    MaSideContentComponent,
    MaIconComponent,
    MaSettingComponent,
    MaIconManagementComponent,
    MaMenuManagementComponent,
    MaViewManagementComponent,
    MaInterfaceListComponent,
    MaWildcardRouteComponent,
    MaDataPickerComponent,
    MaEditableTextComponent,

    MaDynamicComponent,
    MaTableComponent,
    MaListComponent,
    MaFormComponent,
    MaFormSettingComponent,

    MaDetailPanelComponent,
    MaDetailPanelSettingComponent,

    MaTabsetComponent,

    MaDataLoaderComponent,
    MaDataLoaderSettingComponent,

    MaFormPanelComponent,

    MaFormControlComponent,

    MaFormControlCascaderComponent,
    MaFormControlCheckboxComponent,
    MaFormControlChoiceSettingComponent,

    MaFormControlDataPickerComponent,
    MaFormControlDataPickerSettingComponent,

    MaFormControlDateComponent,
    MaFormControlDateRangeComponent,
    MaFormControlDateSettingComponent,


    MaFormControlDisplayTextComponent,
    MaFormControlDisplayTextSettingComponent,

    MaFormControlNumberComponent,
    MaFormControlNumberSettingComponent,

    MaFormControlRadioComponent,
    MaFormControlRateComponent,
    MaFormControlRateSettingComponent,

    MaFormControlRichTextComponent,
    MaFormControlSelectComponent,
    MaFormControlSliderComponent,


    MaFormControlSwitchComponent,
    MaFormControlSwitchSettingComponent,

    MaFormControlTextComponent,
    MaFormControlTextSettingComponent,

    MaFormControlTextareaComponent,
    MaFormControlTextareaSettingComponent,

    MaFormControlTimeComponent,
    MaFormControlTimeSettingComponent,

    MaFormControlUploadComponent,
    MaFormControlUploadSettingComponent,

    MaFormControlMapComponent,

    MaButtonComponent,
    MaButtonSettingComponent,

    MaResizeDirective,
    MaTreeListComponent,
    MaViewSettingComponent,
  ],
  entryComponents: [
    MaSettingComponent,
    MaIconManagementComponent,
    MaMenuManagementComponent,
    MaViewManagementComponent,
    MaInterfaceListComponent,
    MaWildcardRouteComponent,

    MaDynamicComponent,

    MaFormComponent,
    MaFormSettingComponent,

    MaTableComponent,
    MaListComponent,
    MaDetailPanelComponent,
    MaDetailPanelSettingComponent,
    MaTabsetComponent,

    MaFormControlCascaderComponent,
    MaFormControlCheckboxComponent,
    MaFormControlChoiceSettingComponent,

    MaFormControlDataPickerComponent,
    MaFormControlDataPickerSettingComponent,

    MaFormControlDateComponent,
    MaFormControlDateRangeComponent,
    MaFormControlDateSettingComponent,


    MaFormControlDisplayTextComponent,
    MaFormControlDisplayTextSettingComponent,

    MaFormControlNumberComponent,
    MaFormControlNumberSettingComponent,

    MaFormControlRadioComponent,
    MaFormControlRateComponent,
    MaFormControlRateSettingComponent,

    MaFormControlRichTextComponent,
    MaFormControlSelectComponent,
    MaFormControlSliderComponent,


    MaFormControlSwitchComponent,
    MaFormControlSwitchSettingComponent,

    MaFormControlTextComponent,
    MaFormControlTextSettingComponent,

    MaFormControlTextareaComponent,
    MaFormControlTextareaSettingComponent,

    MaFormControlTimeComponent,
    MaFormControlTimeSettingComponent,

    MaFormControlUploadComponent,
    MaFormControlUploadSettingComponent,

    MaFormControlMapComponent,

    MaDataLoaderSettingComponent,
    MaButtonSettingComponent,
    MaViewSettingComponent,
  ],
  exports: [
    TranslatePipe,
    FilterPipe,
    MaWorkspaceComponent,
    MaHeaderContentComponent,
    MaSearchBarComponent,
    MaSideContentComponent,

    MaSettingComponent,
    MaIconManagementComponent,
    MaMenuManagementComponent,
    MaViewManagementComponent,
    MaInterfaceListComponent,

    MaDynamicComponent,
    MaWildcardRouteComponent,

    MaDataLoaderComponent,
    MaTableComponent,
    MaListComponent,
    MaTabsetComponent,
    MaFormComponent,
    MaFormPanelComponent,
    MaDetailPanelComponent,

    MaDataPickerComponent
  ]
})
export class MaCoreModule {

  constructor(routerService: RouterService) { // Force init router

  }

  static forRoot(options: MaOptions): ModuleWithProviders<MaCoreModule> {
    return {
      ngModule: MaCoreModule,
      providers: [
        {
          provide: MaOptions,
          useValue: {
            appId: options.appId,
            api : options.api || '/api/api.json',
            frameComponent: options.frameComponent || MaWorkspaceComponent
          }
        },
      ]
    };
  }
}

