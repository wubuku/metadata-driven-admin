import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {I18nService} from './i18n.service';
import {Injectable} from '@angular/core';

@Injectable()
export class I18nInterceptor implements HttpInterceptor {
  constructor(private i18n: I18nService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const language = req.headers.get('Accept-Language') || this.i18n.getLocale();
    return next.handle(req.clone({
      setHeaders: {
        'Accept-Language': language,
      }
    }));
  }
}
