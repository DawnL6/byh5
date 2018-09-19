import Vue from 'vue'
import App from './App.vue'
import router from './router'

import {
  NavBar,
  NoticeBar,
  DatetimePicker,
  Popup
} from 'vant';

Vue.use(NavBar)
  .use(NoticeBar)
  .use(DatetimePicker)
  .use(Popup)

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
