import Vue from 'vue'
import App from './views/App/App.vue'
import { store } from './store/store';
import VueRouter from 'vue-router'
import Routes from './routes/routes';
Vue.use(VueRouter)

const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});

/**
 * Import Bulma scss
 */
require('@/assets/bulma.scss');
require('@/styles/dark-theme.scss');


// Default config
Vue.config.productionTip = false

new Vue({
    store: store,
    router: router,
    render: h => h(App),
}).$mount('#app')