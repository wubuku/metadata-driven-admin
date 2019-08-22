import {Component, Input, Optional, TemplateRef} from '@angular/core';
import {NzModalRef} from 'ng-zorro-antd';
import {MaDynamicComponent} from '../dynamic/ma-dynamic.component';
import {RouterService} from '../../wrapper/router.service';
import {List} from '../../model';
import {ModalService} from '../../wrapper/modal.service';
import {ViewService} from '../../service/view.service';
import {MaPageableBaseComponent} from '../base/ma-pageable-base.component';
import {DesignService} from '../../service/design.service';

@Component({
  selector: 'ma-list',
  templateUrl: './ma-list.component.html',
  styleUrls: ['./ma-list.component.less']
})
export class MaListComponent extends MaPageableBaseComponent<List> {

  @Input()
  contentRef?: TemplateRef<void>;


  constructor(viewService: ViewService,
              modalService: ModalService,
              routerService: RouterService,
              designService: DesignService,
              @Optional() dynamicComponent: MaDynamicComponent,
              @Optional() modalRef: NzModalRef) {
    super(viewService, modalService, routerService, designService, dynamicComponent, modalRef);
  }
}
