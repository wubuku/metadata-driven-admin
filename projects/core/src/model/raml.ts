import {capitalize, parseCamelCase} from '../util';

export class Raml {
  ramlVersion: string;
  title: string;
  description: string;
  version: string;
  baseUri: string;
  protocols: string[];
  mediaType: string[];
  documentation: DocumentationItem[];
  types: { [x: string]: TypeDeclaration } = {};
  baseUriParameters: TypeDeclaration[];
  resources: Resource[];
}

export class DocumentationItem {
  title: string;
  content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }
}

export class TypeDeclaration {
  name: string;
  displayName: string;
  description: string;
  type: string;
  defaultValue: string;
  required: boolean;


  constructor(td: any) {
    Object.assign<TypeDeclaration, any>(this, td);
    if (!this.displayName) {
      if (this instanceof SimpleTypeDeclaration) {
        this.displayName = capitalize(parseCamelCase(this.name));
      } else {
        this.displayName = this.name;
      }
    }
    if (!this.description) {
      this.description = this.displayName;
    }
    if (!this.type) {
      console.warn(this.name + '未指明类型信息');
      this.type = 'string';
    }
  }

}

export class SimpleTypeDeclaration extends TypeDeclaration {
  format: string;
  enumValues: any[];
  pattern: string;
  minLength: number;
  maxLength: number;
  fileTypes: string[];
  minimum: number;
  maximum: number;
  multipleOf: number;
}

export class ObjectTypeDeclaration extends TypeDeclaration {
  properties: TypeDeclaration[];
  minProperties: number;
  maxProperties: number;
  additionalProperties: boolean;
  discriminator: string;
  discriminatorValue: string;

  constructor(td: any, properties: TypeDeclaration[]) {
    super(td);
    this.properties = properties;
  }
}

export class ArrayTypeDeclaration extends TypeDeclaration {
  uniqueItems: boolean;
  items: TypeDeclaration;
  minItems: number;
  maxItems: number;

  constructor(td: any, items: TypeDeclaration) {
    super(td);
    this.items = items;
  }
}

export class Resource {
  relativeUri: string;
  displayName: string;
  description: string;
  parent: Resource;
  resources: Resource[];
  uriParameters: TypeDeclaration[];
  methods: Method[];

  constructor(parent?: Resource) {
    this.parent = parent;
  }

  get qualifiedPath() {
    if (this.parent) {
      return this.parent.qualifiedPath + this.relativeUri;
    }
    return this.relativeUri;
  }
}

export class Method {
  method: string;
  displayName: string;
  description: string;
  protocols: string[];
  body: TypeDeclaration[];
  queryParameters: TypeDeclaration[];
  headers: TypeDeclaration[];
  responses: Response[];
}

export class Response {
  code: number;
  description: string;
  headers: TypeDeclaration[];
  body: TypeDeclaration[];
}

const PageType = 'org.springframework.data.domain.Page';

export class RamlUtils {

  static isSimpleTypeDeclaration(td: { type: string }): boolean {
    return td.type === null || td.type === undefined ||
      td.type === 'any' || td.type === 'datetime' ||
      td.type === 'date-only' || td.type === 'boolean' ||
      td.type === 'string' || td.type === 'file' || td.type === 'number';
  }

  static isPageType(type: TypeDeclaration) {
    if (type instanceof ObjectTypeDeclaration) {
      if (type.type === PageType) {
        return true;
      }

      const pageProperties = [
        {name: 'number', type: 'number'},
        {name: 'size', type: 'number'},
        {name: 'totalElements', type: 'number'},
        {name: 'content', type: 'array'}
      ];

      for (const property of type.properties) {
        const index = pageProperties.findIndex(v => property.name === v.name && property.type === v.type);
        if (index !== -1) {
          pageProperties.splice(index, 1);
        }
      }
      return pageProperties.length === 0;
    }
    return false;
  }

  static getSuccessResponseBody(action: Method) {
    if (action.responses) {
      const response = action.responses.find(resp => resp.code >= 200 && resp.code < 300);
      if (response && response.body && response.body.length > 0) {
        // TODO 目前只处理了一种返回类型。数据的格式可以不同，但是强烈不建议根据不同的accept头返回不同的数据

        return response.body[0];
      }
    }
  }


  /**
   * 获取接口的accepts
   * @param action
   * @returns
   */
  static getAccept(action: Method) {
    const responseBody = RamlUtils.getSuccessResponseBody(action);
    if (responseBody) {
      return responseBody.name;
    }
  }

  static getRequestBody(action: Method) {
    if (action.body && action.body.length > 0) {
      return action.body[0];
    }
  }

  static getContentType(action: Method) {
    const requestBody = RamlUtils.getRequestBody(action);
    if (requestBody) {
      return requestBody.name;
    }
  }

}


export const PagingParameters = ['page', 'sort', 'size'];



