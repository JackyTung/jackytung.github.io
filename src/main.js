import Vue from 'vue';
import App from './components/App.vue';

// Start up our app
(() =>
  new Vue({
    el: '#app',
    render: h => h(App),
  }))();
