import {Component, HostBinding, Input, OnChanges, SimpleChanges} from '@angular/core';


@Component({
  selector: 'ma-icon',
  template: `
    <i nz-icon [type]="icon.type" [iconfont]="icon.iconfont" [theme]="icon.theme"></i>
  `,
  styles: [`
    :host {
      display: inline-block;
    }
  `]
})
export class MaIconComponent implements OnChanges {
  @Input()
  icon: { type?: string; iconfont?: string; theme?: string };


  @HostBinding('class.hide')
  hide: boolean;

  ngOnChanges(changes: SimpleChanges): void {
    this.hide = this.icon === null || this.icon === undefined;
  }
}

