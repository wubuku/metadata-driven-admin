import {getStatusText, HeadersCore, RequestInfo, RequestInfoUtilities, ResponseOptions, STATUS} from 'angular-in-memory-web-api';
import {Observable} from 'rxjs/internal/Observable';

export class WebResource {
  constructor(public collectionName: string, public collection: any) {

  }

  get?(req: RequestInfo): Observable<any> | void;

  post?(req: RequestInfo): Observable<any> | void;

  put?(req: RequestInfo): Observable<any> | void;

  delete?(req: RequestInfo): Observable<any> | void;


  protected createResponse(requestInfo: RequestInfo, body?: any) {
    return requestInfo.utils.createResponse$(() => {
      return {
        url: requestInfo.url,
        headers: requestInfo.headers,
        body: body,
        status: STATUS.OK,
        statusText: getStatusText(STATUS.OK),
      } as ResponseOptions;
    });
  }
}
