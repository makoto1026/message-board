<template lang='pug'>
  #header
    p message bord
    CardList
</template>

<script lang="ts">
import Vue from 'vue'
import CardList from '@/views/components/CardList.vue'

export type DataType = {card: { name: string; message: string}[]}
export default Vue.extend({
  name: 'Card-List',
  components: { CardList },
  data (): DataType {
    return {
      card: []
    }
  },
  mounted () {
    this.getCard()
  },
  methods: {
    async getCard () {
      this.card = await this.$repos.CardRepository.getCard()
    }
  }
})
</script>

<style lang="scss" scoped>
  * {
    margin: 0;
    box-sizing: border-box;
    font-feature-settings: "palt";
    outline:none;
  }
  #header {
    height: 60px;
    background-color: blue;
    font-weight: bold;
    text-align: center;
    line-height: 60px;
    p {
      color: white;
    }
  }
</style>
