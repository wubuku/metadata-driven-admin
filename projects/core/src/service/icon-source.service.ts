import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IconSource} from '../model';
import {NzIconService} from 'ng-zorro-antd';

@Injectable({providedIn: 'root'})
export class IconSourceService {
  private url = '/api/icon-sources';

  constructor(private http: HttpClient, private iconService: NzIconService) {

  }

  getAll(): Observable<IconSource[]> {
    return this.http.get<IconSource[]>(this.url);
  }

  save(source: IconSource): Observable<IconSource> {
    return this.http.post<IconSource>(this.url, source);
  }

  remove(source: IconSource): Observable<any> {
    return this.http.delete(this.url, {params: {url: source.url}});
  }

  import(source: IconSource) {
    this.iconService.fetchFromIconfont({scriptUrl: source.url});
  }

}
