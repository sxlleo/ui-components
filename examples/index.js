// import 'babel-polyfill';
import Vue from 'vue';
import App from './App.vue';
import Antd from 'axx-design-vue';
import '../src/styles/index.less';

Vue.use(Antd);

new Vue({
  el: '#app',
  render: h => h(App),
});
