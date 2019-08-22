import {Component, EventEmitter, OnInit} from '@angular/core';
import {MaIconManagementComponent} from '../icon/ma-icon-management.component';
import {RamlService} from '../../../service/raml.service';
import {NzMessageService} from 'ng-zorro-antd';
import {I18nService} from '../../../service/i18n.service';
import {Menu} from '../../../model';
import {MenuService} from '../../../service/menu.service';
import {MenuGenerator} from '../../../generator/menu-generator';
import {ModalService} from '../../../wrapper/modal.service';


interface Editable {
  expand?: boolean;
  onEdit?: boolean;
}

declare type EditableMenu = Menu & Editable;


@Component({
  selector: 'ma-menu-management',
  templateUrl: 'ma-menu-management.component.html',
  styleUrls: ['../../base.less'],
})
export class MaMenuManagementComponent implements OnInit {
  menus: EditableMenu[] = [];
  copyMenu: EditableMenu;
  inBuilding: boolean;

  constructor(private messageService: NzMessageService,
              private i18n: I18nService,
              private modalService: ModalService,
              private ramlService: RamlService,
              private menuService: MenuService,
              private menuGenerator: MenuGenerator) {

  }

  ngOnInit(): void {
    this.menuService.getAll(false).subscribe(menus => {
      this.menus = menus;
    });
  }

  addMenu(parent?: EditableMenu) {
    if (parent) {
      if (!parent.children) {
        parent.children = [];
      }
      parent.expand = true;

      const child: EditableMenu = {
        language: this.i18n.getLocale(),
        path: '#',
        index: parent.children.length,
        displayName: '菜单名字',
        description: '菜单描述',
        parent: parent.path,
        onEdit: true,
      };

      parent.children.push(child);
    } else {
      this.menus.push({
        language: this.i18n.getLocale(),
        path: '#',
        index: this.menus.length,
        icon: {
          theme: 'outline'
        },
        displayName: '菜单组名字',
        description: '菜单组描述',
        onEdit: true,
      });
    }
  }

  startEdit(menus: EditableMenu[], i: number) {
    this.copyMenu = {...menus[i]};
    menus[i].onEdit = true;
  }

  async doDelete(menus: EditableMenu[], i: number) {
    await this.menuService.remove(menus[i].path);
    menus.splice(i, 1);
  }

  saveEdit(menus: EditableMenu[], i: number) {
    menus[i].onEdit = false;
    this.menuService.saveOrUpdate(menus[i]).catch(errorMessage => {
      this.messageService.error(errorMessage);
    });
  }

  cancelEdit(menus: Menu[], i: number) {
    menus.splice(i, 1, this.copyMenu);
  }

  showIconModal(menu: EditableMenu) {
    const onClose = new EventEmitter<any>();
    this.modalService.create({
      nzTitle: '请选择图标',
      nzContent: MaIconManagementComponent,
      nzFooter: null,
      nzBodyStyle: {padding: 0},
      nzAfterClose: onClose,
    });
    onClose.subscribe(icon => menu.icon = icon);
  }

  up(menus: Menu[], i: number) {
    const current = menus[i];
    if (i > 0) {
      const prev = menus[i - 1];
      prev.index = i;
      current.index = i - 1;

      this.reorder(menus, current, prev);
    }
  }

  down(menus: Menu[], i: number) {
    const current = menus[i];
    if (i < menus.length - 1) {
      const next = menus[i + 1];
      next.index = i;
      current.index = i + 1;
      this.reorder(menus, current, next);
    }
  }

  async reorder(menus: any[], menu1: any, menu2: any) {
    await this.menuService.saveOrUpdate(menu1);
    await this.menuService.saveOrUpdate(menu2);
    menus.sort((a, b) => a.index - b.index);
  }

  async buildMenusFromRaml() {
    this.inBuilding = true;
    const raml = await this.ramlService.getRaml().toPromise();
    const generated = this.menuGenerator.generateMenus(raml);
    try {
      await this.menuService.batchSave(generated);
      this.inBuilding = false;
      this.messageService.success('操作成功');
    } catch (error) {
      this.inBuilding = false;
      this.messageService.success('操作失败' + error.message);
    }
  }
}
