<template>
  <div class="book-card">
    <img :src="book.cover" :alt="book.title" class="book-cover">
    <div class="book-details">
      <h3>{{ book.title }}</h3>
      <p class="author">{{ book.author }}</p>
      <div class="genres">
        <span v-for="genre in book.genre" :key="genre" class="genre-tag">
          {{ genre }}
        </span>
      </div>
      <router-link :to="{ name: 'book', params: { id: book.id } }">
        Подробнее
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.genre-tag {
  display: inline-block;
  background: #f0f0f0;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 12px;
  margin-right: 5px;
  margin-bottom: 5px;
}

.genres {
  margin: 10px 0;
}
</style>