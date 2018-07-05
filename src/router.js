import Vue from 'vue'
import Router from 'vue-router'
import Films from './views/Films.vue'
import Series from './views/Series.vue'
import MovieInfo from './views/MovieInfo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // дефолтная страница при откыртии сайта
      path: '/films',
      name: 'Films',
      component: Films
    },
    {
      // страница с отображением сериалов
      path: '/series',
      name: 'Series',
      component: Series
    },
    {
      // страница с подробным описанием фильма по клику на Блок Фильма
      path: '/info',
      name: 'MovieInfo',
      component: MovieInfo
    }
  ]
})
