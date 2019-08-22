import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CssVariableGroup, MA_VERSION, Setting} from '../../../model';
import {SettingService} from '../../../service/setting.service';
import {NzMessageService} from 'ng-zorro-antd';
import {StyleService} from '../../../service/style.service';
import {isNumber, isString} from '../../../util';
import {MaOptions} from '../../../service/ma-options';


@Component({
  selector: 'ma-application-management',
  templateUrl: 'ma-setting.component.html',
  styleUrls: ['./ma-setting.component.less']
})
export class MaSettingComponent implements OnInit {

  formGroup: FormGroup;
  variableGroups: CssVariableGroup[];
  variables: any = {};

  constructor(private settingService: SettingService, private messageService: NzMessageService, private themeService: StyleService, private options: MaOptions) {
  }

  ngOnInit(): void {
    const defaultValue = <Setting>{
      logo: './assets/logo-full.svg',
      appName: '通用管理系统',
      appVersion: MA_VERSION,
      apiVersion: MA_VERSION,
      extra: {
        company: '上海通路快建营销咨询有限公司',
        website: 'http://www.tonglukuaijian.com'
      }
    };
    this.formGroup = new FormGroup({
      logo: new FormControl(null, [Validators.required, Validators.maxLength(200)]),
      appName: new FormControl(null, [Validators.required, Validators.maxLength(200)]),
      extra: new FormGroup({
        company: new FormControl(null, [Validators.maxLength(200)]),
        website: new FormControl(null, [Validators.maxLength(200)]),
      }),
    });

    this.settingService.get().subscribe((value) => {
      if (!value) {
        value = defaultValue; // 函数的默认参数仅在参数为undefined时才会赋值，因此这里改成的编程示的写法。
      }
      this.formGroup.patchValue(value);
      this.variables = value.theme || this.themeService.getCssVariables();
      this.variableGroups = this.themeService.getCssVariableGroups();
      this.doPureVariables();
    });
  }

  doPureVariables() {
    const pureVariables: any = {};
    for (const group of this.variableGroups) {
      for (const variable of group.variables) {
        let value = this.variables[variable.name];
        if (isString(value)) {
          if (variable.type === 'px' && value.endsWith('px')) {
            value = parseInt(value.replace('px', ''), 10);
          }
          if (variable.type === '%' && value.endsWith('%')) {
            value = parseInt(value.replace('%', ''), 10);
          }
        }
        pureVariables[variable.name] = value;
      }
    }
    this.variables = pureVariables;
  }

  reverseVariables() {
    const variables: any = {};
    for (const group of this.variableGroups) {
      for (const variable of group.variables) {
        let value = this.variables[variable.name];
        if (isNumber(value)) {
          if (variable.type === 'px') {
            value = value + 'px';
          }
          if (variable.type === '%') {
            value = value + '%';
          }
        }
        variables[variable.name] = value;
      }
    }
    return variables;
  }


  onLogoChange(event: any) {
    if (event.type === 'success') {
      this.formGroup.value.logo = event.file.response.url;
    }
  }


  async save() {
    try {
      const setting = <Setting>{...this.formGroup.value, theme: this.reverseVariables(), id: this.options.appId};
      await this.settingService.saveOrUpdate(setting).toPromise();
      this.messageService.success('操作成功');
    } catch (e) {
      this.messageService.error('操作失败');
    }
  }


  createFormatter(char: string) {
    return (value) => `${value || 0} ${char}`;
  }

  createParser(char: string) {
    return (value = '') => value.replace(` ${char}`, '');
  }
}
