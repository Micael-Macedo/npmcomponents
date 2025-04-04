import { NavService } from './../../services/nav.service';
import { Component, inject, Input } from '@angular/core';
import { NavItem, NavMenu, SearchInfo, UserInfo } from '../../models/Nav.model';
import { NavItemComponent } from "../nav-item/nav-item.component";
import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'ngx-custom-sidebar',
  imports: [NavItemComponent, SearchComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  standalone: true
})
export class SidebarComponent {
  @Input() APP_NAME: string = ""
  @Input() APP_LOGO: string = ""
  @Input() USER_ICON: string = ""
  @Input() PAGE: string = ""
  @Input() SEARCH_INFO: SearchInfo = {placeholder: "Search", resultRoute: "/search", img: ""}

  @Input() SHOW_USER_ICON: boolean = false
  @Input() SHOW_FOOTER: boolean = false
  @Input() SHOW_APP: boolean = false
  @Input() SHOW_TOGGLE_BUTTON = false

  @Input() NAV_MENU!: NavMenu[]

  @Input() UserInfo?: UserInfo
  @Input() config: NavItem = {name: "config", route: "/config"}
  @Input() help: NavItem = {name: "help", route: "/help"}

  private navService: NavService = inject(NavService)

  @Input() set current_route(route: string){
    this.navService.setRouteUrl(route)
  }

  expandMenu: boolean = true

  toggleMenu(){
    this.expandMenu = !this.expandMenu
    this.navService.expandMenu(this.expandMenu)
  }

}
