import {Injectable, InjectionToken} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, shareReplay} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {GrantedAuthority} from './authority.service';

export class User {
  username: string;
  password?: string;
  enabled: boolean;
  authorities: GrantedAuthority[];

  expand: boolean;
  loaded: boolean;

  constructor(username: string, password: string, enabled: boolean, authorities: string[] = []) {
    this.username = username;
    this.password = password;
    this.enabled = enabled;
    this.authorities = authorities.map(authority => ({authority}));
  }

}


@Injectable({providedIn: 'root'})
export class UserService {

  users: Observable<User[]>;

  basePath = '/api/authorization/users';

  constructor(private http: HttpClient) {

  }

  listUsers() {
    if (!this.users) {
      this.users =
        this.http.get<User[]>(this.basePath)
          .pipe(
            map(users => {
              return users.map(user => new User(user.username, '', user.enabled));
            }),
            shareReplay(1)
          );
    }
    return this.users;
  }

  loadUserByUsername(username: string) {
    this.http.get<User>(`${this.basePath}/${username}`).subscribe(user => {
      this.users.subscribe(users => {
        for (const memoryUser of users) {
          if (username === memoryUser.username) {
            Object.assign(memoryUser, user);
            memoryUser.loaded = true;
          }
        }
      });
    });
  }

  createOrUpdateUser(username: string, password: string, enabled: boolean) {
    const user = new User(username, password, enabled);
    this.http.post(`${this.basePath}/${username}`, user).subscribe(() => {
      this.users.subscribe(users => {
        const memoryUser = users.find(item => item.username === user.username);
        if (memoryUser) {
          Object.assign(memoryUser, user);
        } else {
          users.push(user);
        }
      });
    });
  }

  changeUserState(user: User) {
    const options = {
      params: {
        enabled: String(user.enabled)
      }
    };
    this.http.patch(`${this.basePath}/${user.username}`, null, options).subscribe(() => {
      // Nothing to do, Used only to trigger requests
    });
  }

  deleteUser(username: string) {
    this.http.delete(`${this.basePath}/${username}`).subscribe(() => {
      this.users.subscribe(users => {
        const index = users.findIndex(user => user.username === username);
        users.splice(index, 1);
      });
    });
  }

  addAuthoritiesToUser(username: string, authorities: string[]) {
    this.http.post(`${this.basePath}/${username}/authorities`, authorities).subscribe(() => {
      this.users.subscribe(users => {
        const index = users.findIndex(user => user.username === username);
        if (!users[index].authorities) {
          users[index].authorities = [];
        }
        for (const authority of authorities) {
          users[index].authorities.push({authority: authority});
        }
      });
    });
  }

  deleteAuthoritiesFromUser(username: string, authorities: string[]) {
    const options = {
      params: {
        authorities
      }
    };
    this.http.delete(`${this.basePath}/${username}/authorities`, options).subscribe(() => {
      this.users.subscribe(users => {
        const index = users.findIndex(user => user.username === username);
        for (const authority of authorities) {
          const position = users[index].authorities.findIndex(grantedAuthority => grantedAuthority.authority === authority);
          users[index].authorities.splice(position, 1);
        }
      });
    });
  }

}


export interface LoggedInUserHolder {

  getLoggedInUser(): User;

}

export const LOGGED_IN_USER_HOLDER = new InjectionToken('LOGGED_IN_USER_HOLDER');
