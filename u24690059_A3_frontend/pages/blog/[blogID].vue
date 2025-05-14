<!-- 
Name: Mthokozisi
Surname: Duba
Student Number: 24690059 
-->

<script setup>
  import { useRoute } from 'vue-router'
  import { useBlogStore } from '~/stores/blog'

  const route = useRoute()
  const blogStore = useBlogStore()

  const blogID = route.params.blogID
  const blog = blogStore.blogs.find(b => String(b.id) === String(blogID))
</script>

<template>
  <div class="container" v-if="blog">
    <h1>{{ blog.title }}</h1>
    <p class="author">By {{ blog.author }}</p>
    <p>{{ blog.datePublished }}</p>
    <div class="content">{{ blog.content }}</div>
  </div>
  <div v-else class="container">
    <p>Blog not found.</p>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
}
</style>
