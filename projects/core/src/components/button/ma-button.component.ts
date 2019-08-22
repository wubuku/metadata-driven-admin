import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Button} from '../../model';
import {ModalService} from '../../wrapper/modal.service';
import {MaButtonSettingComponent} from './ma-button-setting.component';
import {ViewMode} from '../../service/design.service';

@Component({
  selector: 'ma-button',
  template: `
    <div class="ma-button" [class.ma-button-designable]="viewMode === 1">
      <ng-template #InputPrefix>
        <i nz-icon type="setting" (click)="openSettingComponent()"></i>
      </ng-template>
      <ng-template #InputSuffix>
        <i nz-icon type="delete" (click)="emitDelete()"></i>
      </ng-template>
      <nz-input-group [nzPrefix]="InputPrefix" [nzSuffix]="InputSuffix">
        <input nz-input [(ngModel)]="button.label" #input/>
      </nz-input-group>

      <button nz-button type="button" (click)="emitClick($event)" [nzType]="button.classType" [disabled]="disabled">{{button.label}}</button>
    </div>
  `,
  styleUrls: ['./ma-button.component.less']
})
export class MaButtonComponent {
  @Input()
  button: Button;

  @Input()
  viewMode: ViewMode;

  @Input()
  disabled: boolean;

  @Output()
  delete = new EventEmitter<Button>();

  @Output()
  innerClick = new EventEmitter<MouseEvent>();


  constructor(private modalService: ModalService) {
  }

  emitClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    if (!this.disabled) {
      this.innerClick.emit(event);
    }
  }

  emitDelete() {
    this.delete.emit(this.button);
  }

  openSettingComponent() {
    this.modalService.openSettingComponent('设置' + this.button.label + '按钮', MaButtonSettingComponent, {value: this.button});
  }
}
