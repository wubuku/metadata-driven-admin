import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, shareReplay} from 'rxjs/operators';
import {Observable} from 'rxjs';

export interface GrantedAuthority {
  authority: string;
}

export interface ServerAuthorities {
  [serviceId: string]: GrantedAuthority[];
}

export interface LocalServerAuthorities {
  [serviceId: string]: LocalGroupAuthorities;
}

export interface LocalGroupAuthorities {
  [groupId: string]: string[];
}


@Injectable({providedIn: 'root'})
export class AuthorityService {

  serverAuthorities: Observable<LocalServerAuthorities>;

  constructor(private http: HttpClient) {

  }

  listAuthorities() {
    if (!this.serverAuthorities) {
      this.serverAuthorities =
        this.http.get<ServerAuthorities>('/api/authorization/authorities')
          .pipe(
            map<ServerAuthorities, LocalServerAuthorities>(serverAuthorities => {
              const localServerAuthorities: LocalServerAuthorities = {};

              for (const serviceId of Object.keys(serverAuthorities)) {
                const groupAuthorities: LocalGroupAuthorities = {};
                for (const grantedAuthority of serverAuthorities[serviceId]) {
                  const authority = grantedAuthority.authority;
                  const groupId = this.extractGroupId(authority);
                  if (!groupAuthorities[groupId]) {
                    groupAuthorities[groupId] = [];
                  }
                  groupAuthorities[groupId].push(authority);
                }

                localServerAuthorities[serviceId] = groupAuthorities;
              }
              return localServerAuthorities;
            }),
            shareReplay<LocalServerAuthorities>(1)
          );
    }
    return this.serverAuthorities;
  }

  extractGroupId = (authority: string) => {
    let position = authority.indexOf('/', 1);
    if (position === -1) {
      position = authority.lastIndexOf(':');
    }
    return authority.substring(0, position);
  }

}
