import Vue from 'vue'
import store from './store.vue'
import component1 from './component1.vue'

const renderStore = new Vue({
  el: '#app-template',
  render: h => h(store)
});

const renderComponent = new Vue({
  el: '#app-template2',
  render: h => h(component1)
});


