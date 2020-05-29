<template lang='pug'>
  .card
    #name {{ name }}
    #message {{ message }}
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Card',
  props: ['name', 'message']
})
</script>

<style lang="scss" scoped>
  .card {
    height: 150px;
    border: 1px solid rgb(209, 209, 209);
    margin-bottom: 20px;
    padding: 0 30px;
    #name {
      height: 30%;
    }
    #message {
      height: 70%;
    }
  }
</style>
