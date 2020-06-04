<template lang='pug'>
  .cardList
    p message
    Card.card(v-for="n, index in 3" :key="n" :name="name[index]" :message="message[index]" class="card")
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
      name: ['藤井', '玉浦', '早矢仕'],
      message: ['あああ', 'いいい', 'ううう']
    }
  },
  props: ['card']
})
</script>

<style lang="scss" scoped>
  .cardList {
    padding: 50px 200px;
    text-align: left;
    p {
      font-size: 30px;
      font-weight: 600;
    }
  }
</style>
