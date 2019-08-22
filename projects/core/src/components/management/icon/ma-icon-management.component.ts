import {Component, Inject, OnInit, Optional} from '@angular/core';
import {NzMessageService, NzModalRef} from 'ng-zorro-antd';
import {manifest} from '@ant-design/icons-angular';
import {DOCUMENT} from '@angular/common';
import {IconSourceService} from '../../../service/icon-source.service';
import {IconSource} from '../../../model';

export interface IconGroup {
  id: string;
  title: string;
  icons: string[];
}

const groups: IconGroup[] = [
  {
    id: 'direction',
    title: '方向性图标',
    icons: [
      'step-backward', 'step-forward', 'fast-backward',
      'fast-forward', 'shrink', 'arrows-alt', 'down', 'up', 'left',
      'right', 'caret-up', 'caret-down', 'caret-left', 'caret-right',
      'up-circle', 'down-circle', 'left-circle', 'right-circle',
      'double-right', 'double-left', 'vertical-left', 'vertical-right',
      'forward', 'backward', 'rollback', 'enter', 'retweet',
      'swap', 'swap-left', 'swap-right', 'arrow-up', 'arrow-down',
      'arrow-left', 'arrow-right', 'play-circle',
      'up-square', 'down-square', 'left-square', 'right-square',
      'login', 'logout', 'menu-fold', 'menu-unfold',
      'border-bottom', 'border-horizontal', 'border-inner',
      'border-left', 'border-right', 'border-top',
      'border-verticle', 'pic-center', 'pic-left', 'pic-right',
      'radius-bottomleft', 'radius-bottomright', 'radius-upleft',
      'fullscreen', 'fullscreen-exit'
    ]
  },
  {
    id: 'suggestion',
    title: '提示建议性图标',
    icons: [
      'question', 'question-circle',
      'plus', 'plus-circle', 'pause',
      'pause-circle', 'minus',
      'minus-circle', 'plus-square', 'minus-square',
      'info', 'info-circle',
      'exclamation', 'exclamation-circle',
      'close', 'close-circle', 'close-square',
      'check', 'check-circle',
      'check-square',
      'clock-circle', 'warning',
      'issues-close', 'stop'
    ]
  },
  {
    id: 'edit',
    title: '编辑类图标',
    icons: [
      'edit', 'form', 'copy', 'scissor', 'delete', 'snippets', 'diff', 'highlight',
      'align-center', 'align-left', 'align-right', 'bg-colors',
      'bold', 'italic', 'underline',
      'strikethrough', 'redo', 'undo', 'zoom-in', 'zoom-out',
      'font-colors', 'font-size', 'line-height', 'colum-height',
      'dash', 'small-dash', 'sort-ascending', 'sort-descending',
      'drag', 'ordered-list', 'radius-setting'
    ]
  },
  {
    id: 'data',
    title: '数据类图标',
    icons: [
      'area-chart', 'pie-chart', 'bar-chart', 'dot-chart', 'line-chart',
      'radar-chart', 'heat-map', 'fall', 'rise', 'stock', 'box-plot', 'fund',
      'sliders'
    ],
  },
  {
    id: 'other',
    title: '网站通用图标',
    icons: [
      'lock', 'unlock', 'bars', 'book', 'calendar', 'cloud', 'cloud-download',
      'code', 'copy', 'credit-card', 'delete', 'desktop',
      'download', 'ellipsis', 'file', 'file-text',
      'file-unknown', 'file-pdf', 'file-word', 'file-excel',
      'file-jpg', 'file-ppt', 'file-markdown', 'file-add',
      'folder', 'folder-open', 'folder-add', 'hdd', 'frown',
      'meh', 'smile', 'inbox',
      'laptop', 'appstore', 'link',
      'mail', 'mobile', 'notification', 'paper-clip', 'picture',
      'poweroff', 'reload', 'search', 'setting', 'share-alt',
      'shopping-cart', 'tablet', 'tag', 'tags',
      'to-top', 'upload', 'user', 'video-camera',
      'home', 'loading', 'loading-3-quarters',
      'cloud-upload',
      'star', 'heart', 'environment',
      'eye', 'camera', 'save', 'team',
      'solution', 'phone', 'filter', 'exception', 'export',
      'customer-service', 'qrcode', 'scan', 'like',
      'dislike', 'message', 'pay-circle',
      'calculator', 'pushpin',
      'bulb', 'select', 'switcher', 'rocket', 'bell', 'disconnect',
      'database', 'compass', 'barcode', 'hourglass', 'key',
      'flag', 'layout', 'printer', 'sound', 'usb', 'skin', 'tool',
      'sync', 'wifi', 'car', 'schedule', 'user-add', 'user-delete',
      'usergroup-add', 'usergroup-delete', 'man', 'woman', 'shop',
      'gift', 'idcard', 'medicine-box', 'red-envelope', 'coffee',
      'copyright', 'trademark', 'safety', 'wallet', 'bank', 'trophy',
      'contacts', 'global', 'shake', 'api', 'fork', 'dashboard',
      'table', 'profile',
      'alert', 'audit', 'branches',
      'build', 'border', 'crown',
      'experiment', 'fire',
      'money-collect', 'property-safety', 'read', 'reconciliation',
      'rest', 'security-scan', 'insurance', 'interation', 'safety-certificate',
      'project', 'thunderbolt', 'block', 'cluster', 'deployment-unit',
      'dollar', 'euro', 'pound', 'file-done', 'file-exclamation', 'file-protect',
      'file-search', 'file-sync', 'gateway', 'gold', 'robot', 'shopping'
    ],
  },
  {
    id: 'logo',
    title: '品牌和标识',
    icons: [
      'android', 'apple', 'windows',
      'ie', 'chrome', 'github', 'aliwangwang',
      'dingding',
      'weibo-square', 'weibo-circle', 'taobao-circle', 'html5',
      'weibo', 'twitter', 'wechat', 'youtube', 'alipay-circle',
      'taobao', 'skype', 'qq', 'medium-workmark', 'gitlab', 'medium',
      'linkedin', 'google-plus', 'dropbox', 'facebook', 'codepen',
      'amazon', 'google', 'codepen-circle', 'alipay', 'ant-design',
      'aliyun', 'zhihu', 'slack', 'slack-square', 'behance',
      'behance-square', 'dribbble', 'dribbble-square',
      'instagram', 'yuque',
      'alibaba', 'yahoo'
    ]
  }
];

interface EditableIconSource extends IconSource {
  onEdit?: boolean;
}

@Component({
  selector: 'ma-icon-management',
  templateUrl: 'ma-icon-management.component.html',
  styleUrls: ['./ma-icon-management.component.less']
})
export class MaIconManagementComponent implements OnInit {
  /**
   * zorro内置icon
   */
  iconGroups: IconGroup[];
  iconTheme = 'outline';

  /**
   * 自定义的icon
   */
  customizedIconGroups: IconGroup[] = [];
  customizedIconSources: EditableIconSource[] = [];

  copyIconSource: EditableIconSource;

  constructor(@Optional() public modalRef: NzModalRef, private messageService: NzMessageService,
              @Inject(DOCUMENT) private document: any, private iconSourceService: IconSourceService) {
  }

  ngOnInit(): void {

    this.setIconsShouldBeDisplayed(this.iconTheme);

    this.iconSourceService.getAll().subscribe(iconSources => {
      this.customizedIconSources = iconSources.reverse();
    });
  }

  setIconsShouldBeDisplayed(value: string): void {
    this.iconGroups = groups
      .map(group => ({
        id: group.id,
        title: group.title,
        icons: group.icons.filter(name => manifest[value].includes(name))
      }))
      .filter(({icons}) => Boolean(icons.length));
    this.iconTheme = value;

  }

  addIconSource() {
    this.customizedIconSources.push({
      url: '',
      title: '新建icon分组',
      onEdit: true
    });
  }

  async saveEdit(i: number) {
    try {
      const iconSource = this.customizedIconSources[i];
      this.customizedIconSources[i] = await this.iconSourceService.save(iconSource).toPromise();
      if (this.copyIconSource) {
        if (this.copyIconSource.url !== iconSource.url) { // 修改了url, 需要reload
          location.reload(true);
        }
      } else {
        this.iconSourceService.import(iconSource); // 导入新的iconfont链接
      }
    } catch (e) {
      this.messageService.error('操作失败');
    }
  }

  startEdit(i: number) {
    this.copyIconSource = {...this.customizedIconSources[i]};
    this.customizedIconSources[i].onEdit = true;
  }

  cancelEdit(i: number) {
    this.customizedIconSources.splice(i, 1, this.copyIconSource);
  }

  doDelete(i: number) {
    try {
      this.iconSourceService.remove(this.customizedIconSources[i]).subscribe(() => {
        this.customizedIconSources.splice(i, 1);
        this.iconGroups.splice(i, 1);
      });
    } catch (e) {
      this.messageService.error('操作失败');
    }
  }

  fetchCustomizedGroups() {
    const iconGroups = [];
    const svgTags: NodeListOf<SVGSVGElement> = document.querySelectorAll<SVGSVGElement>('body > svg');

    for (let i = 0; i < svgTags.length; i++) {
      iconGroups.push(this.createIconGroup(svgTags[i], this.customizedIconSources[i]));
    }
    setTimeout(() => this.customizedIconGroups = iconGroups);
  }

  createIconGroup(svg: SVGSVGElement, iconSource: IconSource): IconGroup {
    const {url: id, title} = iconSource;

    const icons = [];
    const symbols = svg.getElementsByTagName('symbol');
    for (let i = 0; i < symbols.length; i++) {
      icons.push(symbols[i].id);
    }
    return {id, title, icons};
  }

  onIconClick(icon: string, iconfont?: boolean) {
    if (this.modalRef) {
      if (iconfont) {
        this.modalRef.destroy({iconfont: icon, theme: this.iconTheme});
      } else {
        this.modalRef.destroy({type: icon, theme: this.iconTheme});
      }
    }
  }

  trackByFn = (index: number, item: string) => `${item}-${this.iconTheme}`;

}
