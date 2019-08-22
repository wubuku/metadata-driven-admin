import {WebResource} from './web-resource';
import {RequestInfo} from 'angular-in-memory-web-api';
import {HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';


@Injectable()
export class IconSourceWebResource extends WebResource {
  constructor() {
    super('icon-sources', [
      {id: 1, url: 'https://at.alicdn.com/t/font_959055_uh8nwv87vko.js', title: '大麦官方图标'},
      {id: 2, url: 'https://at.alicdn.com/t/font_660034_xfbygclyz9j.js', title: '淘票票图标'}
    ]);
  }

  delete(requestInfo: RequestInfo) {
    const {collection, id} = requestInfo;
    const index = collection.findIndex((item) => id === item.id);
    if (index !== -1) {
      collection.splice(index, 1);
    }
    return super.createResponse(requestInfo);
  }

  post(requestInfo: RequestInfo) {
    const {collection, req} = requestInfo;
    const body = (<HttpRequest<any>>req).body;
    const extra: any = {updatedTime: new Date(), onEdit: false};
    if (!body.createdTime) {
      extra.createdTime = new Date();
    }
    const source = Object.assign({}, body, extra);
    const index = collection.findIndex((item) => source.id === item.id);
    if (index === -1) {
      collection.push(source);
    } else {
      collection.splice(index, 1, source);
    }
    return super.createResponse(requestInfo, source);
  }


}
