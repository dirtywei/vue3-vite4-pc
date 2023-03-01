export function createPageLoadingGuard(router) {
  router.beforeEach(() => {
    window.$loadingBar?.start()
  })

  router.afterEach(() => {
    setTimeout(() => {
      window.$loadingBar?.finish()
    }, 10)
  })

  router.onError(() => {
    window.$loadingBar?.error()
  })
}
