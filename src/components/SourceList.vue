<template>
  <el-row :gutter="20">
   <el-col :span="10" style="margin-top: 10px" :offset='7'>
    <el-form :inline="true">
      <el-form-item label="News sources">
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
      </el-form-item>
      <el-form-item>
        <el-tooltip class="item" effect="light" placement="bottom-start" v-if="selectedSource">
           <div slot="content">{{ selectedSource.description }}</div>
           <el-button type="primary"><a v-bind:href="selectedSource.url" target="_blank">Go to {{ selectedSource.name }}</a></el-button>
        </el-tooltip>
      </el-form-item>
    </el-form>
     </el-col>
 </el-row>  
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
      this.$store.dispatch('update_selected_source',this.selectedSource);
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
