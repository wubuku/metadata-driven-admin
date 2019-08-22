import {Component, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'ma-tree-list',
  template: `
    <ul class="ant-list ant-list-sm" [style.marginLeft.px]="level * indent">
      <li class="ant-list-item" style="display: block"
          *ngFor="let rootNode of rootNodes | filter: filter; trackBy: trackByIndex; let i = index; let last = last">
        <ng-template [ngTemplateOutlet]="renderItem" [ngTemplateOutletContext]="{ $implicit: rootNode, index: i, last: last, parent: parent}"></ng-template>
        <ma-tree-list [parent]="rootNode"
                      [level]="level + 1"
                      [rootNodes]="rootNode[childrenKey]"
                      [childrenKey]="childrenKey"
                      [renderItem]="renderItem"
                      [indent]="indent"
                      [filter]="filter" *ngIf="rootNode[childrenKey]"></ma-tree-list>
      </li>
    </ul>
  `,
  styles: [`
    :host {
      display: block;
      position: relative;
    }
  `]
})
export class MaTreeListComponent {

  @Input()
  parent: any;

  @Input()
  level = 0;

  @Input()
  renderItem?: TemplateRef<void>;

  @Input()
  rootNodes: any[];

  @Input()
  childrenKey = 'children';

  @Input()
  indent = 16;

  @Input()
  filter: FilterFunction = DEFAULT_FILTER;

  trackByIndex(index: number) {
    return index;
  }
}

const DEFAULT_FILTER = () => true;

export type FilterFunction = (data: any) => boolean;
