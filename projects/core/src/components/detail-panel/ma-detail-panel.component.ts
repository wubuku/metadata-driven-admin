import {Component, Input, Optional, TemplateRef} from '@angular/core';
import {MaSeparatePageBaseComponent} from '../base/ma-separate-page-base.component';
import {MaDynamicComponent} from '../dynamic/ma-dynamic.component';
import {DetailPanel} from '../../model';
import {ModalService} from '../../wrapper/modal.service';
import {MaDetailPanelSettingComponent} from './ma-detail-panel-setting.component';
import {DesignService} from '../../service/design.service';

@Component({
  selector: 'ma-detail-panel',
  templateUrl: './ma-detail-panel.component.html',
  styleUrls: ['./ma-detail-panel.component.less']
})
export class MaDetailPanelComponent extends MaSeparatePageBaseComponent<DetailPanel> {

  /**
   * 查询表单的按钮
   */
  @Input()
  dataLoaderButtons: TemplateRef<void>;

  formValue: any;

  constructor(private modalService: ModalService,
              designService: DesignService,
              @Optional() dynamicComponent: MaDynamicComponent) {
    super(designService, dynamicComponent);
  }

  dataLoaded(formValue: any) {
    this.formValue = {display: formValue};
  }

  openDetailPanelSetting() {
    this.modalService.openSettingComponent('详情页元数据设置', MaDetailPanelSettingComponent, {value: this.component});
  }
}
