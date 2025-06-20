<template>
  <nav>
    <router-link to="/">Главная</router-link> |
    <router-link to="/about">О нас</router-link> |
    <router-link to="/contacts">Контакты</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
nav {
  padding: 20px 0;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>