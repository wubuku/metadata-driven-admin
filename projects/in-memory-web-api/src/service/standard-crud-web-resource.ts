import {RequestInfo} from 'angular-in-memory-web-api';
import {WebResource} from './web-resource';
import {HttpParams, HttpRequest} from '@angular/common/http';

const Ops = ['ne', 'eq', 'ge', 'gt', 'le', 'lt', 'in', 'like', 'between'];

interface Condition {
  op: string;
  key: string;
  value: any;
}

const Op = {
  eq: (persist, input: string) => {
    return persist == input; // tslint:disable-line:triple-equals
  },
  ne: (persist, input: string) => {
    return persist != input; // tslint:disable-line:triple-equals
  },
  lt: (persist, input: string) => {
    return persist < input;
  },
  le: (persist, input: string) => {
    return persist <= input; // tslint:disable-line:triple-equals
  },
  gt: (persist, input: string) => {
    return persist > input; // tslint:disable-line:triple-equals
  },
  ge: (persist, input: string) => {
    return persist >= input; // tslint:disable-line:triple-equals
  },
  in: (persist, input: string) => {
    if (toString.call(persist) === '[object Array]') {
      return persist.findIndex(item => item == input) !== -1; // tslint:disable-line:triple-equals
    }
    return false;
  },
  like: (persist, input: string) => {
    if (toString.call(persist) === '[object String]') {
      return persist.indexOf(input) !== -1;
    }
    return false;
  },
  between: (persist, input: string) => {
    const parts = input.split(',');
    let result = false;
    if (parts[0]) {
      result = this.le(persist, parts[0]);
    }
    if (parts[1]) {
      result = result && this.ge(persist, parts[0]);
    }
    return result;
  }
};

export class StandardCrudWebResource extends WebResource {
  private readonly idPropertyName: string;

  constructor(public collectionName: string, public collection: any, private standardResource: any) {
    super(collectionName, collection);
    const relativeUri = standardResource.resources[0].relativeUri;
    this.idPropertyName = relativeUri.substring(2, relativeUri.length - 1);
  }

  get(requestInfo: RequestInfo) {
    const {collection, req, id} = requestInfo;
    if (id) {
      for (const item of collection) {
        if (item[this.idPropertyName] === id) {
          return super.createResponse(requestInfo, item);
        }
      }
    } else {
      const {sort, page, size, conditions} = this.parseParams((<HttpRequest<any>>req).params);

      let filtered = [];

      // filter
      if (conditions.length > 0) {
        for (const item of collection) {
          if (this.matches(conditions, item)) {
            filtered.push(item);
          }
        }
      } else {
        filtered = [...collection];
      }


      filtered.sort((a, b) => {
        const propertyValueA = a[sort.property];
        const propertyValueB = b[sort.property];

        const mode = sort.dir === 'desc' ? -1 : 1;

        if (propertyValueA === propertyValueB) {
          return 0;
        }

        if (propertyValueA > propertyValueB) {
          return mode;
        }

        if (propertyValueA > propertyValueB) {
          return -1 * mode;
        }
      });

      const resultSet = [];
      const offset = page * size;
      const limit = Math.min(offset + size, filtered.length);
      for (let i = offset; i < limit; i++) {
        resultSet.push(filtered[i]);
      }


      return super.createResponse(requestInfo, {number: page, size: size, content: resultSet, totalElements: filtered.length});
    }
  }

  matches(conditions: Condition[], item: any) {
    for (const condition of conditions) {
      const targetValue = item[condition.key];
      if (!Op[condition.op](targetValue, condition.value)) {
        return false;
      }
    }
    return true;
  }

  parseParams(params: HttpParams) {
    const sort = this.parseSort(params.get('sort'));
    const page = parseInt(params.get('page'), 10) || 0;
    const size = parseInt(params.get('size'), 10) || 20;

    const conditions = [];
    for (const key of params.keys()) {
      if (key !== 'sort' && key !== 'page' && key !== 'size') {
        const items = params.getAll(key);
        if (items.length === 0) {
          continue;
        }
        if (items.length === 1) {
          const item = items[0];
          const startIndex = item.indexOf('(');
          if (startIndex !== -1 && item.endsWith(')')) {
            const op = item.substring(0, startIndex);
            if (Ops.indexOf(op) !== -1) {
              conditions.push({op: op, key: key, value: item.substring(startIndex + 1, item.length - 1)});
              continue;
            }
          }
          conditions.push({op: 'eq', key: key, value: item});
        } else {
          conditions.push({op: 'in', key: key, value: items});
        }
      }
    }

    return {sort, page, size, conditions};
  }

  parseSort(sort: string) {
    if (sort) {
      const parts = sort.split(',');
      if (parts.length === 1) {
        return {property: parts[0], dir: 'asc'};
      } else if (parts.length === 2) {
        return {property: parts[0], dir: parts[1]};
      }
    } else {
      return {property: this.idPropertyName, dir: 'asc'};
    }
  }

  post(requestInfo: RequestInfo) {
    const {req} = requestInfo;
    const body = (<HttpRequest<any>>req).body;
    return this.saveOrUpdate(requestInfo, body[this.idPropertyName]);
  }

  put(requestInfo: RequestInfo) {
    return this.saveOrUpdate(requestInfo, requestInfo.id);
  }

  private saveOrUpdate(requestInfo: RequestInfo, id: any) {
    const {collection, req} = requestInfo;
    const body = (<HttpRequest<any>>req).body;
    const index = collection.findIndex(item => item[this.idPropertyName] === id);
    body[this.idPropertyName] = id;
    if (index === -1) {
      collection.push(body);
    } else {
      collection[index] = body;
    }
    return this.createResponse(requestInfo, body);
  }

  delete(requestInfo: RequestInfo) {
    const {collection, req, id} = requestInfo;
    const index = collection.findIndex(item => item[this.idPropertyName] === id);
    if (index !== -1) {
      collection.splice(index, 1);
    }
  }

}
