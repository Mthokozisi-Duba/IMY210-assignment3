<!-- 
Name: Mthokozisi
Surname: Duba
Student Number: 24690059 
-->

<template>
  <div>
    <nav class="navbar">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/search">Search</NuxtLink>
    </nav>
    <NuxtPage />
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  gap: 1rem;
  background: #f0f0f0;
  padding: 1rem;
  margin-bottom: 2rem;
}
.navbar a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}
.navbar a.router-link-exact-active {
  color: #1976d2;
}
</style>
