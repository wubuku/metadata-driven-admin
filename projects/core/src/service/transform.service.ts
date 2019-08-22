import {Injectable} from '@angular/core';
import {RamlService} from './raml.service';
import {ArrayTypeDeclaration, Method, ObjectTypeDeclaration, Resource, SimpleTypeDeclaration, TypeDeclaration} from '../model';
import {format} from 'date-fns';
import {isCompatible} from '../util';


export namespace TypeFactory {

  const map = new Map<TypeDeclaration, object>();

  export function setPrototypeOf(value: any, typedef: TypeDeclaration) {
    if (value != null) {
      let proto = map.get(typedef);
      if (!proto) {
        const F = function () {
        };
        F.prototype = Object.create(Object.getPrototypeOf(value));
        F.prototype.constructor = F;
        F.prototype.typedef = typedef;
        F.prototype.toString = function () {
          if (this.typedef.type === 'date-only') {
            return format(this, 'YYYY-MM-DD');
          }
          if (this.typedef.type === 'datetime') {
            return format(this, 'YYYY-MM-DD HH:mm:ss');
          }


          if (this.typedef instanceof SimpleTypeDeclaration) {
            const options = this.typedef.enumValues;
            for (const option of options) {
              if (option === this) {
                return option;
              }
            }
          }
          if (this.typedef instanceof ObjectTypeDeclaration) {
            return this.typedef.properties.map(p => this[p.name]).join(',');
          }
          if (this.typedef instanceof ArrayTypeDeclaration) {
            return this.join(',');
          }
          return this;
        };
        proto = F.prototype;
        map.set(typedef, proto);
      }


      Object.setPrototypeOf(value, proto);
    }
  }
}

@Injectable({providedIn: 'root'})
export class TransformService {

  constructor(private ramlService: RamlService) {

  }

  /**
   * 通过url 和 method查找到对应的TypeDeclaration，在根据得到的TypeDeclaration转换结果
   * @param result
   * @param url
   * @param httpMethod
   */
  async transform<T>(result: T, url: string, httpMethod: string): Promise<T> {
    const raml = await this.ramlService.getRaml().toPromise();
    const path = url.replace(raml.baseUri, ''); // 删除baseUri部分

    const parts = path.split('/').filter(p => p).map(p => '/' + p);

    if (parts.length > 0) {
      let iterableResource: { resources: Resource[] } = raml;
      for (const part of parts) {
        if (iterableResource) {
          iterableResource = iterableResource.resources.find(item => isCompatible(item.relativeUri, part));
        }
      }

      if (iterableResource) {
        const resource = iterableResource as Resource;
        if (resource.methods) {
          let method: Method;
          for (const m of resource.methods) {
            if (m.method === httpMethod) {
              method = m;
            }
          }
          if (method) {
            for (const response of method.responses) {
              if (response.code >= 200 && response.code < 300) {
                result = this.transformValue(result, response.body[0]) as T;
              }
            }
          }
        }
      }
    }
    return result;
  }

  transformValue(value: any, dec: TypeDeclaration) {
    if (value != null && dec) {
      if (dec instanceof ObjectTypeDeclaration) {
        for (const prop of dec.properties) {
          value[prop.name] = this.transformValue(value[prop.name], prop);
        }
      } else if (dec instanceof ArrayTypeDeclaration) {
        const array = value as any[];
        for (let i = 0; array && i < array.length; i++) {
          array[i] = this.transformValue(array[i], dec.items);
        }
      } else if (dec instanceof SimpleTypeDeclaration) {
        if (dec.type === 'datetime') {
          value = new Date(value);
        } else if (dec.type === 'date-only') {
          value = new Date(value);
        }
      }
      TypeFactory.setPrototypeOf(value, dec);
    }
    return value;
  }


  private async getResultType(url: string, httpMethod: string): Promise<TypeDeclaration> {
    let iterableResource: { resources: Resource[] } = await this.ramlService.getRaml().toPromise();
    const parts = url.split('/').filter(p => p).map(p => '/' + p);
    for (const part of parts) {
      if (iterableResource) {
        iterableResource = iterableResource.resources.find(item => item.relativeUri === part);
      }
    }

    if (iterableResource) {
      const resource = iterableResource as Resource;
      let method: Method;
      for (const m of resource.methods) {
        if (m.method === httpMethod) {
          method = m;
        }
      }
      for (const response of method.responses) {
        if (response.code >= 200 && response.code < 300) {
          return response.body[0];
        }
      }
    }
  }

}

