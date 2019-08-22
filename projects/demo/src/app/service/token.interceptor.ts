import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';
import {AuthenticationService} from './authentication.service';
import {NzMessageService} from 'ng-zorro-antd';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private auth: AuthenticationService,
              private messageService: NzMessageService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.auth.token;
    if (token) {
      req = req.clone({
        setHeaders: {
          'Authorization': `${token.type} ${token.token}`,
        }
      });
    }
    req = req.clone({
      setHeaders: {
        'Accept': 'application/json',
      }
    });
    return next.handle(req).pipe(catchError((err: HttpErrorResponse) => {
      if (err.status === 403) {
        const realm = err.headers.get('WWW-Authenticate');
        if (realm && realm.includes('insufficient_scope')) {
          this.messageService.error('您所使用的账号权限不够');
          return throwError(err.error.message || err.statusText);
        }
      }

      if (err.status === 401 || err.status === 403) {
        this.auth.logout();
        return;
      }


      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
