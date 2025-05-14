<!-- 
Name: Mthokozisi
Surname: Duba
Student Number: 24690059 
-->

<script setup>
    const props = defineProps({
        blog: Object
    })

</script>

<template>
    <NuxtLink :to="`/blog/${props.blog.id}`" class="blog-card">
        <h2>{{ props.blog.title }}</h2>
        <p class="author">By {{ props.blog.author }}</p>
        <p>{{ props.blog.datePublished }}</p>
        <p class="snippet">{{ props.blog.content.slice(0, 60) }}</p>
    </NuxtLink>
</template>

<style scoped>
.blog-card {
  display: block;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  transition: box-shadow 0.2s, transform 0.2s;
  text-decoration: none;
  color: inherit;
}
.blog-card:hover {
  box-shadow: 0 6px 24px rgba(25, 118, 210, 0.12);
  transform: translateY(-2px) scale(1.01);
}
.snippet {
  margin-top: 0.7em;
  color: #444;
  font-size: 1.05em;
  line-height: 1.5;
}
h2 {
  margin: 0 0 0.3em 0;
  font-size: 1.4em;
  font-weight: 700;
}
p {
  margin: 0.2em 0;
}
</style>
