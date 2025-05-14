<!-- 
Name: Mthokozisi
Surname: Duba
Student Number: 24690059 
-->

<script setup>
import BlogCard from '~/components/BlogCard.vue'
import { ref, watch } from 'vue'
import { useBlogStore } from '~/stores/blog'

const blogStore = useBlogStore()
const search = ref("")
const blogs = ref([])

watch(
  () => blogStore.blogs,
  (newBlogs) => {
    blogs.value = newBlogs
  },
  { immediate: true }
)

const searchBlogs = () => {
  if (!search.value) {
    blogs.value = blogStore.blogs
  } else {
    blogs.value = blogStore.blogs.filter(blog =>
      (blog.title && blog.title.toLowerCase().includes(search.value.toLowerCase())) ||
      (blog.authorName && blog.authorName.toLowerCase().includes(search.value.toLowerCase())) ||
      (blog.content && blog.content.toLowerCase().includes(search.value.toLowerCase()))
    )
  }
}

watch(search, searchBlogs)
</script>

<template>
  <div class="container">
    <h1>Search Blogs</h1>
    <input v-model="search" placeholder="search blog" class="search-input" />
    <button @click="searchBlogs">Search</button>
    <BlogCard v-for="blog in blogs" :key="blog.title" :blog="blog" />
  </div>
</template>

<style scoped>
.container {
  max-width: 40em;
  margin: 2rem auto;
  padding: 1rem;
}
.search-input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
}
</style>
