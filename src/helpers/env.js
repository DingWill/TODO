import { OPEN_PAGES } from '../config'
export const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
export const isProduction = process.env.NODE_ENV === 'production'

export function isOpenPages(page) {
  return OPEN_PAGES.indexOf(page) > -1
}

export function isTodolistPage(pathname) {
  return (pathname || '').startsWith('/todolist')
}
