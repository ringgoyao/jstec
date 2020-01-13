import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import JstecUI from '../../jstec-ui/packages'
Vue.use(JstecUI)


Vue.config.productionTip = false



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')