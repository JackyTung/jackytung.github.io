import Vue from 'vue';
import Router from 'vue-router';
import App from './components/App.vue';
import routes from './routes.js';

// Install plugins
Vue.use(Router);

const router = new Router({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

// Start up our app
(() =>
  new Vue({
    el: '#app',
    router,
    render: h => h(App),
  }))();
