require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import store from "./store";
import routes from "./router";


Vue.component('navigation', require('./components/Navigation.vue').default);
Vue.component('lyrics',require('./components/Lyrics.vue').default);
Vue.component('tabs',require('./components/Tablature.vue').default);

const app = new Vue({
    el: "#app",
    store,
    router: new VueRouter(routes),
})