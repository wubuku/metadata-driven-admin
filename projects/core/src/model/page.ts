interface PageConstructorParameters {
  content?: any[];
  totalElements?: number;
  size?: number;
  number?: number;
}

export class Page implements PageConstructorParameters {

  content: any[];
  number: number;
  size: number;
  totalElements: number;


  constructor({size = 20, number = 0, content = [], totalElements = 0}: PageConstructorParameters) {
    this.size = size;
    this.number = number + 1;
    this.content = content;
    this.totalElements = totalElements || content.length;
  }

  toPageRequest(order?: Order) {
    let sort;
    if (order) {
      let dir = order.value;
      const property = order.key;
      if (dir === 'descend') {
        dir = 'desc';
      } else {
        dir = 'asc';
      }
      sort = `${property},${dir}`;
    }
    const page = this.number - 1;
    const size = this.size;

    if (sort) {
      return {sort, page, size};
    }

    return {page, size};
  }

}


export class DesignModePage extends Page {

  constructor(private innerPage: Page) {
    super({content: [{}], number: 1, size: 20, totalElements: 1});
  }

  restorePage() {
    return this.innerPage;
  }
}

export interface Order {
  key: string; // property
  value?: string; // direction  asc/desc
}

