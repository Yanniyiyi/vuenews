<template>
  <div id="app">
    <SourceList></SourceList>
    <NewsList></NewsList>
  </div>
</template>

<script>
import SourceList from './components/SourceList'
import NewsList from './components/NewsList'

export default {
  name: 'app',
  components: {
    SourceList,
    NewsList
  }
}
</script>

<style>

</style>
