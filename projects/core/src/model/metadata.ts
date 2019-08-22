/**
 * 组件基类
 */
import {Type} from '@angular/core';

export const MA_VERSION = 2;


export interface Setting {
  id: string;
  appVersion: number;
  apiVersion: any;
  logo?: string;
  appName?: string;
  theme?: { [variable: string]: string };
  extra?: any;
}

export interface Menu {
  language: string;
  path: string;
  index: number;
  displayName: string;
  description: string;
  parent?: string;
  icon?: {
    iconfont?: string;
    type?: string;
    theme?: string;
  };
  children?: Menu[];
}

export interface View {
  language: string;
  path: string;
  name: string;
  data?: any;
}

export interface BatchUpdate {
  views?: View[];
  menus?: Menu[];
  forceUpdate: boolean;
}

export interface IconSource {
  id?: number; // 自动生成
  url: string;
  title: string;
  createdTime?: Date;
  updatedTime?: Date;
}

export abstract class Component {

  protected constructor(definition?: any) {
    copy(this, definition);
  }

  static factories = new Map<string, Type<Component>>();
  type: string;

  static create(definition: any): Component {
    if (definition instanceof Component) {
      return definition;
    }
    if (definition.type) {
      const MetamodelType = Component.factories.get(definition.type);
      if (MetamodelType) {
        return new MetamodelType(definition);
      }
      throw new Error('Component.create:::不支持的组件' + definition.type);
    }

    throw new Error('参数错误:::' + definition);
  }

  static registerFactory<T extends Component>(key: string, metamodelType: Type<T>) {
    Component.factories.set(key, metamodelType);
  }
}

export abstract class Container<T extends Component = Component> extends Component {
  children: T[] = [];
}

export abstract class Wrapper<T extends Component = Component> extends Component {
  content: T;
  viewPath: string;
}

export class Card extends Wrapper<Component> {
  type = 'card';
  title = 'card title';
  bordered = true;

  constructor(definition?: any) {
    super();
    copy(this, definition);
    if (this.content) {
      this.content = Component.create(this.content);
    }
  }
}

export class Row<C extends Component = Component> extends Container<Cell<C>> {
  type = 'row';
  horizontal = 6;
  vertical = 6;

  constructor(definition?: any) {
    super();
    copy(this, definition);
    if (this.children) {
      this.children = this.children.map(child => new Cell<C>(child));
    }
  }
}

export class Cell<T extends Component = Component> extends Wrapper<T> {
  type = 'cell';
  width = 8;


  constructor(definition?: any) {
    super();
    copy(this, definition);
    if (this.content) {
      this.content = <T>Component.create(this.content);
    }
  }
}

export class TabSet extends Container<Tab> {
  type = 'tabset';

  constructor(definition?: any) {
    super();
    copy(this, definition);
    if (this.children) {
      this.children = this.children.map(child => new Tab(child));
    }
  }
}

export class Tab extends Wrapper<Component> {
  type = 'tab';
  title: string;

  constructor(definition?: any) {
    super();
    copy(this, definition);
    if (this.content) {
      this.content = Component.create(this.content);
    }
  }
}

export class List extends Wrapper<Component> {

  type = 'list';
  title: string;
  bordered: boolean;
  split: boolean;
  showPagination: boolean;
  dataLoader: DataLoader;
  buttons: Button[];
  rowButtons: Button[];

  constructor(definition?: any) {
    super();
    copy(this, definition);

    if (this.dataLoader) {
      this.dataLoader = new DataLoader(this.dataLoader);
    }
    if (this.buttons) {
      this.buttons.forEach(btn => Object.setPrototypeOf(btn, Button.prototype));
    }
    if (this.rowButtons) {
      this.rowButtons.forEach(btn => Object.setPrototypeOf(btn, Button.prototype));
    }
  }
}

export class Table extends Component {
  type = 'table';
  showPagination: boolean;
  bordered: boolean;
  fixedHeader = false;
  showTitle: boolean; // 显示表格的标题
  title: string; // 产品列表 product list
  dataLoader: DataLoader;
  buttons: Button[];
  columns: Column[];
  rowButtons: Button[];

  constructor(definition?: any) {
    super();
    copy(this, definition);
    if (this.dataLoader) {
      this.dataLoader = new DataLoader(this.dataLoader);
    }
    if (this.buttons) {
      this.buttons.forEach(btn => Object.setPrototypeOf(btn, Button.prototype));
    }
    if (this.rowButtons) {
      this.rowButtons.forEach(btn => Object.setPrototypeOf(btn, Button.prototype));
    }
    if (this.columns) {
      this.columns.forEach(column => Object.setPrototypeOf(column, Column.prototype));
    }
  }
}

export class Column extends Component {
  type = 'column';

  label: string;
  field: string;
  index: number;
  hide = false;
  sortable = false;
  columns: Column[];


  constructor(definition: any) {
    super();
    copy(this, definition);
    if (this.columns) {
      this.columns = this.columns.map(col => new Column(col));
    }
  }
}

export declare type TriggerType = 'link' | 'modal' | 'submit' | 'cancel';

export declare type ClassType = 'primary' | 'default' | 'danger' | 'dashed';

export class Button extends Component {
  type = 'button';

  triggerType: TriggerType;
  classType: ClassType;
  label: string;
  description: string;

  path: string;

  constructor(definition?: any) {
    super();
    copy(this, definition);
  }
}

export class DetailPanel extends Component {
  type = 'detail-panel';
  title: string;
  dataLoader: DataLoader;
  formPanel: FormPanel;
  tabset: TabSet;

  constructor(definition?: any) {
    super();
    copy(this, definition);
    if (this.dataLoader) {
      this.dataLoader = new DataLoader(this.dataLoader);
    }
    if (this.formPanel) {
      this.formPanel = new FormPanel(this.formPanel);
    }
    if (this.tabset) {
      this.tabset = new TabSet(this.tabset);
    }
  }
}

export class FormPanel extends Component {
  type = 'form-panel';
  body: Row<FormItem>;
  title?: string;
  buttons: Button[] = [];

  collapsible = false;
  buttonsWidth = 8;

  constructor(definition?: any) {
    super();
    copy(this, definition);

    if (this.body) {
      this.body = new Row<FormItem>(this.body);
    }
  }
}

export class Form extends Component {
  type = 'form';
  path: string;
  method: string;
  contentType: string;
  formPanel: FormPanel;
  dataLoader?: DataLoader;

  constructor(definition?: any) {
    super();
    copy(this, definition);

    if (this.formPanel) {
      this.formPanel = new FormPanel(this.formPanel);
    }
  }
}

export class DataLoader extends Component {
  type = 'data-loader';

  path: string;
  method: string;
  accept?: string; // 暂时并未用到此字段
  formPanel?: FormPanel;

  constructor(definition?: any) {
    super();
    copy(this, definition);

    if (this.formPanel) {
      this.formPanel = new FormPanel(this.formPanel);
    }
  }
}

export abstract class FormItem extends Component {
  field: string;
  label: string;
  labelWidth = 8;
  fieldWidth = 16;
  description: string;
  value: any;
  required = false;
  hide = false;
  op: 'ne' | 'eq' | 'ge' | 'gt' | 'le' | 'lt' | 'in' | 'like' | 'between';

  protected constructor(definition?: any) {
    super();
    copy(this, definition);
  }
}

export class ArrayField extends FormItem {
  type = 'array';
  items: FormItem[];
  minLength: number;
  maxLength: number;

  constructor(definition?: any) {
    super();
    copy(this, definition);
    if (this.items) {
      this.items = this.items.map(item => Component.create(item) as FormItem);
    }
  }
}

export class MapField extends FormItem {
  type = 'map';
  key: Text;
  val: FormItem[];
  minLength: number;
  maxLength: number;

  constructor(definition?: any) {
    super();
    copy(this, definition);

    if (this.key) {
      Object.setPrototypeOf(this.key, Text.prototype);
    }

    if (this.val) {
      this.val = this.val.map(item => Component.create(item) as FormItem);
    }
  }
}

export class Text extends FormItem {
  type = 'text';
  pattern: string;
  minLength: number;
  maxLength: number;

  constructor(definition?: any) {
    super(definition);
  }
}

export class TextArea extends Text {
  type = 'textarea';
  auto = true;
  minRows = 1;
  maxRows = 3;

  get size() {
    return {minRows: this.minRows, maxRows: this.maxRows};
  }

  constructor(definition: any) {
    super();
    copy(this, definition);
  }

}

export class RichText extends TextArea {
  type = 'rich-text';

  constructor(definition: any) {
    super(definition);
  }
}

export class InputNumber extends FormItem {
  type = 'number';
  min: number;
  max: number;
  stride = 1; // 步幅
  constructor(definition?: any) {
    super();
    copy(this, definition);
  }

}

export class Slider extends InputNumber {
  type = 'slider';
  min = 0;
  max = 100;

  constructor(definition: any) {
    super();
    copy(this, definition);
  }
}

export interface Option {
  label: string;
  value: string | number | boolean;
  checked?: boolean; // only for checkbox
  children?: Option[]; // only for cascader
  isLeaf?: boolean; // only for cascader
}

export class Choice extends FormItem {
  static DEFAULT_OPTIONS: Option[] = [
    {label: '选项1', value: 1},
    {label: '选项2', value: 2},
    {label: '选项3', value: 3},
  ];
  options: Option [] = Choice.DEFAULT_OPTIONS;

  constructor(definition?: any) {
    super();
    copy(this, definition);
  }
}

export class Cascader extends Choice {


  constructor(definition: any) {
    super();
    copy(this, definition);
    if (this.options) {
      Cascader.updateOptionsLeaf(this.options);
    }
  }

  static DEFAULT_OPTIONS = [
    {label: '选项1', value: 1, isLeaf: true},
    {label: '选项2', value: 2, isLeaf: true},
    {label: '选项3', value: 3, isLeaf: true},
  ];
  type = 'cascader';
  options = Cascader.DEFAULT_OPTIONS;

  static updateOptionsLeaf(options: Option[]) {
    for (const option of options) {
      if (!option.children) {
        option.isLeaf = true;
      } else {
        this.updateOptionsLeaf(option.children);
      }
    }
  }

}

export class Select extends Choice {
  type = 'select';
}

export class Radio extends Choice {
  type = 'radio';
}

export class Checkbox extends Choice {
  type = 'checkbox';


  constructor(definition: any) {
    super();
    copy(this, definition);
    Checkbox.updateOptionsChecked(this.options, this.value);
  }

  static updateOptionsChecked(options: Option[], array: any[]) {
    if (array) {
      for (const value of array) {
        for (const option of options) {
          if (option.value === value) {
            option.checked = true;
          }
        }
      }
    }
  }
}

export class Switch extends FormItem {
  type = 'switch';
  mode: 'switch' | 'checkbox' = 'switch';

  constructor(definition?: any) {
    super();
    copy(this, definition);
  }
}

export class Rate extends FormItem {
  type = 'rate';
  count = 5;
  half = true;

  constructor(definition: any) {
    super();
    copy(this, definition);
  }
}

export class DatePicker extends FormItem {

  constructor(definition: any) {
    super();
    copy(this, definition);
  }

  type = 'date';
  format = 'yyyy-MM-dd HH:mm:ss';
  showTime = true;
  startDate: Date;
  endDate: Date;

  static dateonly(def: any) {
    return new DatePicker({...def, showTime: false});
  }

  disabledDate = (current: Date) => {
    let result = false;
    if (this.startDate) {
      result = current.getTime() < this.startDate.getTime();
    }
    if (this.endDate) {
      result = result || current.getTime() > this.endDate.getTime();
    }
    return result;
  };
}

export class DateRangePicker extends DatePicker {
  type = 'date-range';

  static dateonly(def: any) {
    return new DateRangePicker({...def, showTime: false});
  }
}

export class TimePicker extends FormItem {
  type = 'time';
  format = 'HH:mm:ss';

  constructor(definition: any) {
    super();
    copy(this, definition);
  }
}

export class UploadPicker extends FormItem {
  type = 'upload-picker';
  fileType: string[];
  listType: 'text' | 'picture' | 'picture-card';
  size = 100; // 默认为100KB
  multiple: boolean; // 是否允许上传多个文件
  limit: number; // 单次最大上传文件数（在允许单次上传多个文件的情况下有效）

  constructor(definition?: any) {
    super();
    copy(this, definition);
  }
}

export class DataPicker extends FormItem {
  type = 'data-picker';
  /**
   * 提取选中的对象路径
   */
  objectPath: string;
  /**
   * 引用的目标视图地址
   */
  viewPath: string;

  onSelected: (value: any) => void;

  constructor(definition: any) {
    super(definition);
  }
}

export class DisplayText extends FormItem {
  type = 'display-text';

  constructor(definition: any) {
    super(definition);
  }
}


/***********************************不会被持久化的模型***********************************************/


export interface Header {

  label: string;

  rowspan?: number;
  colspan?: number;

  right?: string;
  left?: string;
  minWidth?: string;

  field?: string;
  sortable?: boolean;

  designable?: boolean;
}


export class ColumnHeader implements Header {
  column: Column;
  parent: ColumnHeader;
  children: ColumnHeader[];
  colspan = 1;
  rowspan = 1;

  constructor(column: Column, parent?: ColumnHeader) {
    this.column = column;
    this.parent = parent;
    if (this.column.columns) {
      this.children = this.column.columns.map(c => new ColumnHeader(c, this));
      this.colspan = this.children.filter(c => !c.column.hide).reduce((prev, current) => prev + current.colspan, 0) || 1;
    }
  }


  get field() {
    return this.column.field;
  }

  get label() {
    return this.column.label;
  }

  set label(title: string) {
    this.column.label = title;
  }

  get sortable() {
    return this.column.sortable;
  }

  set sortable(sortable: boolean) {
    this.column.sortable = sortable;
  }

  get designable() {
    return true;
  }
}


function copy(target: any, definition?: any) {
  if (definition) {
    Object.assign(target, definition);
  }
}
