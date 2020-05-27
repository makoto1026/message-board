<script lang="ts">

import Article from '@/models/model.vue'

interface ArticleRepository {
  getArticles(): Promise<Article[]>;
  createArticle(article: Article): Promise<Article>;
}
</script>
