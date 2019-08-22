import {Component, OnInit} from '@angular/core';
import {Group, GroupService} from '../../service/group.service';
import {User, UserService} from '../../service/user.service';

export interface GroupModalOptions {
  title: string;
  visible: boolean;
  groupName: string;
  oldGroupName?: string;
}

@Component({
  selector: 'ma-group-management',
  templateUrl: './group-management.component.html',
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
export class GroupManagementComponent implements OnInit {

  groups: Group[] = [];
  users: User[];

  modalOptions: GroupModalOptions = {
    title: '新增权限组',
    visible: false,
    groupName: 'group name'
  };

  constructor(private groupService: GroupService, private userService: UserService) {
  }


  ngOnInit(): void {
    this.groupService.listGroups().subscribe(groups => this.groups = groups);
    this.userService.listUsers().subscribe(users => this.users = users);
  }

  loadGroupByGroupName(group: Group) {
    if (!group.loaded) {
      this.groupService.loadGroupByGroupName(group.groupName);
    }
  }


  deleteGroup(groupName: string) {
    this.groupService.deleteGroup(groupName);
  }

  addUserToGroup(groupName: string, username: string) {
    this.groupService.addUserToGroup(groupName, username);
  }

  removeUserFromGroup(groupName: string, username: string) {
    this.groupService.removeUserFromGroup(groupName, username);
  }

  addGroupAuthority(groupName: string, authorities: string[]) {
    this.groupService.addGroupAuthority(groupName, authorities);
  }

  removeGroupAuthority(groupName: string, authorities: string[]) {
    this.groupService.removeGroupAuthority(groupName, authorities);
  }

  addOrRemoveGroupAuthority(group: Group, event: { authorities: string[], checked: boolean }) {
    if (event.checked) {
      this.addGroupAuthority(group.groupName, event.authorities);
    } else {
      this.removeGroupAuthority(group.groupName, event.authorities);
    }
  }


  hasMember(group: Group, user: User) {
    return group.members.includes(user.username);
  }

  addOrRemoveMember(group: Group, user: User, checked: boolean) {
    if (checked) {
      this.addUserToGroup(group.groupName, user.username);
    } else {
      this.removeUserFromGroup(group.groupName, user.username);
    }
  }

  showCreateModal() {
    this.modalOptions.visible = true;
    this.modalOptions.title = '新建权限组';
    this.modalOptions.oldGroupName = null;
    this.modalOptions.groupName = 'group name';
  }

  showUpdateModal(group: Group) {
    this.modalOptions.visible = true;
    this.modalOptions.title = '修改权限组名字';
    this.modalOptions.oldGroupName = group.groupName;
    this.modalOptions.groupName = group.groupName;
  }

  handleOk() {
    if (!this.modalOptions.oldGroupName) {
      this.groupService.createGroup(this.modalOptions.groupName);
    } else {
      this.groupService.updateGroup(this.modalOptions.oldGroupName, this.modalOptions.groupName);
    }
    this.modalOptions.visible = false;
  }


}
