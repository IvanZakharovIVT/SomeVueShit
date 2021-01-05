import Vue from 'vue'
import App from './App.vue'
import './quasar'


Vue.config.productionTip=false
//Подключение роутера
import VueRouter from 'vue-router'
//Подключение компонентов для страниц
/*
import Graph from './components/HelloWorld.vue'
import p404 from './components/p404.vue'
import Auth from './components/Authorization.vue'
import Reg from './components/Registration.vue'
//Для каждой страницы определяются компоненты, ответственные за ее отображение
//В структуре данного проекта все такие страницы хранятся в директории pages

const router=new VueRouter({
	routes:[{path:'/404', name:'404', component:p404},
	{path:'/graph',component:Graph},
	{path:'/auth',component:Auth},
	{path:'/reg',component:Reg},]
})
*/
import router from './router'

//Подключение роутера к экземпляру Vue
Vue.use(VueRouter)

Vue.config.productionTip = false


//Локальное хранилище данных
//Используется для хранения состояния приложения
import Vuex from 'vuex'
//state описывает все поля данных, которые необходимо хранить
import state from './store/state'
//getters-функции, которые возвращают данные из state
import * as getters from './store/getters'
//mutations-функции изменения данных в state
import * as mutations from './store/mutations'
//actions-функции для доступа к mutations
import * as actions from './store/actions'
//Специальный плагин, который позволяет сохранять состояниев storage браузера,
//если его не использовать, то после обновления страницы хранилище данных очистится
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store=new Vuex.Store({
	namespaced: true,
	state,
	getters,
	mutations,
	actions,
	plugins: [createPersistedState()],
})


//Поддержка мультиязычности
import VueInternalization from 'vue-i18n'

Vue.use(VueInternalization)

//Все переводы хранятся в отдельном файле ru.js
//Для добавления новых переводов необходимо создать файл с переводами на других языках
//и поменять store.state.lang
import messages from './i18n/lang.js'
//console.log(store.state.lang)
const i18n = new VueInternalization ({
	locale:store.state.lang,
	messages,
})
Vue.config.lang='ru';


new Vue({
	i18n,
	router: router,
	store: store,
 	render: h=>h(App),
}).$mount('#app')
