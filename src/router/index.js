import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MovieView from '../views/MovieView.vue';
import MovieDetails from '../views/MovieDetails.vue';
import StoreMovies from '../views/StoreMovies.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/movie',
    name: 'movie',
    component: MovieView,
  },
  {
    path: '/movie/:id',
    name: 'movieDetails',
    component: MovieDetails,
    props: true
  },
  {
    path: '/movie/store',
    name: 'movieStore',
    component: StoreMovies,
  },
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
