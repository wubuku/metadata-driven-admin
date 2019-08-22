import {Injectable} from '@angular/core';
import {ArrayTypeDeclaration, DocumentationItem, Method, ObjectTypeDeclaration, Raml, RamlUtils, Resource, Response, SimpleTypeDeclaration, TypeDeclaration} from '../model';
import {HttpClient} from '@angular/common/http';
import {map, shareReplay} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {MaOptions} from './ma-options';


@Injectable({providedIn: 'root'})
export class RamlService {
  private subject: Observable<Raml>;
  private response: any;
  private raml: Raml;

  constructor(private http: HttpClient, private option: MaOptions) {
  }

  public getRaml(): Observable<Raml> {
    if (!this.subject) {
      this.subject = this.http.get<Raml>(this.option.api).pipe(map(this.mapToRaml), shareReplay(1));
    }
    return this.subject;
  }

  mapToRaml = (response: any): Raml => {
    this.raml = new Raml();

    const {title, description, version, ramlVersion, protocols, mediaType, documentation} = response;
    let {baseUri} = response;

    this.raml.title = title;
    this.raml.description = description;
    this.raml.version = version;
    this.raml.ramlVersion = ramlVersion;

    if (protocols) {
      this.raml.protocols = protocols;
    }
    if (mediaType) {
      this.raml.mediaType = mediaType;
    }

    if (baseUri) {
      if (baseUri.endsWith('/')) {
        baseUri = baseUri.substring(0, response.baseUri.length - 1);
      }
      if (baseUri) {
        if (!baseUri.startsWith('/')) {
          baseUri = '/' + baseUri;
        }
      }
      this.raml.baseUri = baseUri;
    }

    if (documentation) {
      this.raml.documentation = documentation.map(r => new DocumentationItem(r.title, r.content));
    }

    if (response.types) {
      const types = response.types;
      this.response = response;
      this.response.types = {};
      for (const type of types) {
        response.types[type.name] = type;
      }

      for (const typeName of Object.getOwnPropertyNames(this.response.types)) {
        this.raml.types[typeName] = this.resolveType(this.response.types[typeName]);
      }
    }
    if (response.baseUriParameters) {
      this.raml.baseUriParameters = response.baseUriParameters.map(t => this.resolveType(t));
    }
    if (response.resources) {
      this.raml.resources = response.resources.map(r => this.mapToResource(r));
    }

    return this.raml;
  }

  private mapToResource(res: any, parent?: Resource) {
    const resource = new Resource(parent);
    resource.description = res.description;
    resource.displayName = res.displayName;
    resource.relativeUri = res.relativeUri;

    if (res.uriParameters) {
      resource.uriParameters = res.uriParameters.map(t => this.resolveType(t));
    }
    if (res.methods) {
      resource.methods = res.methods.map(m => this.mapToMethod(m));
    }
    if (res.resources) {
      resource.resources = res.resources.map(r => this.mapToResource(r, resource)).sort((a, b) => {
        if (a.resources) {
          return 1;
        } else if (b.resources) {
          return -1;
        }
        return 0;
      });
    }
    return resource;
  }

  private mapToMethod(m: any): Method {
    const method = new Method();
    method.method = m.method;
    method.displayName = m.displayName;
    method.description = m.description;
    if (m.body) {
      method.body = m.body.map(t => this.resolveType(t));
    }
    if (m.queryParameters) {
      method.queryParameters = m.queryParameters.map(t => this.resolveType(t));
    }
    if (m.headers) {
      method.headers = m.headers.map(t => this.resolveType(t));
    }
    if (m.responses) {
      method.responses = m.responses.map(r => this.mapToResponse(r));
    }
    return method;
  }

  private mapToResponse(r: any): Response {
    const response = new Response();
    response.description = r.description;
    response.code = parseInt(r.code, 10);
    if (r.body) {
      response.body = r.body.map(t => this.resolveType(t));
    }
    return response;
  }

  private resolveType(object: any): TypeDeclaration {
    if (object instanceof TypeDeclaration) {
      return object;
    }

    if (RamlUtils.isSimpleTypeDeclaration(object)) {
      return new SimpleTypeDeclaration(object);
    }

    if (object.type === 'array') {
      return new ArrayTypeDeclaration(object, this.resolveType(object['items']));
    }


    if (object.type === 'object') {
      return this.resolveReferenceType(object);
    }

    return this.resolveReferenceType(object);
  }

  private resolveReferenceType(object: any): TypeDeclaration {

    const properties = [];

    if (object.name !== object.type && object.type !== 'object') {
      let referenceType: TypeDeclaration = this.raml.types[object.type];
      if (!referenceType) {
        const referenceObject = this.response.types[object.type];
        if (!referenceObject) {
          throw new Error('找不到类型' + object.type);
        }
        referenceType = this.resolveType(referenceObject);
      }

      if (referenceType instanceof SimpleTypeDeclaration) {
        return referenceType;
      }

      if (referenceType instanceof ObjectTypeDeclaration) {
        properties.push(...referenceType.properties);
      }
    }
    const objectType = new ObjectTypeDeclaration(object, properties);
    if (this.response.types[objectType.name]) {
      this.raml.types[objectType.name] = objectType;
    }

    if (object.properties) {
      objectType.properties = objectType.properties.concat(object.properties.map(prop => this.resolveType(prop)));
    }
    return objectType;
  }


}
