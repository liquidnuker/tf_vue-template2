<template>
  <div id="app-component2">
    <!-- <img src="./assets/img.png"> -->
    <h1>{{ state.message1 }}</h1>
    <h2>component-h2</h2>
  </div>
</template>

<script>
  export default {
    name: 'app-component2',
    data () {
      return {
        debug: true,
        state: {
          message1: "componentmessage1",
          message2: "componentmessage2"
        }
      }
    }
  }
</script>
