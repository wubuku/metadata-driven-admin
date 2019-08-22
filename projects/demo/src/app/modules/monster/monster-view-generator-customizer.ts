import {Injectable} from '@angular/core';
import {
  Button, Cell, Column, DetailPanel, Form, FormItem, FormPanel, I18nService, List, MaOptions,
  Method, Raml, RamlUtils, Resource, Table, View, ViewBuilder, ViewGeneratorCustomizer
} from '../../import-proxy';


@Injectable()
export class MonsterViewGeneratorCustomizer extends ViewGeneratorCustomizer {

  constructor(options: MaOptions, private viewBuilder: ViewBuilder, private i18n: I18nService) {
    super(options);
  }

  postProcessViewsAfterGenerated(raml: Raml, views: View[]) {
    const filteredViews = views.filter(v => {
      if (v.data) {
        const indexOf = v.path.indexOf('.');
        if (indexOf !== -1) {
          return true;
        }

        const lastIndexOf = v.path.lastIndexOf('/'); // 比如 /BusinessRuleSettings -> 0
        return !(lastIndexOf === 0 ||
          v.path.indexOf('.patch') !== -1 ||
          v.path.indexOf('_count') !== -1 ||
          v.path.indexOf('_nextId') !== -1 ||
          v.path.indexOf('_metadata') !== -1);

      }
      return false;
    });

    const findViewByPageView = (_pageView: View) => {
      const nonePagePath = _pageView.path.replace('/_page', ''); // 从路径中去除_page
      for (const nonePageView of views) {
        if (nonePageView.path === nonePagePath) {
          return nonePageView;
        }
      }
    };

    filteredViews.forEach(_pageView => {
      if (_pageView.path.indexOf('_page') !== -1) {
        const nonePageView = findViewByPageView(_pageView); // 通过_page的view 查到 其对应集合的view

        const nonePageComponent = nonePageView.data as Table;
        const pageComponent = _pageView.data as Table;

        if (_pageView.data.constructor !== nonePageView.data.constructor) {
          if (_pageView.path === '/AttributeSetInstances/_page') {
            pageComponent.type = 'list'; // convert to list
            pageComponent.bordered = true;
            pageComponent['split'] = true;
          } else {
            return;
          }
        }
        if (nonePageComponent.buttons) {
          pageComponent.buttons = nonePageComponent.buttons; // 从集合的view数据中取出按钮集合
        }

        if (nonePageComponent.rowButtons) {
          pageComponent.rowButtons = nonePageComponent.rowButtons.filter(btn => {
            return !(
              btn.path.indexOf('_count') !== -1
              || btn.path.indexOf('_nextId') !== -1
              || btn.path.indexOf('_metadata') !== -1
              || btn.path.indexOf('_page') !== -1
              || btn.path.indexOf('.patch') !== -1
            );
          });
        }

        _pageView.path = nonePageView.path;
      }
    });

    return filteredViews;
  }

  postProcessViewAfterGenerated(raml: Raml, resource: Resource, action: Method, view: View): View {
    const component = view.data;

    if (component instanceof Form) {
      this.processFormView(raml, component, resource, action);
    } else if (component instanceof DetailPanel) {
      this.processDetailView(component);
    } else if (component instanceof Table) {
      this.processTableView(component);
    } else if (component instanceof List) {
      this.processListView(component);
    }

    return view;
  }

  processFormView(raml: Raml, form: Form, resource: Resource, action: Method) {
    if (form.formPanel) {
      this.processFormPanel(form.formPanel);
      const requestBody = RamlUtils.getRequestBody(action);
      let responseBody;
      const getMethod = resource.methods.find(m => m.method === 'get');
      if (getMethod) {
        responseBody = RamlUtils.getSuccessResponseBody(getMethod);
      }

      if (requestBody && responseBody) {
        const requestTypePackage = requestBody.type.lastIndexOf('.');
        const responseTypePackage = responseBody.type.lastIndexOf('.');
        if (requestTypePackage === responseTypePackage) {
          form.dataLoader = this.viewBuilder.createDataLoader(raml, resource, getMethod);

          if (form.dataLoader && form.dataLoader.formPanel) {
            this.processFormPanel(form.dataLoader.formPanel);
          }
        }
      }

    }
  }

  processDetailView(detailPanel: DetailPanel): void {
    if (detailPanel.formPanel) {
      this.processFormPanel(detailPanel.formPanel);
    }

    if (detailPanel.dataLoader.formPanel) {
      this.processFormPanel(detailPanel.dataLoader.formPanel);
    }
  }

  processTableView(table: Table): void {
    if (table.dataLoader.formPanel) {
      this.processFormPanel(table.dataLoader.formPanel);
    }
    const noneVisibleFields = [
      'version', 'deleted', 'active', 'commandId', 'requesterId'
    ];

    const doHideColumns = (columns: Column[]) => {
      for (const column of columns) {
        if (noneVisibleFields.indexOf(column.field) !== -1) {
          column.hide = true;
        }
        if (column.field.startsWith('isProperty') && column.field.endsWith('Removed')) {
          column.hide = true;
        }
        if (column.columns) {
          doHideColumns(column.columns);
        }
      }
    };
    doHideColumns(table.columns);


    this.processButtons(table.buttons);
    this.processButtons(table.rowButtons);
  }

  processListView(list: List): void {
    if (list.dataLoader.formPanel) {
      this.processFormPanel(list.dataLoader.formPanel);
    }

    this.processButtons(list.buttons);
    this.processButtons(list.rowButtons);
  }

  processFormPanel(formPanel: FormPanel) {
    const bodyNoneVisibleFields = [
      'body.version', 'body.deleted', 'body.active', 'body.createdAt', 'body.createdBy', 'body.updatedAt', 'body.updatedBy', 'body.commandId', 'body.requesterId'
    ];
    const queryParametersNoneVisibleFields = [
      'queryParameters.version', 'queryParameters.deleted', 'queryParameters.active', 'queryParameters.createdBy',
      'queryParameters.updatedBy', 'queryParameters.requesterId', 'queryParameters.commandId', 'queryParameters.fields', 'queryParameters.filter'
    ];
    const displayNoneVisibleFields = [
      'display.version', 'display.deleted', 'display.active', 'display.commandId', 'display.requesterId'
    ];

    formPanel.body.children = formPanel.body.children.filter((cell: Cell<FormItem>) => {
      const item = cell.content;

      if (item.field.startsWith('queryParameters.')) {
        if (queryParametersNoneVisibleFields.indexOf(cell.content.field) !== -1) {
          cell.width = 0;
        }
      }

      if (item.field.startsWith('display.')) {
        if (displayNoneVisibleFields.indexOf(cell.content.field) !== -1) {
          cell.width = 0;
        }
      }

      if (item.field.startsWith('body.')) {
        if (bodyNoneVisibleFields.indexOf(cell.content.field) !== -1) {
          cell.width = 0;
        }
      }

      if (item.field.endsWith('Removed')) {
        if (item.field.startsWith('body.isProperty') || item.field.startsWith('display.isProperty')) {
          return false;
        }
      }
      return true;
    });
    this.processButtons(formPanel.buttons);
  }

  processButtons(buttons: Button[]) {
    if (buttons) {
      const locale = this.i18n.getLocale();
      for (const button of buttons) {
        if (locale === 'en') {
          if (button.label === '创建 or 修改') {
            button.label = 'Edit';
          }
        } else {
          if (button.label === '创建 or 修改') {
            button.label = '修改';
          }
        }
      }
    }
  }
}
