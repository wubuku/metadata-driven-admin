import {Component} from '@angular/core';
import {RouterService} from '../../import-proxy';
import {AuthenticationService} from '../../service/authentication.service';

@Component({
  selector: 'app-home',
  template: `
    <ng-template #toolbars>
      <ul class="toolbar-group">
        <li><i nz-icon [type]="'api'" (click)="router.reload()"></i></li>
        <li><i nz-icon [type]="'setting'" ></i></li>
        <li><i nz-icon type="global"></i></li>
        <li><i nz-icon nzType="logout" (click)="authenticationService.logout(true)"></i></li>
      </ul>
    </ng-template>
    <ma-workspace [showTopSearchBar]="true" [headerToolbars]="toolbars"></ma-workspace>
  `,
})
export class HomeComponent {
  constructor(public router: RouterService, public authenticationService: AuthenticationService) {

  }
}
