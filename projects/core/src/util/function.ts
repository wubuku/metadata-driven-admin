export function formatPath(path: string, data?: any): string {
  if (data) {
    const parameters = getUriParametersFromObject(path, data);
    if (Object.keys(parameters).length > 0) {
      for (const key of Object.keys(parameters)) {
        const value = parameters[key];
        if (value) {
          path = path.replace(new RegExp(`({${key}})`, 'g'), value);
        }
      }
    }
  }
  return path;
}

/**
 * 获取uri参数的值
 * @param path
 * @param data
 */
function getUriParametersFromObject(path: string, data: any) {
  const parameters = {};
  let startIdx = -1;
  for (let i = 0; i < path.length; i++) {

    if (path.charAt(i) === '{') {
      startIdx = i;
    }
    if (path.charAt(i) === '}') {
      if (startIdx !== -1) {
        const field = path.substring(startIdx + 1, i);

        parameters[field] = findValueWithoutDepth(field, data);
        startIdx = -1;
      }
    }
  }
  return parameters;
}

function findValueWithoutDepth(key: string, data: any) {
  for (const key1 of Object.keys(data)) {
    const value = data[key1];
    if (key === key1) {
      return value;
    }
    if (isObject(value)) {
      return findValueWithoutDepth(key, value);
    }
  }
}

export let isObject: (obj: any) => boolean = isType('Object');
export let isNull: (obj: any) => boolean = isType('Null');
export let isNumber: (obj: any) => boolean = isType('Number');
export let isArray: (obj: any) => boolean = isType('Array');
export let isFunction: (obj: any) => boolean = isType('Function');
export let isString: (obj: any) => boolean = isType('String');

export function isType(type: string) {
  return function (obj: any) {
    return toString.call(obj) === `[object ${type}]`;
  };
}

export function getType(obj: any): string {
  const type = toString.call(obj).substring(8);
  return type.substring(0, type.length - 1);
}

export function extractUriVariables(route: string) {
  const variables = [];
  if (route) {
    const routeParts = route.split('/');
    for (let i = 0; i < routeParts.length; i++) {
      const routePart = routeParts[i];
      const start = routePart.indexOf('{');
      const end = routePart.lastIndexOf('}');
      if (start !== -1 && end !== -1 && end > start) {
        variables.push(routePart.substring(start + 1, end));
      }
    }
  }
  return variables;
}

export function extractUriParameters(path: string, route: string) {
  if (path === route) {
    return;
  }

  const pathParts = path.split('/');
  const routeParts = route.split('/');
  if (pathParts.length !== routeParts.length) {
    throw new Error('非法的路径字符串' + route);
  }
  const parameters = {};
  for (let i = 0; i < routeParts.length; i++) {
    const routePart = routeParts[i];
    let pathPart = pathParts[i];
    if (routePart === pathPart) {
      continue;
    }
    const start = routePart.indexOf('{');
    const end = routePart.lastIndexOf('}');
    if (start !== -1 && end !== -1 && end > start) {
      const variable = routePart.substring(start + 1, end);

      if (start !== 0) {
        pathPart = pathPart.substring(start + 1);
      }
      if (end !== routePart.length - 1) {
        const suffix = routePart.substring(end + 1);
        pathPart = pathPart.substring(0, pathPart.length - suffix.length);
      }

      parameters[variable] = pathPart;
    } else {
      throw new Error('非法的路由字符串' + route);
    }
  }

  return parameters;
}

export function isCompatible(route: string, inputPath: string, inputSuffix?: string): boolean {
  if (inputSuffix) {
    if (!route.endsWith(inputSuffix)) {
      return;
    }
  }
  const pathParts = inputPath.substring(1).split('/');
  const routeParts = route.substring(1).split('/');
  if (routeParts.length === pathParts.length) {
    for (let i = 0; i < routeParts.length; i++) {
      const routePart = routeParts[i];
      const pathPart = pathParts[i];
      if (routePart === pathPart) {
        continue;
      }


      let start = routePart.indexOf('{');
      let end = routePart.lastIndexOf('}');
      if (start === -1 || end === -1) { // 表示路由为普通字符串，非表达式
        return false;
      }

      if (start > end) {
        throw new Error('非法的路由字符串->' + route);
      }

      if (start > 0) {
        const prefix = routePart.substring(0, start);
        if (!pathPart.startsWith(prefix)) {
          return false;
        }
      }
      if (end < routePart.length - 1) {
        const suffix = routePart.substring(end + 1);
        if (!pathPart.endsWith(suffix)) {
          return false;
        }
      }

      start = pathPart.indexOf('{');
      end = pathPart.lastIndexOf('}');

      if (start !== -1 || end !== -1) {
        return routePart === pathPart;
      }
    }
    return true;
  }
  return false;
}

export function isContainsChinese(text: string) {
  return /.*[\u4e00-\u9fa5]+.*$/.test(text);
}

export function parseCamelCase(text: string) {
  return text.replace(/([a-z](?=[A-Z]))/g, '$1 ');
}

export function capitalize(text: string) {
  return text[0].toUpperCase() + text.slice(1);
}

export function removeElement<T = any>(array: T[], element: T) {
  const ii = array.findIndex(e => element === e);
  array.splice(ii, 1);
}

export function likeIgnoreCase(source: string, searchString: string): boolean {
  if (!source) {
    return false;
  }
  if (!searchString) {
    return true;
  }
  return source.toLowerCase().includes(searchString.toLowerCase());
}

export function deepClone(input: any) {
  if (typeof input !== 'object' || input === null) {
    return input;
  }

  if (input instanceof Array) {
    return input.map(item => deepClone(item));
  }

  const output = {};
  for (const key of Object.keys(input)) {
    output[key] = deepClone(input);
  }
  Object.setPrototypeOf(output, Object.getPrototypeOf(input));
  return output;
}

export function flatObject(inputValue: any) {
  const value: any = {};

  function flat(input: any, prefix?: string) {
    if (isObject(input)) {
      for (const [key, propertyValue] of Object.entries<any>(input)) {
        let qualifiedKey = key;
        if (prefix) {
          qualifiedKey = prefix + '.' + key;
        }
        if (isObject(propertyValue)) {
          flat(propertyValue, qualifiedKey);
        } else {
          value[qualifiedKey] = propertyValue;
        }
      }
    }
  }

  flat(inputValue);
  return value;
}

export function assembleObject(inputValue: { [key: string]: any }) {
  const value: any = {};
  for (const [key, propertyValue] of Object.entries<any>(inputValue)) {
    if (propertyValue) {
      if (key.indexOf('.') !== -1) {
        let obj = value;
        const parts = (<string>key).split('.');
        for (let i = 0; i < parts.length; i++) {
          const part = parts[i];
          if (i < parts.length - 1) {
            if (obj[part] == null) {
              obj[part] = {};
            }
            obj = obj[part];
          } else {
            obj[part] = propertyValue;
          }
        }
      } else {
        value[key] = propertyValue;
      }
    }
  }
  return value;
}

export function endsWith(suffixes: string[], text: string) {
  for (const suffix of suffixes) {
    if (text.endsWith(suffix)) {
      return true;
    }
  }
  return false;
}

export function equals<T = any>(array1: T[], array2: T[], predicate: (t1: T, t2: T) => boolean = (t1, t2) => t1 === t2) {
  // 两个都为null 或者 undefined
  if (!Boolean(array1) && !Boolean(array2)) {
    return true;
  }

  if (array1 && array2) {
    if (array1.length !== array2.length) {
      return false;
    }

    let isEquals = true;
    for (let i = 0; i < array1.length; i++) {
      isEquals = isEquals && predicate(array1[i], array2[i]);
      if (!isEquals) {
        return false;
      }
    }
    return true;
  }
  return false;


}

export function includesAll(array: string[], includeItems: string[]) {
  if (includeItems.length > 0) {
    for (let i = 0; i < includeItems.length; i++) {
      if (!array.includes(includeItems[i])) {
        return false;
      }
    }
  }
  return true;
}


