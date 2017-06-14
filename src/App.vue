<template>
  <div id="app" v-loading.fullscreen.lock="loading">
    <SourceList></SourceList>
    <NewsList></NewsList>
  </div>
</template>

<script>
import SourceList from './components/SourceList'
import NewsList from './components/NewsList'

export default {
  name: 'app',
  created(){
  	this.fetchSource();
  },
  data(){
  	return{
  		loading:false
  	}
  },
  components: {
    SourceList,
    NewsList,
  },
  methods:{
  	fetchSource(){
  	   this.loading = true;
  	   this.axios.get('https://newsapi.org/v1/sources?language=en').then((response) => {
       let data = response.data;
       console.log(response.data);
       let hash = {};
       let sources = [];
       if(data.status === 'ok'){
        data.sources.forEach(function(e){
           let originalCat = e.category;
           let category = originalCat.charAt(0).toUpperCase() + originalCat.slice(1);
           hash[category] ? hash[category].options.push(e) : (hash[category] = {label:category,options:[e]});
        });
        console.log(hash);
        for(let e in hash){
          sources.push(hash[e]);
        }
        this.$store.dispatch('update_sources',sources);
        this.loading = false;
       }
    });
  	}
  }
}
</script>

<style>

</style>
