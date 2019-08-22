import {Component, Input, OnChanges, Optional, SimpleChanges} from '@angular/core';
import {NzMessageService, NzModalRef} from 'ng-zorro-antd';
import {Button, Column, ColumnHeader, Header, Order, Table} from '../../model';
import {ViewService} from '../../service/view.service';
import {ModalService} from '../../wrapper/modal.service';
import {RouterService} from '../../wrapper/router.service';
import {MaDynamicComponent} from '../dynamic/ma-dynamic.component';
import {MaPageableBaseComponent} from '../base/ma-pageable-base.component';
import {TranslateService} from '../../service/translate.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {DesignService, ViewMode} from '../../service/design.service';

@Component({
  selector: 'ma-table',
  templateUrl: './ma-table.component.html',
  styleUrls: ['./ma-table.component.less'],
})
export class MaTableComponent extends MaPageableBaseComponent<Table> implements OnChanges {

  @Input()
  renderColumn?: (column: Column, value: any) => string;

  headerRows: Header[][];
  dataRow: ColumnHeader[];
  scroll: { x: string, y?: string } = {x: '100%'};

  order: Order;

  showRowButtons: boolean;

  // drag & drop
  dragging = false;

  constructor(private messageService: NzMessageService, private translateService: TranslateService,
              viewService: ViewService, modalService: ModalService,
              routerService: RouterService, designService: DesignService,
              @Optional() dynamicComponent: MaDynamicComponent,
              @Optional() modalRef: NzModalRef) {
    super(viewService, modalService, routerService, designService, dynamicComponent, modalRef);
  }


  ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);
    this.initScroll();
    if (this.component.showTitle) {
      this.header = this.header || this.component.title;
    }

    if (changes.hasOwnProperty('component')) {
      this.initHeaders();
    }
  }

  initScroll() {
    if (this.component.fixedHeader) {
      this.scroll.y = '500px';
    }
  }

  initHeaders() {
    const headerRows: ColumnHeader[][] = [];

    let row = this.columnsToHeaderRow(this.component.columns);

    while (true) {
      headerRows.push(row);
      const nextRow = [];
      for (const column of row) {
        nextRow.push(...this.filterNoneHide(column.children));
      }
      if (nextRow.length === 0) {
        break;
      }
      row = nextRow;
    }

    this.calculateRowspan(headerRows);

    this.dataRow = [...row];
    this.headerRows = headerRows;
    if (this.component.rowButtons.length > 0 || this.modalRef || this.rowButtons) {
      this.headerRows[0].push({
        label: this.translateService.translate('operation'),
        right: '0px',
        rowspan: headerRows.length
      });
      this.showRowButtons = true;
    }
  }

  columnsToHeaderRow(columns: Column[]): ColumnHeader[] {
    return (columns || []).filter(c => !c.hide).map(c => new ColumnHeader(c));
  }

  filterNoneHide(children: ColumnHeader[]) {
    return (children || []).filter(c => !c.column.hide);
  }

  calculateRowspan(headers: ColumnHeader[][]) {
    const maxRowspan = headers.length;
    for (const row of headers) {
      for (const header of row) {
        if (!header.children) {
          header.rowspan = maxRowspan - this.countLevels(header, false);
        } else {
          header.rowspan = 1;
        }
      }
    }
  }

  countLevels(header: ColumnHeader, includeItself: boolean = true) {
    let p = includeItself ? header : header.parent;
    let count = 0;
    while (p) {
      count++;
      p = p.parent;
    }
    return count;
  }

  trackByIndex(index: number) {
    return index;
  }

  renderColumnHeader(columnHeader: ColumnHeader, data: any) {
    const fields = [columnHeader.field];
    let p = columnHeader.parent;
    while (p) {
      fields.push(p.field);
      p = p.parent;
    }

    let value = data;
    for (const field of fields.reverse()) {
      value = value[field];
      if (!value) {
        return '';
      }
    }

    if (this.renderColumn) {
      value = this.renderColumn(columnHeader.column, value);
    }
    return value;
  }

  sort(field: string, dir: string) {
    if (this.viewMode === ViewMode.VIEW) {
      this.order = {key: field, value: dir};
      this.query();
    }
  }

  isInvisible = (column: Column) => {
    if (column.hide) {
      return true;
    }

    if (column.columns) {
      for (const subColumn of column.columns) {
        if (this.isInvisible(subColumn)) {
          return true;
        }
      }
    }
    return false;
  }

  toggleVisibility(column: Column, initHeaders = true) {
    column.hide = !Boolean(column.hide);
    if (column.columns) {
      for (const subColumn of column.columns) {
        this.toggleVisibility(subColumn, false);
      }
    }
    if (initHeaders) {
      this.initHeaders();
    }
  }

  drop(event: CdkDragDrop<string[]>, row: ColumnHeader[]) {
    const prevColumn = row[event.previousIndex];
    const currColumn = row[event.currentIndex];

    if (prevColumn.parent === currColumn.parent) {
      const columns = prevColumn.parent.column.columns;
      const previousIndex = columns.indexOf(prevColumn.column);
      const currentIndex = columns.indexOf(currColumn.column);

      moveItemInArray(columns, previousIndex, currentIndex);
      this.initHeaders();
    } else {
      this.messageService.warning('只能改变组内字段顺序');
    }
  }

  toggleDragging() {
    this.dragging = !this.dragging;
  }

  toggleSortable(event: MouseEvent, header: Header) {
    event.preventDefault();
    event.stopPropagation();
    header.sortable = !Boolean(header.sortable);
  }

  addButton(buttons: Button[]) {
    const button = new Button();
    button.classType = 'primary';
    button.label = '新按钮' + buttons.length;
    buttons.push(button);
  }

  deleteButton(button: Button) {
    const index = this.component.buttons.indexOf(button);
    this.component.buttons.splice(index, 1);
  }
}

