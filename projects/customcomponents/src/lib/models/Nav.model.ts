export interface NavItem{
  img?: string,
  name: string,
  route: string
}
export interface UserInfo{
  img: string
  name: string
  email: string
  logoutRoute: string
}
export interface SearchInfo{
  img: string
  placeholder: string
  resultRoute: string
}
export interface NavMenu{
  title: string
  navItens: NavItem[]
}
