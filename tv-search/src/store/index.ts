import { createStore } from 'vuex'
import { SeriesStore } from './modules/SeriesStore'

const store = createStore({
  modules: {
    SeriesStore
  }
})

export default store
