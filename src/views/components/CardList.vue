<template lang='pug'>
  .cardList
    p message
    Card(v-for="n in 4" :key="n" class="Card" :name='name' :message='message')
</template>

<script lang="ts">
import Vue from 'vue'
import Card from '@/views/components/Card.vue'

export type DataType = { name: Array<string>; message: Array<string> };
export default Vue.extend({
  name: 'CardList',
  components: {
    Card
  },
  data (): DataType {
    return {
      name: ['佐藤', '加藤', '田中', '鈴木'],
      message: ['message1', 'message2', 'message3', 'message4']
    }
  },
  props: ['card'],
  created () {
    console.log(this.card)
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
