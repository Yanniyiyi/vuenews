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

  <el-button type="primary" v-if="selectedSource"><a v-bind:href="selectedSource.url" target="_blank">Go to {{ selectedSource.name }}</a></el-button>

  
  </div>
  
</template>

<script>
export default {
  name: 'sourcelist',
  watch:{
    'selectedSource':'changeSource'
  },
  data(){
    return{
      selectedSource:null,
    }
  },
  computed:{
    sources(){
      return this.$store.state.sources;
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
