import {ArrayField, Cascader, Checkbox, DataPicker, DatePicker, DateRangePicker, DetailPanel, DisplayText, Form, InputNumber, List, MapField, Radio, Rate, Select, Slider, Switch, Table, TabSet, Text, TextArea} from '../model';
import {MaFormControlDateComponent} from '../components/form-panel/form-control/ma-form-control-date.component';
import {MaFormControlDataPickerComponent} from '../components/form-panel/form-control/ma-form-control-data-picker.component';
import {MaFormControlCheckboxComponent} from '../components/form-panel/form-control/ma-form-control-checkbox.component';
import {MaFormControlCascaderComponent} from '../components/form-panel/form-control/ma-form-control-cascader.component';
import {MaFormControlUploadComponent} from '../components/form-panel/form-control/ma-form-control-upload.component';
import {MaFormControlTimeComponent} from '../components/form-panel/form-control/ma-form-control-time.component';
import {MaFormControlTextareaComponent} from '../components/form-panel/form-control/ma-form-control-textarea.component';
import {MaFormControlSelectComponent} from '../components/form-panel/form-control/ma-form-control-select.component';
import {MaFormControlTextComponent} from '../components/form-panel/form-control/ma-form-control-text.component';
import {MaFormControlRadioComponent} from '../components/form-panel/form-control/ma-form-control-radio.component';
import {MaFormControlNumberComponent} from '../components/form-panel/form-control/ma-form-control-number.component';
import {MaFormControlDisplayTextComponent} from '../components/form-panel/form-control/ma-form-control-display-text.component';
import {MaFormControlDateRangeComponent} from '../components/form-panel/form-control/ma-form-control-date-range.component';
import {MaFormControlRateComponent} from '../components/form-panel/form-control/ma-form-control-rate.component';
import {MaFormControlSliderComponent} from '../components/form-panel/form-control/ma-form-control-slider.component';
import {MaFormControlSwitchComponent} from '../components/form-panel/form-control/ma-form-control-switch.component';
import {MaFormComponent} from '../components/form/ma-form.component';
import {MaTableComponent} from '../components/table/ma-table.component';
import {Injectable, Type} from '@angular/core';
import {MaListComponent} from '../components/list/ma-list.component';
import {MaDetailPanelComponent} from '../components/detail-panel/ma-detail-panel.component';
import {MaTabsetComponent} from '../components/tabset/ma-tabset.component';
import {MaInitializer} from './ma-initializer';
import {ComponentManager} from '../service/component-manager';
import {MaFormControlMapComponent} from '../components/form-panel/form-control/ma-form-control-map.component';

export interface ComponentDefinition {
  type: string;
  name: string;
  group: 'display' | 'layout' | 'chart' | 'form-item' | string;
  metamodelType?: Type<any>;
  componentType: Type<any>;
}


const BUILT_IN_COMPONENT_DEFINITIONS = [
  {
    type: 'cascader',
    name: '级联选择',
    group: 'form-item',
    metamodelType: Cascader,
    componentType: MaFormControlCascaderComponent,
  },
  {
    type: 'checkbox',
    name: '多选框',
    group: 'form-item',
    metamodelType: Checkbox,
    componentType: MaFormControlCheckboxComponent,
  },
  {
    type: 'data-picker',
    name: '数据引用',
    group: 'form-item',
    metamodelType: DataPicker,
    componentType: MaFormControlDataPickerComponent,
  },
  {
    type: 'date',
    name: '日期',
    group: 'form-item',
    metamodelType: DatePicker,
    componentType: MaFormControlDateComponent,
  },
  {
    type: 'date-range',
    name: '日期区间',
    group: 'form-item',
    metamodelType: DateRangePicker,
    componentType: MaFormControlDateRangeComponent,
  },
  {
    type: 'display-text',
    name: '文本展示',
    group: 'form-item',
    metamodelType: DisplayText,
    componentType: MaFormControlDisplayTextComponent,
  },
  {
    type: 'number',
    name: '数字',
    group: 'form-item',
    metamodelType: InputNumber,
    componentType: MaFormControlNumberComponent,
  },
  {
    type: 'radio',
    name: '单选框',
    group: 'form-item',
    metamodelType: Radio,
    componentType: MaFormControlRadioComponent,
  },
  {
    type: 'rate',
    name: '评分',
    group: 'form-item',
    metamodelType: Rate,
    componentType: MaFormControlRateComponent,
  },
  {
    type: 'select',
    name: '下拉选择',
    group: 'form-item',
    metamodelType: Select,
    componentType: MaFormControlSelectComponent,
  },
  {
    type: 'slider',
    name: '滑动条',
    group: 'form-item',
    metamodelType: Slider,
    componentType: MaFormControlSliderComponent,
  },
  {
    type: 'switch',
    name: '开关',
    group: 'form-item',
    metamodelType: Switch,
    componentType: MaFormControlSwitchComponent,
  },
  {
    type: 'text',
    name: '单行文本',
    group: 'form-item',
    metamodelType: Text,
    componentType: MaFormControlTextComponent,
  },
  {
    type: 'textarea',
    name: '多行文本',
    group: 'form-item',
    metamodelType: TextArea,
    componentType: MaFormControlTextareaComponent,
  },
  {
    type: 'time',
    name: '时间',
    group: 'form-item',
    metamodelType: Rate,
    componentType: MaFormControlTimeComponent,
  },
  {
    type: 'upload-picker',
    name: '上传',
    group: 'form-item',
    metamodelType: Rate,
    componentType: MaFormControlUploadComponent,
  },
  {
    type: 'map',
    name: '键值对',
    group: 'form-item',
    metamodelType: MapField,
    componentType: MaFormControlMapComponent,
  },
  {
    type: 'array',
    name: '数组',
    group: 'form-item',
    metamodelType: ArrayField,
    componentType: MaFormControlMapComponent,
  },
  {
    type: 'form',
    name: '表单',
    group: 'page',
    metamodelType: Form,
    componentType: MaFormComponent,
  },
  {
    type: 'table',
    name: '表格',
    group: 'page',
    metamodelType: Table,
    componentType: MaTableComponent,
  },
  {
    type: 'list',
    name: '列表',
    group: 'page',
    metamodelType: List,
    componentType: MaListComponent,
  },
  {
    type: 'detail-panel',
    name: '详情页',
    group: 'page',
    metamodelType: DetailPanel,
    componentType: MaDetailPanelComponent,
  },
  {
    type: 'tabset',
    name: '标签集',
    group: 'page',
    metamodelType: TabSet,
    componentType: MaTabsetComponent,
  }
];

@Injectable()
export class ComponentRegistrar extends MaInitializer {
  constructor(private componentManager: ComponentManager) {
    super();
  }

  async execute() {
    for (const componentDef of BUILT_IN_COMPONENT_DEFINITIONS) {
      this.componentManager.registerComponentDefinition(componentDef);
    }
  }

  order(): number {
    return Number.MIN_SAFE_INTEGER + 1;
  }
}
