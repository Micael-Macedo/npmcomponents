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
  toggleMenu: boolean = false
  navService:NavService = inject(NavService)

  @Input() navItem!: NavItem


  ngOnInit(): void {
    this.navService.currentRoute.subscribe(
      route => route == this.navItem.route ? this.selected = true : this.selected = false
    )
    this.navService.statusMenu.subscribe(
      statusMenu => this.toggleMenu = statusMenu
    )
  }

}
