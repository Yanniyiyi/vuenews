<template>
  <div>
  	<div v-for="news in newsList">
  		<p>Author: {{ news.author ? news.author : 'Unknown'}}</p>
  		<a v-bind:href='news.url'> {{ news.title }}</a> 
  		<p>{{ news.description }}</p>
  		<img v-bind:src="news.urlToImage" alt="">
  		<p>{{ news.publishedAt }}</p>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'newslist',
  data(){
  	return{
  		newsList:[]
  	}
  },
  created(){
  	this.fetchNews();
  },
  watch:{
  	'source':'fetchNews'
  },
  computed:{
  	source(){
  		return this.$store.state.selectedSource;
  	}
  },
  methods:{
  	fetchNews(){
  		console.log('fetch invoked...');
  		if(this.source)
  		{
  			console.log('fetching...');
  			this.axios.get('https://newsapi.org/v1/articles?source=' + this.source.id + '&apiKey=5ba4f0af181a460eb1150684b3f96114').then((response) => {
  				console.log(response);
	       		let data = response.data;
	       		if(data.status === 'ok')
	       		{
	       			this.newsList = data.articles;
	       		}   
       		});
  		}
  		
  	}
  }

}
</script>

<style>

</style>
