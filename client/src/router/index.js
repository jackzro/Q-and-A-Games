import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Room from '../views/Room.vue';
import Game from '../views/Game.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/room',
    name: 'Room',
    component: Room,
    props: true,
  },
  {
    path: '/game',
    name: 'Game',
    component: Game,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
