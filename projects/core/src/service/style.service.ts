import {Inject, Injectable} from '@angular/core';
import {CssVariableGroup} from '../model';
import {DOCUMENT} from '@angular/common';


@Injectable({providedIn: 'root'})
export class StyleService {
  constructor(@Inject(DOCUMENT) private document: any) {
  }

  getCssVariables(): any {
    const variables: any = {};
    const linkStyles = this.document.styleSheets;
    for (let i = 0; i < linkStyles.length; i++) {
      const sheet = linkStyles[i];
      if (sheet instanceof CSSStyleSheet) {
        for (let j = 0; j < sheet.rules.length; j++) {
          const rule = sheet.rules[j];
          if (rule instanceof CSSStyleRule) {
            if (rule.selectorText === ':root') {
              if (rule.style && rule.style.length > 0) {
                for (let idx = 0; idx < rule.style.length; idx++) {
                  const variable = rule.style[idx];
                  if (variable.startsWith('--')) {
                    const key = variable.replace('--', '');
                    const value = rule.style.getPropertyValue(variable);
                    variables[key] = value.trim();
                  }
                }
              }
            }
          }
        }
      }
    }
    return variables;
  }

  getCssVariableGroups(): CssVariableGroup[] {
    // tslint:disable:max-line-length
    const borderStyles = ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'];
    return [
      {
        title: '通用设置',
        variables: [
          {label: '主色', name: 'primary-color', type: 'color'},                     // @primary-color: @blue-6;
          {label: '背景色', name: 'body-background', type: 'color'},                 // @body-background        : #fff;
          {label: '标题色', name: 'heading-color', type: 'color'},                   // @heading-color          : fade(#000, 85%);
          {label: '正文颜色', name: 'text-color', type: 'color'},                    // @text-color             : fade(#000, 65%);
          {label: '基本字号', name: 'font-size-base', type: 'px'},                   // @font-size-base         : 14px;
          {label: '基本行高', name: 'line-height-base', type: 'number', step: 0.1}   // @line-height-base       : 1.5;
        ]
      },
      {
        title: '边框',
        variables: [
          {label: '样式', name: 'border-style-base', type: 'select', options: borderStyles},  // @border-style-base      : solid;          // style of a components border
          {label: '宽度', name: 'border-width-base', type: 'px'},                             // @border-width-base      : 1px;            // width of the border for a component
          {label: '颜色', name: 'border-color-base', type: 'color'},                          // @border-color-base      : #D9D9D9;         // base border outline a component
          {label: '圆角', name: 'border-radius-base', type: 'px'},                            // @border-radius-base     : 4px;
        ]
      },
      {
        title: '输入框',
        variables: [
          {label: '高度', name: 'input-height-base', type: 'px'},                         // @input-height-base           : 32px;
          {label: '垂直方向内边距', name: 'input-padding-vertical-base', type: 'px'},   // @input-padding-vertical-base : 4px;
          {label: 'placeholder颜色', name: 'input-placeholder-color', type: 'color'},        // @input-placeholder-color     : #BFBFBF;
          {label: '背景色', name: 'input-bg', type: 'color'},                               // @input-bg                    : #fff;
        ]
      },
      {
        title: '布局',
        variables: [
          {label: '头部背景色', name: 'layout-header-background', type: 'color'},       // @layout-header-background       : #001529;
          {label: '头部高度', name: 'layout-header-height', type: 'px'},          // @layout-header-height           : 64px;
          {label: '头部内边距', name: 'layout-header-padding', type: 'px'},          // @layout-header-padding          : 0 50px;
          {label: '边栏背景色', name: 'layout-sider-background', type: 'color'},        // @layout-sider-background        : @layout-header-background;
          {label: '内容区背景色', name: 'layout-body-background', type: 'color'},       // @layout-body-background         : #f0f2f5;
          {label: '底部背景色', name: 'layout-footer-background', type: 'color'},    // @layout-footer-background       : @layout-body-background;
          {label: '底部内边距', name: 'layout-footer-padding', type: 'px'},          // @layout-footer-padding          : 24px 50px;
        ]
      },
      {
        title: '菜单',
        variables: [
          {label: '行项高度', name: 'menu-item-height', type: 'px'},                      // @menu-item-height: 40px;
          {label: '行项颜色', name: 'menu-item-color', type: 'color'},                    // @menu-item-color: @text-color;
          {label: '激活项背景色', name: 'menu-item-active-bg', type: 'color'},            // @menu-item-active-bg: @item-active-bg;
          {label: '激活项边框宽度', name: 'menu-item-active-border-width', type: 'px'},   // @menu-item-active-border-width: 3px;
          {label: '高亮状态颜色', name: 'menu-highlight-color', type: 'color'},           // @menu-highlight-color: @primary-color;
          {label: '分组标题色', name: 'menu-item-group-title-color', type: 'color'},      // @menu-item-group-title-color: @text-color-secondary;
          {label: '折叠宽度', name: 'menu-collapsed-width', type: 'px'},                  // @menu-collapsed-width: 80px;
        ]
      },
      {
        title: '表格',
        variables: [
          {label: '表头背景色', name: 'table-header-bg', type: 'color'},             // @table-header-bg: @background-color-light;
          {label: '表头颜色', name: 'table-header-color', type: 'color'},            // @table-header-color: @heading-color;
          {label: '鼠标悬浮背景色', name: 'table-row-hover-bg', type: 'color'},      // @table-row-hover-bg: @primary-1;
          {label: '选中行背景色', name: 'table-selected-row-bg', type: 'color'},     // @table-selected-row-bg: #fafafa;
          {label: '展开行背景色', name: 'table-expanded-row-bg', type: 'color'},     // @table-expanded-row-bg: #fbfbfb;
          {label: '垂直方向内边距', name: 'table-padding-vertical', type: 'px'},     // @table-padding-vertical: 16px;
          {label: '水平方向内边距', name: 'table-padding-horizontal', type: 'px'},   // @table-padding-horizontal: 16px;
          {label: '分页项宽高', name: 'pagination-item-size', type: 'px'},           // @pagination-item-size: 32px;
        ]
      },
      {
        title: '模态框',
        variables: [
          {label: '头部背景色', name: 'modal-header-bg', type: 'color'}, // @modal-header-bg: @component-background;
          {label: '遮罩背景色', name: 'modal-mask-bg', type: 'color'},   // @modal-mask-bg: rgba(0, 0, 0, 0.65);
        ]
      },
      {
        title: '卡片',
        variables: [
          {label: '背景色', name: 'card-head-background', type: 'color'},  // @card-head-background: transparent;
          {label: '基本内边距', name: 'card-padding-base', type: 'px'},    // @card-head-padding: 16px;
          {label: '头部内边距', name: 'card-head-padding', type: 'px'},    // @card-padding-base: 24px;
        ]
      }
    ];
  }


  updateVariables(variables: any) {
    if (variables) {
      Object.keys(variables).forEach(key => {
        this.document.body.style.setProperty(`--${key}`, variables[key]);
      });
    }

  }
}
