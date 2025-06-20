<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home">
    <h1>Книжная полка</h1>
    
    <BookSearch 
      @search="handleSearch"
      @genre-change="handleGenreChange"
    />
    
    <div v-if="filteredBooks.length" class="books-grid">
      <BookCard 
        v-for="book in filteredBooks" 
        :key="book.id" 
        :book="book" 
      />
    </div>
    
    <div v-else class="no-results">
      Книги не найдены. Попробуйте изменить параметры поиска.
    </div>

    <select v-model="sortBy" @change="applyFilters">
      <option value="title">По названию</option>
      <option value="author">По автору</option>
      <option value="year">По году</option>
      <option value="rating">По рейтингу</option>
    </select>
    
  </div>
</template>

<script>
import BookCard from '../components/BookCard.vue'
import BookSearch from '../components/BookSearch.vue'
import store from '../store'

export default {
  components: { BookCard, BookSearch },
  data() {
    return {
      allBooks: store.getBooks(),
      filteredBooks: store.getBooks(),
      currentSearch: '',
      currentGenre: 'все'
    }
  },
  methods: {
    handleSearch(query) {
      this.currentSearch = query
      this.applyFilters()
    },
    handleGenreChange(genre) {
      this.currentGenre = genre
      this.applyFilters()
    },
    
    applyFilters() {
      let result = this.allBooks
      
      // Фильтр по жанру
      if (this.currentGenre !== 'все') {
        result = store.getBooksByGenre(this.currentGenre)
      }
      
      // Фильтр по поиску
      if (this.currentSearch) {
        result = store.searchBooks(this.currentSearch).filter(book => 
          result.some(b => b.id === book.id))
      }

      this.filteredBooks.sort((a, b) => {
        if (this.sortBy === 'title') return a.title.localeCompare(b.title)
        if (this.sortBy === 'author') return a.author.localeCompare(b.author)
        if (this.sortBy === 'year') return b.year - a.year
        if (this.sortBy === 'rating') return b.rating - a.rating
        return 0
      })
      
      this.filteredBooks = result
    }
  }
}
</script>

<style scoped>
.books-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.no-results {
  padding: 40px;
  text-align: center;
  color: #666;
  font-size: 18px;
}
</style>