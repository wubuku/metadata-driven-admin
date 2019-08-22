import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Setting} from '../model';
import {shareReplay} from 'rxjs/operators';
import {MaOptions} from './ma-options';


@Injectable({providedIn: 'root'})
export class SettingService {

  url = '/api/setting';
  options = {params: {appId: this.option.appId}};
  private subject: Observable<Setting>;

  constructor(private http: HttpClient, private option: MaOptions) {
  }

  get(): Observable<Setting> {
    if (!this.subject) {
      this.subject = this.http.get<Setting>(this.url).pipe(shareReplay(1));
    }
    return this.subject;
  }


  saveOrUpdate(body: Setting): Observable<Setting> {
    this.subject = this.http.post<Setting>(this.url, body);
    return this.subject;
  }


}
