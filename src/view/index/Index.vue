<template>
    <div>
      <index-head></index-head>
      <index-search></index-search>
      <index-container></index-container>
      <index-car></index-car>
    </div>
</template>

<script>
    import IndexHead from './components/Head'
    import IndexSearch from './components/Search'
    import IndexContainer from './components/Container'
    import IndexCar from './components/Car'
    export default {
        name: "Index",
        components:{
          IndexHead,
          IndexSearch,
          IndexContainer,
          IndexCar
        }
    }
</script>

<style scoped>

</style>
