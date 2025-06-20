<template>
  <div id="app">
    <NavBar />
    <div class="container">
      <router-view></router-view> <!-- Важно: должен быть этот тег -->
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  components: { NavBar }
}
</script>

<style>
.container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>