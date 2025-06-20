<template>
  <div class="book-search">
    <div class="search-box">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Поиск по названию или автору"
        @input="handleSearch"
      >
      <select v-model="selectedGenre" @change="handleGenreChange">
        <option v-for="genre in genres" :key="genre" :value="genre">
          {{ genre }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import store from '../store'

export default {
  data() {
    return {
      searchQuery: '',
      selectedGenre: 'все',
      genres: store.getGenres()
    }
  },
  methods: {
    handleSearch() {
      this.$emit('search', this.searchQuery)
    },
    handleGenreChange() {
      this.$emit('genre-change', this.selectedGenre)
    }
  }
}
</script>

<style scoped>
.book-search {
  margin: 20px 0;
}

.search-box {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

input {
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

select {
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  cursor: pointer;
}
</style>