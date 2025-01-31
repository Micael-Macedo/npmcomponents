export interface NavItem{
  img?: string,
  name: string,
  route: string
}
export interface UserInfo{
  img: string
  name: string
  email: string
}
export interface NavMenu{
  title: string
  navItens: NavItem[]
}
