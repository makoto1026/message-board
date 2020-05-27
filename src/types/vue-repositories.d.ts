import Vue from 'vue'
import ArticleRepository from '@/repository/ArticleRepository.vue'

new Vue({
});

type Repositories = {
  ArticleRepository: ArticleRepository;
};

declare module "vue/types/vue" {
  interface Vue {
    $repos: Repositories;
  }
}
