import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import store from './store';
import albums from './components/albums';
import vuetify from './plugins/vuetify';

Vue.use(VueAxios, axios);
Vue.use(VueRouter);

Vue.config.productionTip = false
const MODE = process.env.VUE_APP_MODE

const routes = [
  { path: '/', redirect: '/albums' },
  { path: '/albums', name: 'albums', component: albums, meta: { title: 'ALBUMS' + '-' + MODE }, props: true },

]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')