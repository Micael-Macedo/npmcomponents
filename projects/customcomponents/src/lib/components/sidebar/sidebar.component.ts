import { Component, Input } from '@angular/core';
import { NavItem, UserInfo } from '../../models/Nav.model';

@Component({
  selector: 'ngx-custom-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  standalone: true
})
export class SidebarComponent {
  @Input() APP_NAME: string = ""
  @Input() APP_LOGO: string = ""
  @Input() USER_ICON: string = ""
  @Input() PAGE: string = ""

  @Input() SHOW_USER_ICON: boolean = false
  @Input() SHOW_FOOTER: boolean = false
  @Input() SHOW_APP: boolean = false
  @Input() SHOW_TOGGLE_BUTTON = false
  
  @Input() NAV_ITENS: NavItem[] = []
  @Input() UserInfo?: UserInfo

  @Input() config?: string
  @Input() help?: string
  @Input() current_route?: string

  expandMenu: boolean = true

  toggleMenu(){
    this.expandMenu = !this.expandMenu
  }
}
