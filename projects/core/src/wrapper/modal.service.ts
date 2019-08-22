import {Injectable, TemplateRef, Type} from '@angular/core';
import {ConfirmType, ModalOptionsForService, NzModalRef, NzModalService} from 'ng-zorro-antd';


@Injectable({providedIn: 'root'})
export class ModalService {
  private currentIndex = 10;

  constructor(private service: NzModalService) {

  }

  modalZIndex(): number {
    return this.currentIndex++;
  }

  create<T = any>(options: ModalOptionsForService<T>): NzModalRef<T> {
    if (!options.nzZIndex) {
      options.nzZIndex = this.modalZIndex();
    }
    if (!options.nzWidth) {
      options.nzWidth = '61.8%';
    }

    return this.service.create<T>(options);
  }

  confirm<T>(options?: ModalOptionsForService<T>, confirmType: ConfirmType = 'confirm'): NzModalRef<T> {
    if (!options.nzZIndex) {
      options.nzZIndex = this.modalZIndex();
    }
    return this.service.confirm(options, confirmType);
  }

  warning<T>(options?: ModalOptionsForService<T>): NzModalRef<T> {
    return this.service.warning(options);
  }

  openSettingComponent<T = any>(title: string, content: string | TemplateRef<{}> | Type<T>, params?: object) {
    const agent = this.create({
      nzTitle: title,
      nzContent: content,
      nzComponentParams: params,
      nzZIndex: this.modalZIndex(),
      nzFooter: [{
        label: '确定',
        type: 'primary',
        onClick: () => {
          agent.destroy();
        }
      }],
      nzMaskStyle: {
        'background-color': 'rgba(0,0,0,0.05)' // 设置一定的透明度，可以透过遮罩看到变化
      }
    });
    return agent;
  }

}
