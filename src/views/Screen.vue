<template lang="pug">
  #header
    p message bord
    CardList
</template>

<script lang="ts">
import Vue from 'vue'
import CardList from '@/views/components/CardList.vue'
import ArticleRepository from '@repository/ArticleRepository.vue'

export type DataType = {
  name: string;
  message: string;
};

Vue.extend({
  name: 'Screen',
  components: { CardList, ArticleRepository },

  data (): DataType {
    return {
      article: []
    }
  },
  mounted () {
    async function getArticles () {
      this.articles = await this.$repos.ArticleRepository.getArticles()
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
