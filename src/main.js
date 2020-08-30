import Vue from 'vue'
import App from './components/App/App.vue'


/**
 * =============================================
 * Import Boostrap vue
 */
require('@/assets/bulma.scss');

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')