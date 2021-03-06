// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
  preLoad: 1.3,
  error: 'http://via.placeholder.com/350x300?text=Can not load the image',
  loading: 'https://media.giphy.com/media/l0Iyj4HFL0BkzBqV2/giphy.gif',
  attempt: 1
})
Vue.use(Element)
Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
const store = new Vuex.Store({
	state:{
		selectedSource:null,
		sources:null,
		grid:true
	},
	mutations:{
		updateSelectedSource(state,newSource){
			state.selectedSource = newSource;
		},
		updateSources(state,sources){
			state.sources = sources;
		},
		changeLayout(state){
			state.grid = !state.grid;
		}
	},
	actions:{
		update_selected_source(store,newSource){
			store.commit('updateSelectedSource',newSource);
		},
		update_sources(store,sources){
			store.commit('updateSources',sources);
		},
		change_layout(store){
			store.commit('changeLayout');
		}
	}
})

new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
