/**
 *
**/

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import { Plus, Message } from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'

import { createPinia } from "pinia";

const app = createApp(App)

app.use(createPinia())

app.component("Plus", Plus)
app.component("Message", Message)

app.use(router).use(ElementPlus).mount('#app')
