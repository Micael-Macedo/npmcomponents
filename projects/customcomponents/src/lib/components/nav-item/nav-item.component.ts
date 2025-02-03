import { NavService } from './../../services/nav.service';
import { Component, inject, Input, OnInit } from '@angular/core';
import { NavItem } from '../../models/Nav.model';

@Component({
  selector: 'lib-nav-item',
  imports: [],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.scss',
  standalone: true
})
export class NavItemComponent implements OnInit{
  selected: boolean = false;
  hideContent: boolean = false
  navService:NavService = inject(NavService)

  @Input() navItem!: NavItem

  checkRoute(route: string): void{
    if(route == this.navItem.route){
      this.selected = true
    }else{
      this.selected = false
    }
  }

  ngOnInit(): void {
    this.navService.emitCurrentRoute.subscribe(
      (route) => {
        this.checkRoute(route)
      }
    )
    this.navService.emitStatusMenu.subscribe(
      statusMenu => this.hideContent = !statusMenu
    )
    this.checkRoute(this.navService.getCurrentRoute())
  }

}
