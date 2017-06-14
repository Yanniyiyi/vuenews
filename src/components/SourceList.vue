<template>
  <div>
   <el-select v-model="selectedSource" placeholder="Please select a source">
    <el-option-group
      v-for="source in sources"
      :key="source.label"
      :label="source.label">
      <el-option
        v-for="item in source.options"
        :key="item.name"
        :label="item.name"
        :value="item">
      </el-option>
    </el-option-group>
  </el-select>

  <el-button type="primary" v-if="selectedSource"><a v-bind:href="selectedSource.url">Go to {{ selectedSource.name }}</a></el-button>

  
  </div>
  
</template>

<script>
export default {
  name: 'sourcelist',
  watch:{
    'selectedSource':'changeSource'
  },
  created(){
    this.axios.get('https://newsapi.org/v1/sources?language=en').then((response) => {
       let data = response.data;
       console.log(response.data);
       let hash = {};
       let result = [];
       if(data.status === 'ok'){
        data.sources.forEach(function(e){
           let originalCat = e.category;
           let category = originalCat.charAt(0).toUpperCase() + originalCat.slice(1);
           hash[category] ? hash[category].options.push(e) : (hash[category] = {label:category,options:[e]});
        });
        console.log(hash);
        for(let e in hash){
          result.push(hash[e]);
        }
        console.log(result);
        this.sources = result;
       }
    });
  },
  data(){
    return{
      selectedSource:null,
      sources:{},
    }
  },
  methods:{
    changeSource(){
      this.$store.dispatch('update_source',this.selectedSource);
    }
  }

}
</script>

<style scoped>
  a{
    text-decoration: none;
    color:white;
  }
</style>
