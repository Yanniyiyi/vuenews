// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'

Vue.use(Element)
Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
const store = new Vuex.Store({
	state:{
		selectedSource:null
	},
	mutations:{
		updateSource(state,newSource){
			state.selectedSource = newSource;
		}
	},
	actions:{
		update_source(store,newSource){
			store.commit('updateSource',newSource);
		}
	}
})

new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
