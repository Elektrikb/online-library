<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div v-if="book" class="book-page">
    <div class="book-header">
      <img :src="book.cover" :alt="book.title" class="book-cover-large">
      <div class="book-meta">
        <h1>{{ book.title }}</h1>
        <h2>{{ book.author }}</h2>
        <p>Год издания: {{ book.year }}</p>
        <p>Количество страниц: {{ book.pages }}</p>
      </div>
    </div>
    <div class="book-description">
      <h3>Описание</h3>
      <p>{{ book.description }}</p>
    </div>
    <router-link to="/">Вернуться к списку</router-link>
  </div>
  <div v-else>
    Книга не найдена
  </div>
</template>

<script>
import store from '../store'

export default {
  data() {
    return {
      book: null
    }
  },
  created() {
    this.book = store.getBook(this.$route.params.id)
  }
}
</script>

<style scoped>
.book-page {
  max-width: 800px;
  margin: 0 auto;
}

.book-header {
  display: flex;
  margin-bottom: 30px;
}

.book-cover-large {
  width: 200px;
  height: auto;
  margin-right: 30px;
}

.book-meta {
  flex: 1;
}

.book-description {
  margin: 30px 0;
  line-height: 1.6;
}
</style>