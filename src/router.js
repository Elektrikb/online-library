import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Book from './pages/Book.vue'
import About from './pages/About.vue'
import Contacts from './pages/Contacts.vue'

const routes = [
  { 
    path: '/', 
    component: Home,
    name: 'home'
  },
  { 
    path: '/book/:id', 
    component: Book,
    name: 'book',
    props: true // Это позволит передавать id как props
  },
  { 
    path: '/about', 
    component: About,
    name: 'about'
  },
  { 
    path: '/contacts', 
    component: Contacts,
    name: 'contacts'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router