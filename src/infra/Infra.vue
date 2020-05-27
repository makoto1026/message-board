<script lang="ts">

import Article from '@/models/model.vue';

export default class APIArticleRepository implements ArticleRepository {
  async getArticles(): Promise<Article[]> {
    …
  }

  async createArticle(article: Article): Promise<Article> {
    …
  }
}

</script>