const AppActions = {
  changeTitle: ({ commit }, data, cb, ecb) => {
    setTimeout(() => {
      commit('CHANGE_TITLE', data)
    }, 1000)
  }
}

module.exports = AppActions
