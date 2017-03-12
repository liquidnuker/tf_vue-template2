<template>
  <div id="app-component">
    <!-- <img src="./assets/img.png"> -->
    <h1>{{ msg }}</h1>
    <h2>app-component-h2</h2>
  </div>
</template>
<script>
  export default {
    name: 'app-component',
    data () {
      return {
        msg: 'app-component-msg'
      }
    }
  }
</script>
<style>
  #app-component {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>