import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // 自定义meta
    xxx:string
  }
}