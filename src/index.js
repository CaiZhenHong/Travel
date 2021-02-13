import Vue from 'vue';
import App from './App';
import '@assets/style/reset';
import '@assets/style/iconfont';

new Vue({
  el: '#app',
  components: {
    App,
  },
  render(h) {
    return h('app');
  },
});
