import {Cell, Column, FormItem, FormPanel, List, Table, View} from '../model';
import {capitalize, isContainsChinese, parseCamelCase} from '../util';
import {I18nService} from '../service/i18n.service';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ViewTranslateService {

  constructor(private i18n: I18nService) {
  }

  /**
   * 翻译视图的元数据
   * 1. 翻译DataLoader的buttons和fields
   * 2. 翻译Form, DetailPanel的buttons和fields
   * 3. 翻译Table的columns
   * @param view
   */
  translate(view: View) {
    const dataLoader = view.data.dataLoader; // detail-panel form list table 都包含dataLoader属性
    if (dataLoader && dataLoader.formPanel) {
      this.translateFormPanel(dataLoader.formPanel);
    }
    const formPanel = view.data.formPanel; // detail-panel form 包含formPanel
    if (formPanel) {
      this.translateFormPanel(formPanel);
    }

    this.translateTableOrList(view.data); // table or list
  }

  translateFormPanel(component: FormPanel) {
    this.translateComponent(component);
    this.translateCells(component.body.children);
  }

  private translateCells(cells: Cell<FormItem>[]) {
    if (cells) {
      for (const cell of cells) {
        if (this.i18n.getLocale() === 'en') {
          const def = cell.content;
          if (isContainsChinese(def.label)) {
            def.label = capitalize(parseCamelCase(def.field));
          }
          if (isContainsChinese(def.description)) {
            def.description = def.label;
          }
        }
      }
    }
  }

  translateComponent(component: FormPanel | Table | List) {
    if (component && component.buttons) {
      for (const button of component.buttons) {
        button.label = this.translateTextToEnglish(button.label);
      }
    }
  }

  translateTableOrList(component: Table | List) {
    this.translateComponent(component);

    if (component.rowButtons) {
      for (const button of component.rowButtons) {
        button.label = this.translateTextToEnglish(button.label);
      }
    }

    if (component instanceof Table) {
      this.translateColumns(component.columns);
    }
  }

  private translateColumns(columns: Column[]) {
    for (const column of columns) {
      // translate
      if (this.i18n.getLocale() === 'en') {
        if (isContainsChinese(column.label)) {
          column.label = capitalize(parseCamelCase(column.field));
        }
      }
      if (column.columns) {
        this.translateColumns(column.columns);
      }
    }
  }


  /**
   * 文本翻译
   * @param text
   * @returns
   */
  private translateTextToEnglish(text: string) {
    if (this.i18n.getLocale() === 'en') {
      if (text === '查询') {
        return 'Query';
      }
      if (text === '清除') {
        return 'Clear';
      }
      if (text === '修改') {
        return 'Edit';
      }
      if (text === '删除') {
        return 'Delete';
      }
      if (text === '查看') {
        return 'Go';
      }
      if (text === '新建') {
        return 'New';
      }
      if (text === '提交') {
        return 'Submit';
      }
      if (text === '重置') {
        return 'Reset';
      }
      if (text === '取消') {
        return 'Cancel';
      }
    }
    return text;
  }

}
