import Vue from 'vue';
import App from './App';
import '@assets/style/reset.scss';

new Vue({
  el: '#app',
  components: {
    App,
  },
  render(h) {
    return h('app');
  },
});
