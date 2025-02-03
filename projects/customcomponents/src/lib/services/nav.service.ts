import { EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  constructor() { }

  emitStatusMenu = new EventEmitter<boolean>()
  emitCurrentRoute = new EventEmitter<string>()
  currentRoute: string = ""


  expandMenu(statusMenu: boolean){
    this.emitStatusMenu.emit(statusMenu)
  }

  setRouteUrl(route: string){
    this.currentRoute = route
    this.emitCurrentRoute.emit(route)
  }

  getCurrentRoute(){
    return this.currentRoute
  }

}
