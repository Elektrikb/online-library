const books = [
  {
    id: 1,
    title: 'Война и мир',
    author: 'Лев Толстой',
    cover: require('@/assets/book-covers/voyna-i-mir.jpg'),
    description: 'Роман-эпопея, описывающий русское общество в эпоху войн против Наполеона.',
    year: 1869,
    pages: 1225,
    genre: ['классика', 'исторический', 'роман'],
    rating: 4.8
  },
  {
    id: 2,
    title: 'Преступление и наказание',
    author: 'Фёдор Достоевский',
    cover: require('@/assets/book-covers/prestuplenie-i-nakazanie.jpg'),
    description: 'Роман о моральных последствиях преступления, совершённого бедным студентом.',
    year: 1866,
    pages: 672,
    genre: ['классика', 'психологический', 'философский'],
    rating: 4.7
  },
  {
    id: 3,
    title: 'Мастер и Маргарита',
    author: 'Михаил Булгаков',
    cover: require('@/assets/book-covers/master-i-margarita.jpg'),
    description: 'Мистический роман, сочетающий сатиру на советскую действительность с философскими размышлениями.',
    year: 1967,
    pages: 384,
    genre: ['классика', 'мистика', 'философский', 'роман'],
    rating: 4.9
  }
];

// Автоматически собираем все жанры из книг
const allGenres = Array.from(
  new Set(books.flatMap(book => book.genre))
);
allGenres.unshift('все'); // Добавляем вариант "все" первым

export default {
  getBooks() {
    return books;
  },
  getBook(id) {
    return books.find(book => book.id === parseInt(id));
  },
  getGenres() {
    return allGenres;
  },
  searchBooks(query) {
    const q = query.toLowerCase();
    return books.filter(book => 
      book.title.toLowerCase().includes(q) ||
      book.author.toLowerCase().includes(q)
    );
  },
  getBooksByGenre(genre) {
    if (genre === 'все') return books;
    return books.filter(book => book.genre.includes(genre));
  }
};