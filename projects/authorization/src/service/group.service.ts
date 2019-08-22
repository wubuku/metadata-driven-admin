import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, shareReplay} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {GrantedAuthority} from './authority.service';

export class Group {
  groupName: string;
  members: string[] = [];
  authorities: GrantedAuthority[] = [];

  expand: boolean;
  loaded: boolean;

  constructor(groupName: string, expand: boolean = false) {
    this.groupName = groupName;
    this.expand = expand;
  }

}


@Injectable({providedIn: 'root'})
export class GroupService {

  groups: Observable<Group[]>;
  basePath = '/api/authorization/groups';
  constructor(private http: HttpClient) {

  }

  listGroups() {
    if (!this.groups) {
      this.groups =
        this.http.get<string[]>(this.basePath)
          .pipe(
            map<string[], Group[]>(groups => {
              return groups.map(name => new Group(name));
            }),
            shareReplay<Group[]>(1)
          );
    }
    return this.groups;
  }


  loadGroupByGroupName(groupName: string) {
    this.http.get<Group>(`${this.basePath}/${groupName}`).subscribe(group => {
      this.groups.subscribe(groups => {
        for (const memoryGroup of groups) {
          if (groupName === memoryGroup.groupName) {
            Object.assign(memoryGroup, group);
            memoryGroup.loaded = true;
          }
        }
      });
    });
  }

  createGroup(groupName: string) {
    this.http.post(`${this.basePath}/${groupName}`, []).subscribe(() => {
      this.groups.subscribe(groups => {
        groups.push(new Group(groupName, true));
      });
    });
  }

  updateGroup(groupName: string, newGroupName: string) {
    this.http.put(`${this.basePath}/${groupName}`, null, {params: {newGroupName}}).subscribe(() => {
      this.groups.subscribe(groups => {
        for (const memoryGroup of groups) {
          if (groupName === memoryGroup.groupName) {
            memoryGroup.groupName = newGroupName;
          }
        }
      });
    });
  }

  deleteGroup(groupName: string) {
    this.http.delete(`${this.basePath}/${groupName}`).subscribe(() => {
      this.groups.subscribe(groups => {
        const index = groups.findIndex(group => group.groupName === groupName);
        groups.splice(index, 1);
      });
    });
  }

  addUserToGroup(groupName: string, username: string) {
    this.http.post(`${this.basePath}/${groupName}/members/${username}`, null).subscribe(() => {
      this.groups.subscribe(groups => {
        const index = groups.findIndex(group => group.groupName === groupName);
        if (!groups[index].members) {
          groups[index].members = [];
        }
        groups[index].members.push(username);
      });
    });
  }

  removeUserFromGroup(groupName: string, username: string) {
    this.http.delete(`${this.basePath}/${groupName}/members/${username}`).subscribe(() => {
      this.groups.subscribe(groups => {
        const index = groups.findIndex(group => group.groupName === groupName);
        const position = groups[index].members.indexOf(username);
        groups[index].members.splice(position, 1);
      });
    });
  }

  addGroupAuthority(groupName: string, authorities: string[]) {
    this.http.post(`${this.basePath}/${groupName}/authorities`, authorities).subscribe(() => {
      this.groups.subscribe(groups => {
        const index = groups.findIndex(group => group.groupName === groupName);
        if (!groups[index].authorities) {
          groups[index].authorities = [];
        }
        for (const authority of authorities) {
          groups[index].authorities.push({authority: authority});
        }
      });
    });
  }

  removeGroupAuthority(groupName: string, authorities: string[]) {
    this.http.delete(`${this.basePath}/${groupName}/authorities`, {params: {authorities}}).subscribe(() => {
      this.groups.subscribe(groups => {
        const index = groups.findIndex(group => group.groupName === groupName);
        for (const authority of authorities) {
          const position = groups[index].authorities.findIndex(grantedAuthority => grantedAuthority.authority === authority);
          groups[index].authorities.splice(position, 1);
        }
      });
    });
  }


}
