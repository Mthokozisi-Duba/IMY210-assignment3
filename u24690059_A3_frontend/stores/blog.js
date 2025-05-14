// Mthokozisi Duba u24690059


import { defineStore } from 'pinia'

const apiUrl = process.env.NUXT_PUBLIC_API_URL || import.meta.env.NUXT_PUBLIC_API_URL || 'http://localhost:1337';

export const useBlogStore = defineStore('blog', {
  state: () => ({
    blogs: [],
  }),
  actions: {
    async fetchBlogs() {
      if (this.blogs.length > 0) return;
      try {
        const res = await fetch(`${apiUrl}/api/blogs`, {
          headers: {
            'Authorization': 'Bearer 71df5828f9983d7acf43f85759ed68a44e2f28ee2acc556ca101e3d923e81c41370254a2861e9147f7fdaf1620a4ec148888965ae69a921c5118017303a3fbd9b2c12e568cc9610704a177884585264554e104061dbbd2f1007f1ae37cd439c4361af101848fa31fb55acf41be1c54a8d32320a5b9fcaedc2f3e692acfa8f00f'
          }
        });
        const result = await res.json();
        this.blogs = Array.isArray(result.data) ? result.data : [];
      } catch (e) {
        console.error('Error fetching blogs:', e);
      }
    }
  },
  getters: {
    getBlogByTitle: (state) => (title) => {
      return state.blogs.find(blog => blog.title === title)
    }
  }
})
