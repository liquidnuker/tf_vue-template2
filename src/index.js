import Vue from 'vue'
import store from './store.vue'

const renderStore = new Vue({
  el: '#app-template',
  render: h => h(store)
});


