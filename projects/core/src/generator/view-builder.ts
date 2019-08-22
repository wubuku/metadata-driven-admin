import {
  ArrayField,
  ArrayTypeDeclaration,
  Button,
  Cell,
  Column,
  DataLoader,
  DatePicker,
  DateRangePicker,
  DetailPanel,
  DisplayText,
  Form,
  FormItem,
  FormPanel,
  InputNumber,
  List,
  MapField,
  Method,
  ObjectTypeDeclaration,
  Raml,
  RamlUtils,
  Resource,
  Row,
  Select,
  SimpleTypeDeclaration,
  Switch,
  Tab,
  Table,
  TabSet,
  Text,
  TextArea,
  TypeDeclaration,
  UploadPicker
} from '../model';
import {standardRequestHeaders} from './standard-http-request-headers';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ViewBuilder {

  createViewData(raml: Raml, resource: Resource, method: Method) {
    if (method.method !== 'get') {
      return this.createForm(raml, resource, method);
    }
    const responseBody = RamlUtils.getSuccessResponseBody(method);
    if (responseBody) {
      const {elementType, pageable} = this.dissectResponseBody(responseBody);
      if (elementType) {
        return this.createTableOrList(raml, resource, method, elementType, pageable);
      }
      return this.createDetailPanel(raml, resource, method, responseBody);
    }
  }

  /**
   * 解剖responseBody，提取elementType
   * @param responseBody
   */
  private dissectResponseBody(responseBody: TypeDeclaration) {
    if (RamlUtils.isPageType(responseBody)) {
      const contentType = (<ObjectTypeDeclaration>responseBody).properties.find(p => p.name === 'content') as ArrayTypeDeclaration;
      return {elementType: contentType.items, pageable: true};
    }
    if (responseBody instanceof ArrayTypeDeclaration) {
      return {elementType: (<ArrayTypeDeclaration>responseBody).items, pageable: false};
    }
    return {};
  }

  /**
   * 将接口转换为一个table或者一个list， 如果类型元数据为一个object，则转换为列表，否则转换为list
   * @param raml
   * @param resource
   * @param method
   * @param elementType
   * @param showPagination
   */
  private createTableOrList(raml: Raml, resource: Resource, method: Method, elementType: TypeDeclaration, showPagination: boolean) {
    if (elementType instanceof ObjectTypeDeclaration) {
      const table = new Table();
      table.title = method.description;
      table.showPagination = showPagination;
      table.columns = this.elementTypeToColumns(elementType, table, this.extractSubResourceUris(resource));
      table.buttons = this.createTableOrListButtons(resource, method);
      table.rowButtons = this.createTableOrListRowButtons(resource, elementType);
      table.dataLoader = this.createDataLoader(raml, resource, method);

      return table;
    } else {
      const list = new List();
      list.bordered = true;
      list.split = true;
      list.title = method.description;
      list.showPagination = showPagination;
      list.buttons = this.createTableOrListButtons(resource, method);
      list.rowButtons = this.createTableOrListRowButtons(resource, elementType);
      list.dataLoader = this.createDataLoader(raml, resource, method);

      return list;
    }
  }

  private extractSubResourceUris(resource: Resource) {
    const uris = [];
    if (resource.resources) {
      for (const itemResource of resource.resources) {
        if (itemResource.methods && itemResource.uriParameters && itemResource.uriParameters.length > 0) {
          if (itemResource.resources) {
            for (const subResource of itemResource.resources) {
              if (subResource.methods) {
                const getMethod = subResource.methods.find(r => r.method === 'get');
                if (getMethod) {
                  uris.push(subResource);
                  break;
                }
              }
            }
          }
        }
      }
    }
    return uris;
  }

  private createTableOrListButtons(resource: Resource, method: Method) {
    return resource.methods
      .filter(action => action !== method)
      .map(action => this.methodToButton(resource, action));
  }

  private createTableOrListRowButtons(resource: Resource, elementType: TypeDeclaration) {
    const operationButtons = [];
    if (resource.resources) {
      outer: for (const itemResource of resource.resources) {
        if (itemResource.methods && itemResource.uriParameters && itemResource.uriParameters.length > 0) {
          for (const uriParameter of itemResource.uriParameters) {
            // 如果elementType是ObjectTypeDeclaration 则检测uriParameter是否存在于elementType中
            // products/{id}
            // products/{code}
            // products/{someFile1}-{someFile2}
            // 路径参数的取值来自于所在行的数据，也就是说uriParameter都必须满足可以在elementType中找到相同名字的字段
            if (elementType instanceof ObjectTypeDeclaration) {
              // 每一个uriParameter都必须满足可以在elementType中找到相同名字的字段
              if (!this.uriParametersInElementType(uriParameter, elementType)) {
                continue outer;
              }
            }
          }
          operationButtons.push(...itemResource.methods.map(action => this.methodToButton(itemResource, action)));
        }
      }
    }
    return operationButtons;
  }

  createForm(raml: Raml, resource: Resource, action: Method) {
    const form = new Form();
    form.path = raml.baseUri + resource.qualifiedPath;
    form.method = action.method;
    form.contentType = RamlUtils.getContentType(action);
    form.formPanel = this.createFormPanel(action);


    for (const button of form.formPanel.buttons) {
      if (button.triggerType === 'submit') {
        button.label = '提交';
      }
      if (button.triggerType === 'cancel') {
        button.label = '取消';
      }
    }

    const getMethod = resource.methods.find(m => m.method === 'get');
    if (getMethod) {
      const requestBody = RamlUtils.getRequestBody(action);
      const responseBody = RamlUtils.getSuccessResponseBody(getMethod);
      if (requestBody && responseBody && requestBody.type === responseBody.type) {
        form.dataLoader = this.createDataLoader(raml, resource, getMethod);
      }
    }

    /**
     * 去掉关联字段、路径变量字段
     */
    if (resource.resources) {
      const cells = form.formPanel.body.children;
      const uris = [];
      resource.resources.forEach(res => {
        if (action.method === 'post' && res.resources) {
          for (const grandsonResource of res.resources) {
            uris.push(grandsonResource.relativeUri.substring(1));
          }
        } else {
          uris.push(res.relativeUri.substring(1));
        }
      }); // 去掉关联的属性 /items => items

      while (resource) {
        if (resource.uriParameters) {
          for (const p of resource.uriParameters) {
            uris.push(p.name);  // 去掉uri中的字段
          }
        }
        resource = resource.parent;
      }
      form.formPanel.body.children = cells.filter(cell => {
        const fullField = cell.content.field;
        for (const uri of uris) {
          // uri => projectId
          // fullField => body.id.projectId
          if (fullField.toUpperCase().endsWith('.' + uri.toUpperCase())) {
            return false;
          }
        }
        return true;
      });
    }
    return form;
  }

  private uriParametersInElementType(uriParameter: TypeDeclaration, elementType: ObjectTypeDeclaration) {
    for (const property of elementType.properties) {
      if (property.name === uriParameter.name) {
        return true;
      }
      if (property instanceof ObjectTypeDeclaration) {
        if (this.uriParametersInElementType(uriParameter, property)) {
          return true;
        }
      }
    }
    return false;
  }

  createDataLoader(raml: Raml, resource: Resource, action: Method) {
    const dataLoader = new DataLoader();
    dataLoader.path = raml.baseUri + resource.qualifiedPath;
    dataLoader.method = action.method;
    dataLoader.accept = RamlUtils.getAccept(action);
    let formPanel = this.createFormPanel(action);

    if (formPanel) {
      for (const button of formPanel.buttons) {
        if (button.triggerType === 'submit') {
          button.label = '查询';
        }
        if (button.triggerType === 'cancel') {
          button.label = '重置';
        }
      }

      const children = formPanel.body.children.filter((cell: Cell<FormItem>) => {
        const item = cell.content;
        return !(item.field === 'queryParameters.sort' || item.field === 'queryParameters.page' || item.field === 'queryParameters.size');
      });

      formPanel.body.children = children;

      let totalWidth = formPanel.buttonsWidth; // buttons width
      for (let i = 0; i < children.length; i++) {
        const cell = children[i];
        const item = cell.content;
        totalWidth += cell.width;

        if (item.field.startsWith('queryParameters.')) {
          if (item instanceof DatePicker) {
            children[i].content = new DateRangePicker(item);
            children[i].content.op = 'between';
          } else {
            children[i].content.op = 'eq';
          }
        }

        if (totalWidth > 24) {
          formPanel.collapsible = true;
        }
      }

      if (children.length === 0) {
        formPanel = null;
      }
    }

    dataLoader.formPanel = formPanel;

    return dataLoader;
  }

  createFormPanel(action: Method): FormPanel {
    const form = new FormPanel();
    form.title = action.description;

    form.buttons = [];

    const button1 = new Button();
    button1.classType = 'primary';
    button1.triggerType = 'submit';
    button1.description = action.description;

    const button2 = new Button();
    button2.classType = 'default';
    button2.triggerType = 'cancel';


    form.buttons.push(button1, button2);
    form.buttonsWidth = 8;

    form.body = new Row();
    form.body.children = [];


    const queryParameters = action.queryParameters;

    if (queryParameters && queryParameters.length > 0) {
      const children = this.createFormPanelContent(queryParameters, 'queryParameters');
      if (children.length > 0) {
        form.body.children.push(...children);
      }
    }

    const headers = action.headers;
    if (headers && headers.length > 0) {
      const predicate = param => !standardRequestHeaders.includes(param.name);
      const children = this.createFormPanelContent(headers.filter(predicate), 'headers');
      if (children.length > 0) {
        form.body.children.push(...children);
      }
    }

    const body = action.body;
    if (body && body.length > 0) {
      const children = this.createFormPanelContent([RamlUtils.getRequestBody(action)], 'body');
      if (children.length > 0) {
        form.body.children.push(...children);
      }
    }


    return form;
  }

  /**
   * 创建表单面板的内容
   * @param items
   * @param prefix
   */
  private createFormPanelContent(items: TypeDeclaration[], prefix: string) {

    const processedObjectTypeDeclarations = [];

    function concatPrefix(item: ObjectTypeDeclaration | ArrayTypeDeclaration, innerPrefix: string) {
      if (!item.name.includes('/')) {
        return innerPrefix + '.' + item.name;
      }
      return innerPrefix;
    }

    function convertToMapFormItem(map: ObjectTypeDeclaration, innerPrefix: string): MapField {
      const {required, description, displayName, properties} = map;
      const mapField = new MapField();
      mapField.required = required;
      mapField.description = description;
      mapField.label = displayName;
      mapField.field = innerPrefix;

      const valueProperty = properties[0];

      const key = new Text();
      key.field = innerPrefix + '.key';
      key.label = 'Key';
      key.required = true;
      key.description = 'Key';
      key.pattern = valueProperty.name;
      key.maxLength = 100;
      mapField.key = key;

      mapField.val = flatAndConvert([valueProperty], innerPrefix);
      return mapField;
    }

    function convertToArrayFormItem(item: ArrayTypeDeclaration, innerPrefix: string): ArrayField {
      const {required, displayName, defaultValue, minItems, maxItems} = item;
      const arrayField = new ArrayField();
      arrayField.required = required;
      arrayField.label = displayName;
      arrayField.value = defaultValue;
      arrayField.maxLength = maxItems;
      arrayField.minLength = minItems;
      arrayField.field = innerPrefix;
      arrayField.description = item.displayName;

      arrayField.items = flatAndConvert([item.items], innerPrefix);

      return arrayField;
    }

    function convertToFormItem(item: SimpleTypeDeclaration, innerPrefix: string) {
      const {
        name, required, description, type,
        minLength, maxLength,
        displayName: label,
        defaultValue: value,
        maximum: max, minimum: min
      } = item;

      const def = {} as FormItem;

      def.field = innerPrefix + '.' + name;
      def.value = value;
      def.required = required;
      def.label = label;
      def.description = description;

      if (type === 'boolean') {
        return new Switch(def);
      }

      if (item.enumValues) {
        const select = new Select(def);
        select.options = item.enumValues.map(e => ({label: e, value: e}));
        return select;
      }

      if (type === 'number' || type === 'integer') {
        return new InputNumber({...def, max, min});
      }

      if (type === 'datetime') {
        return new DatePicker(def);
      }

      if (type === 'datetime-range') {
        return new DateRangePicker(def);
      }

      if (type === 'date-only') {
        return DatePicker.dateonly(def);
      }

      if (type === 'date-range') {
        return DateRangePicker.dateonly(def);
      }

      if (type === 'file') {
        return new UploadPicker(def);
      }

      if (type === 'any' || type === 'string') {

        if (item.maxLength > 255) {
          return new TextArea({...def, minLength, maxLength});
        }
      }

      return new Text({...def, minLength, maxLength});
    }

    function flatAndConvert(items1: TypeDeclaration[], innerPrefix: string) {
      const array1 = [];
      for (const item of items1) {
        if (item instanceof ObjectTypeDeclaration) {
          if (!item.additionalProperties) {
            // 防止死循环
            if (processedObjectTypeDeclarations.includes(item)) {
              continue;
            }
            processedObjectTypeDeclarations.push(item);
            array1.push(...flatAndConvert(item.properties, concatPrefix(item, innerPrefix)));
          } else {
            array1.push(convertToMapFormItem(item, concatPrefix(item, innerPrefix)));
          }
        } else if (item instanceof ArrayTypeDeclaration) {
          array1.push(convertToArrayFormItem(item, concatPrefix(item, innerPrefix)));
        } else if (item instanceof SimpleTypeDeclaration) {
          array1.push(convertToFormItem(item, innerPrefix));
        }
      }
      return array1;
    }

    const array = flatAndConvert(items, prefix);
    const cells = [];
    for (const item of array) {
      const cell = new Cell<FormItem>();
      cell.content = item;
      cell.width = 8;
      if (item instanceof ArrayField || item instanceof MapField) {
        cell.width = 0;
      }
      cells.push(cell);
    }
    return cells;
  }

  createDetailPanel(raml: Raml, resource: Resource, method: Method, responseBody: TypeDeclaration) {
    const detailPanel = new DetailPanel();

    detailPanel.title = method.description;
    detailPanel.dataLoader = this.createDataLoader(raml, resource, method);

    const cells = this.createFormPanelContent([responseBody], 'display');
    detailPanel.formPanel = new FormPanel();
    detailPanel.formPanel.body = new Row<FormItem>();


    if (resource.resources) {
      const tabs = [];
      for (const subResource of resource.resources) {
        if (subResource.methods) {
          for (const subMethod of subResource.methods) {
            if (subMethod.method === 'get') {
              const tab = new Tab();
              tab.viewPath = subResource.qualifiedPath;
              tab.title = subMethod.description;
              tabs.push(tab);
            }
          }
        }
      }
      if (tabs.length > 0) {
        detailPanel.tabset = new TabSet({children: tabs});
      }
    }

    const uris = (resource.resources || []).map(res => res.relativeUri.substring(1).toUpperCase());
    const children = [];
    for (const cell of cells) {
      let push = true;
      for (const uri of uris) {
        if (cell.content.field.toUpperCase().endsWith('.' + uri)) {
          push = false;
          break;
        }
      }
      if (push) {
        cell.content = new DisplayText(cell.content);
        children.push(cell);
      }
    }
    detailPanel.formPanel.body.children = children;

    return detailPanel;
  }

  /**
   * 将类型元数据转换为table的列
   * @param elementType
   * @param table
   * @param ignoreProperties
   * @returns
   */
  private elementTypeToColumns(elementType: ObjectTypeDeclaration, table: Table, ignoreProperties: string[]): Column[] {
    const columns = [];
    for (const p of elementType.properties) {
      if (ignoreProperties.includes(p.name)) { // 如果该属性在被忽略属性集合中，则不继续下一步。
        continue;
      }
      const column = {} as Column;
      column.field = p.name;
      column.label = p.displayName;
      column.index = columns.length;

      if (p instanceof ObjectTypeDeclaration) {
        column.columns = this.elementTypeToColumns(p, table, ignoreProperties);
        table.bordered = true;
      }

      columns.push(new Column(column));
    }

    return columns;
  }

  /**
   * 将一个接口映射为一个按钮
   * @param resource
   * @param action
   * @returns
   */
  private methodToButton(resource: Resource, action: Method): Button {
    const button = new Button();
    button.label = action.displayName;
    button.description = action.description;

    if (action.method === 'get') {
      button.triggerType = 'link';
      button.path = resource.qualifiedPath;
    } else {
      if (action.method === 'delete') {
        button.classType = 'danger';
      } else {
        button.classType = 'primary';
      }
      button.triggerType = 'modal';
      button.path = resource.qualifiedPath + '.' + action.method;
    }
    return button;
  }

}
