import Vue from 'vue'
import App from './components/App/App.vue'
import { store } from './store/store';

/**
 * Import Bulma scss
 */
require('@/assets/bulma.scss');


// Default config
Vue.config.productionTip = false

new Vue({
    store: store,
    render: h => h(App),
}).$mount('#app')