// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Header from './components/Header';
import Lun from './components/Lun';
import FilmList from './components/FilmList';
Vue.component(Header.name, Header);
Vue.component(Lun.name, Lun);
Vue.component(FilmList.name, FilmList);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
