import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api';
import {Inject, Injectable} from '@angular/core';
import {WebResource} from './web-resource';
import {StandardCrudWebResource} from './standard-crud-web-resource';


@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  resources: { [x: string]: WebResource };
  db: { [x: string]: any };

  constructor(@Inject(WebResource) resources: WebResource[]) {
    this.resources = {};
    this.db = {};
    for (const resource of resources) {
      this.resources[resource.collectionName] = resource;
      this.db[resource.collectionName] = resource.collection;
    }
    const standardResources = this.db['api'].resources;
    for (const standardResource of standardResources) {
      const collectionName = standardResource.relativeUri.substring(1);
      const collection = [];
      this.resources[collectionName] = new StandardCrudWebResource(collectionName, collection, standardResource);
      this.db[collectionName] = collection;
    }
  }


  handleRequest(req: RequestInfo) {
    const resource = this.resources[req.collectionName];
    const functionName = req.method.toLowerCase();
    const func = resource[functionName];
    if (typeof func === 'function') {
      return func.call(resource, req);
    } else {

    }
  }

  get(req: RequestInfo) {
    return this.handleRequest(req);
  }

  post(req: RequestInfo) {
    return this.handleRequest(req);
  }

  put(req: RequestInfo) {
    return this.handleRequest(req);
  }

  delete(req: RequestInfo) {
    return this.handleRequest(req);
  }

  createDb(reqInfo?: RequestInfo) {
    return this.db;
  }

}
