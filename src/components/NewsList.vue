<template>
  <el-row :gutter="20" v-loading.fullscreen.lock="loading">
    <el-col :span="8" v-for="news in newsList" :key="news.title">
      <el-card :body-style="{ padding: '5px'}" style="height:500px;margin-bottom:5px" >
        <img v-bind:src="[news.urlToImage ? news.urlToImage : 'http://via.placeholder.com/350x300?text=No+image+available' ]" style="width:100%;height:300px;">
        <div style="padding: 14px;">
          <span>{{ news.title }}</span>
          <div v-if="news.description" class="wrapper">
            <p class="description" >{{ news.description }}</p>
          </div>
          <div class="bottom clearfix">
            <time class="time">{{ news.publishedAt }}</time>
            <el-button type="text" class="button" ><a v-bind:href="news.url" target="_blank">View</a></el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'newslist',
  data(){
  	return{
  		newsList:[],
      loading:false
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
        this.loading = true;
  			console.log('fetching...');
  			this.axios.get('https://newsapi.org/v1/articles?source=' + this.source.id + '&apiKey=5ba4f0af181a460eb1150684b3f96114').then((response) => {
  				console.log(response);
	       		let data = response.data;
	       		if(data.status === 'ok')
	       		{
	       			this.newsList = data.articles;
	       		}
            this.loading = false;   
       		});
  		}
  		
  	}
  }

}
</script>

<style scoped>
 .wrapper {
  padding: 5px;
  background: #F9FAFC;
  max-width: 400px;
  margin: 10px auto;
  border-radius: 4px;
}
  
.description {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

 a{
  text-decoration: none;
 }
 .time {
  font-size: 13px;
  color: #999;
  }

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
</style>
