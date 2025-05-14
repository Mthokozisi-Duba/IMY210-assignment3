const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const blogs = [
  {
    id: 1,
    authorName: 'Tea Smith',
    datePublished: '2025-05-01',
    title: 'Am i cooked',
    content: 'Coding is a wonderful skill but i am indeed bad at it  the rest of this content will just be some lorem text to populate the content of this page  lorem80 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem90 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem100 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem110 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem120 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem130 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem140 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem150 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem160 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem170 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem180 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus',
    category: 'tech'
  },
  {
    id: 2,
    authorName: 'mtho Johnson',
    datePublished: '2025-05-05',
    title: 'Vue + nuxt + strapi + docker damn really',
    content: 'I suffered making this app and i am not sure if it is worth it Im just winging it thus far and i am not sure if it is worth it  the rest of this content will just be some lorem text to populate the content of this page  lorem80 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem90 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem100 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem110 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem120 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem130 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem140 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem150 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem160 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem170 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem180 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus',
    category: 'tech'
  },
  {
    id: 3,
    authorName: 'Noise Lee',
    datePublished: '2025-05-10',
    title: 'Tips for Productive Remote Work',
    content: 'There are no tips for productive remote work. Just do it and get it over with.  the rest of this content will just be some lorem text to populate the content of this page  lorem80 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem90 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem100 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem110 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem120 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem130 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem140 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem150 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem160 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem170 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem180 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus',
    category: 'lifestyle'
  },
  {
    id: 4,
    authorName: 'tim king',
    datePublished: '2025-05-20',
    title: 'Life is hard',
    content: 'that is it life is hard nothing more to say nothing needs to be said the title says it all.  the rest of this content will just be some lorem text to populate the content of this page  lorem80 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem90 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem100 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem110 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem120 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem130 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem140 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem150 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem160 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem170 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus lorem180 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus',
    category: 'lifestyle',
  }
];

router.get('/blogs', (req, res) => {
  res.json(blogs);
});

module.exports = router;
