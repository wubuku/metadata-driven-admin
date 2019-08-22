import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd';
import {LoggedInUserHolder, User, LocalStorageService} from '../import-proxy';


export interface AuthenticateToken {
  type: string;
  token: string;
  principal: JwtClaims;
}

export interface JwtClaims {
  sub: string; // 用户名，主题
  scp: string[]; // 范围，权限
  iss: string; // 签发机构
  jti: string; // jwt Id
  nbf: number; // 生效时间
  exp: number; // 过期时间
  iat: number; // 签发时间
}

@Injectable({providedIn: 'root'})
export class AuthenticationService implements LoggedInUserHolder {

  private $token: AuthenticateToken;

  constructor(private http: HttpClient, private router: Router, private messageService: NzMessageService, private localStorage: LocalStorageService) {

  }

  authenticate(username: string, password: string) {
    const options = {
      params: {username, password}
    };
    this.http.post<AuthenticateToken>('/api/login', null, options).subscribe((result) => {
      this.token = result;
      this.router.navigate(['/']).then(() => this.messageService.success('登录成功'));
    });
  }


  logout = (showMessage?: boolean) => {
    this.http.post('/api/logout', null).subscribe(() => {
      this.token = null;
      this.localStorage.remove('user-token');
      this.router.navigate(['/login']).then(() => {
        if (showMessage) {
          this.messageService.success('退出登录');
        }
      });
    });
  }


  get token(): AuthenticateToken {
    if (!this.$token) {
      this.$token = JSON.parse(this.localStorage.get('user-token'));
    }
    return this.$token;
  }

  set token(token: AuthenticateToken) {
    this.$token = token;
    this.localStorage.set('user-token', JSON.stringify(this.$token));
  }

  getLoggedInUser(): User {
    if (this.token) {
      const principal = this.token.principal;
      return new User(principal.sub, null, true, principal.scp);
    }
    return null;
  }


}
