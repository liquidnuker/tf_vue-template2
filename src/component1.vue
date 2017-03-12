<template>
  <div id="app-component">
    <!-- <img src="./assets/img.png"> -->
    <h1>{{ state.message1 }}</h1>
    <h2>app-component-h2</h2>
  </div>
</template>

<script>
  export default {
    name: 'app-component',
    data () {
      return {
        debug: true,
        state: {
          message1: "xxxx1",
          message2: "xxxx2"
        }
      }
    }
  }
</script>
