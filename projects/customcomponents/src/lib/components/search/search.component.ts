import { Component, inject, Input } from '@angular/core';
import { SearchInfo } from '../../models/Nav.model';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'lib-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Input() searchInfo!: SearchInfo

  query:string = ""
  hideContent: boolean = false
  
  navService:NavService = inject(NavService)

  ngOnInit(): void {
    this.navService.emitStatusMenu.subscribe(
      statusMenu => this.hideContent = !statusMenu
    )
  }

  updateSearch(query: string){
    console.log(query)
    this.query = query
  }

  toggleSearch(){
    window.location.href = `${this.searchInfo.resultRoute}?${this.query}`
  }
}
