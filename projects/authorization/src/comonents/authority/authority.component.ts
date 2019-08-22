import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthorityService, GrantedAuthority, LocalServerAuthorities} from '../../service/authority.service';
import {map} from 'rxjs/operators';
import {Menu, MenuService} from '../../ma-core-proxy';


export interface Node {
  value: string;
  label?: string;
  checked: boolean;
}

export class NodeList<N extends Node = Node> implements Node {
  value: string;
  label: string;
  collapsed: boolean;
  children: N[];

  get checked() {
    return this.children.every(item => item.checked);
  }

  set checked(checked: boolean) {
    this.children.forEach(item => item.checked = checked);
  }

  constructor(value: string, children: N[] = [], collapsed: boolean = false) {
    this.value = value;
    this.children = children;
  }
}

export class Leaf {
  value: string;
  label: string;
  checked: boolean;

  constructor(value: string, checked: boolean = false) {
    this.value = value;
    this.checked = checked;
  }
}


export interface AuthorityCheckedChangeEvent {
  checked: boolean;
  authorities: string[];
}

@Component({
  selector: 'ma-authority-tree',
  templateUrl: './authority.component.html',
  styles: [`
    .ma-checkbox {
      margin-right: 8px;
      display: inline-block;
      font-size: 14px;
      box-sizing: border-box;
    }

    .ma-server-level {
      margin-left: 16px;
    }

    .ma-group-level {
      margin-left: 37px;
      display: flex;
      flex-wrap: wrap;
    }

    .ma-collapser {
      display: inline-block;
      width: 21px;
      height: 21px;
      cursor: pointer;
    }

  `]
})
export class AuthorityComponent implements OnInit {

  @Input()
  checkedAuthorities: GrantedAuthority[];

  @Output()
  authorityCheckedChange = new EventEmitter<AuthorityCheckedChangeEvent>();

  authorityNodes: NodeList<NodeList<Leaf>>[];

  menuNodes: NodeList<Node>[];

  constructor(private authorityService: AuthorityService, private menuService: MenuService) {
  }


  ngOnInit(): void {

    this.authorityService.listAuthorities()
      .pipe(map(this.apiToNodes))
      .subscribe(nodes => this.authorityNodes = nodes);

    this.menuService.getAll()
      .pipe(map(this.menusToNodes))
      .subscribe(menus => this.menuNodes = menus);
  }

  apiToNodes = (serverAuthorities: LocalServerAuthorities) => {
    const checkedAuthorities = this.checkedAuthorities.map(item => item.authority);
    const nodes: NodeList<NodeList<Leaf>>[] = [];
    for (const serviceId of Object.keys(serverAuthorities)) {
      const serverLevelNode = new NodeList<NodeList<Leaf>>(serviceId);
      const group = serverAuthorities[serviceId];
      for (const groupId of Object.keys(group)) {
        const children = [];
        for (const authority of group[groupId]) {
          children.push(new Leaf(authority, checkedAuthorities.includes(authority)));
        }
        const groupLevelNode = new NodeList(groupId, children);
        serverLevelNode.children.push(groupLevelNode);
      }
      nodes.push(serverLevelNode);
    }
    console.log(nodes);
    return nodes;
  }

  menusToNodes = (menus: Menu[]) => {
    const nodes = [];
    const checkedAuthorities = this.checkedAuthorities.map(item => item.authority);
    for (const menu of menus) {
      let node;
      if (menu.children) {
        const children = this.menusToNodes(menu.children);
        node = new NodeList<Node>(menu.path, children);
      } else {
        const value = 'VIEW_' + menu.path;
        node = new Leaf(value, checkedAuthorities.includes(value));
      }
      node.label = menu.displayName;
      nodes.push(node);
    }
    return nodes;
  }


  toggleCollapsed(node: NodeList) {
    node.collapsed = !Boolean(node.collapsed);
  }

  emitCheckedChangeEvent = (node: Node) => {
    const event = {checked: node.checked, authorities: []};
    if (node instanceof NodeList) {
      for (const item of node.children) {
        if (item instanceof NodeList) {
          event.authorities.push(...item.children.map(e => e.value));
        } else {
          event.authorities.push(item.value);
        }
      }
    } else {
      event.authorities.push(node.value);
    }
    this.authorityCheckedChange.emit(event);
  }

  trackByFn = (index: number) => index;
}
