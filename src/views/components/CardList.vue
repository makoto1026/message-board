<template lang='pug'>
  .cardList
    p message
    Card(v-for="n in 4" :key="n" class="Card" :name='name' :message='message')
</template>

<script lang="ts">
import Vue from 'vue'
import Card from '@/views/components/Card.vue'

export default Vue.extend({
  props: {
    name: String,
    message: String
  },
  components: {
    Card
  }
})
</script>

<style lang="scss">
  .cardList {
    padding: 0 50px;
    text-align: left;
    p {
      font-size: 30px;
      font-weight: 600;
    }
  }
</style>
