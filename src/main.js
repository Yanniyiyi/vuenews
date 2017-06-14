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
		selectedSource:null,
		sources:null
	},
	mutations:{
		updateSelectedSource(state,newSource){
			state.selectedSource = newSource;
		},
		updateSources(state,sources){
			state.sources = sources;
		}
	},
	actions:{
		update_selected_source(store,newSource){
			store.commit('updateSource',newSource);
		},
		update_sources(store,sources){
			store.commit('updateSources',sources);
		}
	}
})

new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
