<!-- 
Name: Mthokozisi
Surname: Duba
Student Number: 24690059 
-->

<script setup>
  import { ref, computed, onMounted } from 'vue'
  import { useBlogStore } from '~/stores/blog'
  import BlogCard from '~/components/BlogCard.vue'

  const blogStore = useBlogStore()

  const blogs = computed(() => Array.isArray(blogStore.blogs) ? blogStore.blogs : [])
  const selectedCategory = ref('all')
  const categories = computed(() => {
    const category = blogs.value.map(b => b.category)
    return ['all', ...new Set(category)]
  })
  
  const filteredBlogs = computed(() => {
    if (selectedCategory.value === 'all') return blogs.value
    return blogs.value.filter(b => b.category === selectedCategory.value)
  })

  onMounted(async () => {
    await blogStore.fetchBlogs();
  })
  console.log('Blogs:', blogs.value)
</script>

<template>
  <div class="container">
    <h1> Home</h1>
    <div class="filter-bar">
      <label for="category">Filter category:</label>
      <select id="category" v-model="selectedCategory">
        <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
      </select>
    </div>
    <BlogCard v-for="blog in filteredBlogs" :key="blog.title" :blog="blog" />
  </div>
</template>

<style scoped>
.container {
  max-width: 40em;
  margin: 2rem auto;
  padding: 1rem;
}
.filter-bar {
  margin-bottom: 1.5em;
  display: flex;
  align-items: center;
  gap: 1em;
}
select {
  padding: 0.3em 0.7em;
  border-radius: 4px;
  border: 1px solid #ccc;
}
</style>
