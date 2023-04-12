export const handleMatched = (to) => {
  if (to.matched && to.matched.length > 2) {
    for (let i = 0; i < to.matched.length; i++) {
      const element = to.matched[i]
      if (element.components.default.name === 'Blank') {
        to.matched.splice(i, 1)
      }
    }
  }
}
