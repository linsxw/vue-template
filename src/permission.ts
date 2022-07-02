import Nprogress from 'nprogress'
import router from '@/router'

import 'nprogress/nprogress.css'

router.beforeEach((to, from, next) => {
  Nprogress.start()
  next()
})

router.afterEach(() => {
  Nprogress.done()
})
