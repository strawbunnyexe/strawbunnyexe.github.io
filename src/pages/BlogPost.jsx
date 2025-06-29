import React from 'react';
import { useParams } from 'react-router-dom';
import './Blog.css';

const posts = {
  'first-post': {
    title: 'Welcome to My Magical Blog',
    date: '2025-06-28',
    content: `
      <p>Hello curious soul! ✨</p>
      <p>This is my first blog post, where I dive into my design inspirations and how I mix pixels and potions in my work!</p>
    `
  },
  'second-post': {
    title: 'Using Magic in React',
    date: '2025-06-25',
    content: `
      <p>React isn’t just JavaScript — it’s a spellbook! 🔮 Let’s explore how I added sparkle animations and theme switching with ease.</p>
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts[slug];

  if (!post) return <p style={{ padding: "2rem" }}>Post not found.</p>;

  return (
    <section className='blog-container'>
    <article className="blog-post">
      <h1>{post.title}</h1>
      <p className="post-date">{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
    </section>
  );
};

export default BlogPost;
