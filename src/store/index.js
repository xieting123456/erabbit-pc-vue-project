import {
  createStore
} from 'vuex'

const moduleA = {
  namespaced: true,
  state: {
    username: '张三'
  }
}

const moduleB = {}

export default createStore({

  modules: {
    moduleA,
    moduleB
  }
})
