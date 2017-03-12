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
