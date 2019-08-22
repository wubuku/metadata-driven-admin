import {Component, OnInit} from '@angular/core';
import {ViewService, View} from '../../import-proxy';

@Component({
  selector: 'app-home',
  template: `
    <ng-template #buttons>
      <button nz-button type="button">导出</button>
    </ng-template>
    <ng-template #title>
      <h2>hello world</h2>
    </ng-template>
    <ma-table [component]="view.data" [route]="'/Warehouses'" [path]="'/Warehouses'"
              [header]="title" [buttons]="buttons" *ngIf="view"></ma-table>
  `,
})
export class WarehousesComponent implements OnInit {
  view: View;

  constructor(public viewService: ViewService) {

  }

  ngOnInit(): void {
    this.viewService.getByPath('/Warehouses').then(view => {
      this.view = view;
    });
  }

}
