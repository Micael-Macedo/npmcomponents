import { EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  constructor() { }

  statusMenu = new EventEmitter<boolean>()
  currentRoute = new EventEmitter<string>()

  expandMenu(statusMenu: boolean){
    console.log(statusMenu)
    this.statusMenu.emit(statusMenu)
  }

  setRouteUrl(route: string){
    console.log(route)
    this.currentRoute.emit(route)
  }

}
