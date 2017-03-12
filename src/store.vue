<template>
  <div id="app-component">
    <!-- <img src="./assets/img.png"> -->
    <h1>{{ state.message1 }}</h1>
    <h2>store-h2</h2>
  </div>
</template>

<script>
  export default {
    name: 'app-component',
    data () {
      return {
        debug: true,
        state: {
          message1: "storemessage1",
          message2: "storemessage2"
        }
      }
    }
  }
</script>
