import {Component, OnInit} from '@angular/core';
import {User, UserService} from '../../service/user.service';


export interface ModalOptions {
  title: string;
  visible: boolean;
  user: User;
  modalType: 'create' | 'update';
}

@Component({
  selector: 'ma-user-management',
  templateUrl: `./user-management.component.html`,
  styles: [`
    .content-left-align {
      text-align: left!important;
    }
    :host {
      display: block;
      position: relative;
    }
  `]
})
export class UserManagementComponent implements OnInit {

  users: User[] = [];

  modalOptions: ModalOptions = {
    title: '新建用户',
    visible: false,
    modalType: 'create',
    user: new User('', '', true)
  };

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.listUsers().subscribe(value => this.users = value);
  }


  loadUserByUsername(user: User) {
    if (!user.loaded) {
      this.userService.loadUserByUsername(user.username);
    }
  }

  showCreateModal() {
    this.modalOptions.visible = true;
    this.modalOptions.title = '新建用户';
    this.modalOptions.modalType = 'create';
    this.modalOptions.user = new User('', '', true);
  }

  showUpdateModal(user: User) {
    this.modalOptions.visible = true;
    this.modalOptions.title = '修改用户密码';
    this.modalOptions.modalType = 'update';
    this.modalOptions.user = {...user, password: ''};
  }

  handleOk() {
    const user = this.modalOptions.user;
    if (this.modalOptions.modalType === 'create') {
      this.userService.createOrUpdateUser(user.username, user.password, user.enabled);
    } else {
      const memoryUser = this.users.find(item => item.username === user.username);
      if (memoryUser.password !== user.password) {
        this.userService.createOrUpdateUser(user.username, user.password, user.enabled);
      }
    }
    this.modalOptions.visible = false;
  }

  changeUserState(user: User) {
    this.userService.changeUserState(user);
  }


  deleteUser(username: string) {
    this.userService.deleteUser(username);
  }


  addAuthoritiesToUser(username: string, authorities: string[]) {
    this.userService.addAuthoritiesToUser(username, authorities);
  }

  deleteAuthoritiesFromUser(username: string, authorities: string[]) {
    this.userService.deleteAuthoritiesFromUser(username, authorities);
  }

  addOrRemoveUserAuthority(user: User,  event: {authorities: string[], checked: boolean}) {
    if (event.checked) {
      this.addAuthoritiesToUser(user.username, event.authorities);
    } else {
      this.deleteAuthoritiesFromUser(user.username, event.authorities);
    }
  }


}
