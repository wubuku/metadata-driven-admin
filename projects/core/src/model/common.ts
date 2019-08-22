
export interface HttpRequestOptions {
  body?: any;
  headers?: { [param: string]: string | string[] };
  params?: { [param: string]: string | string[] };
  reportProgress?: boolean;
  responseType?: string;
  observe?: string;
  withCredentials?: boolean;
}
