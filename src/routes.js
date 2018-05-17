import Home from './components/Home/Home.vue';
const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  { path: '*', redirect: '/home' },
];

export default routes;