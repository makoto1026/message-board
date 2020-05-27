<template lang="pug">
  .card
    #name {{ name }}
    #message {{ message }}
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    name: String,
    message: String
  }
})
</script>

<style lang="scss">
  .card {
    height: 70px;
    border: 1px solid black;
    margin-bottom: 20px;
    padding: 30px;
    #name {
      height: 30%;
    }
    #message {
      height: 70%;
      line-height: 70px;
    }
  }
</style>
