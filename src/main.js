// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import ElementUI from 'element-plus/es/index'
// import 'element-plus/dist/index.css'
// // import 'element-plus/lib/theme-chalk/index.css';
// import formCreate from '@form-create/element-ui'
// import FcDesigner from '@form-create/designer'
// import ElementPlus from 'element-plus';
//
// createApp(App).use(ElementUI).use(ElementPlus).use(formCreate).use(FcDesigner).use(router).mount('#app')
import router from './router'
import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'  //如果需要axios，请引入

import ElementPlus from 'element-plus'  //引入element-plus库
import VForm3 from 'vform3-builds'  //引入VForm3库


import 'element-plus/dist/index.css'  //引入element-plus样式
import 'vform3-builds/dist/designer.style.css'  //引入VForm3样式
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
const app = createApp(App)
app.use(ElementPlus)  //全局注册element-plus
app.use(VForm3)  //全局注册VForm3(同时注册了v-form-designe、v-form-render等组件)
/* 注意：如果你的项目中有使用axios，请用下面一行代码将全局axios复位为你的axios！！ */
window.axios = axios
app.use(router)
app.use(Avue);

app.mount('#app')
