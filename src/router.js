import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Game from './components/Game.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/game', component: Game },
    // { 
    //   path: '/quadrants/:id', 
    //   component: QuadrantDetail,
    //   children: [
    //     { path: 'list', component: NeighborhoodsList },
    //     { path: 'map', component: NeighborhoodsMap },
    //     { path: 'new', component: NewNeighborhood },
    //     { path: '', redirect: 'list' }
    //   ]
    // },
    { path: '*', redirect: '/' }
  ]
});