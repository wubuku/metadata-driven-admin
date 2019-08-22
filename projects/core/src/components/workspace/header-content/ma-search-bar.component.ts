import {Component, OnDestroy, OnInit} from '@angular/core';
import {NzAutocompleteOptionComponent} from 'ng-zorro-antd';
import {Subject, Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {RouterService} from '../../../wrapper/router.service';
import {MenuService} from '../../../service/menu.service';
import {Menu} from '../../../model';

@Component({
  selector: 'ma-search-bar',
  templateUrl: 'ma-search-bar.component.html',
  styleUrls: ['ma-search-bar.component.less']
})
export class MaSearchBarComponent implements OnInit, OnDestroy {

  searchText: string;
  focusSearch = false;

  menusForSearch: Menu[];
  searchTerms = new Subject<string>();
  private un: Subscription;

  constructor(private menuService: MenuService, private routerService: RouterService) {
    this.un = this.menuService.getPermitMenus().subscribe((menus) => this.menusForSearch = menus);
  }


  ngOnInit(): void {
    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.menuService.search(term))
    ).subscribe(menus => this.menusForSearch = menus);
  }

  ngOnDestroy(): void {
    this.un.unsubscribe();
  }

  searchMenus() {
    this.searchTerms.next(this.searchText);
  }


  selectionChange(selectedOption: NzAutocompleteOptionComponent) {
    this.routerService.navigate(selectedOption.nzValue);
  }
}
