import Vue from 'vue';
import App from './App';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import '@assets/style/reset';
import '@assets/style/iconfont';
import 'swiper/dist/css/swiper';

Vue.use(VueAwesomeSwiper);

new Vue({
  el: '#app',
  components: {
    App,
  },
  render(h) {
    return h('app');
  },
});
