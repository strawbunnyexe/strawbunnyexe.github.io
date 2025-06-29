import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

// Example post data (replace with fetch or Markdown parsing later)
const posts = [
  {
    slug: 'first-post',
    title: 'Welcome to My Magical Blog',
    date: '2025-06-28',
    summary: 'A cozy introduction to my whimsical world of code, art, and spells.'
  },
  {
    slug: 'second-post',
    title: 'Using Magic in React',
    date: '2025-06-25',
    summary: 'Here’s how I used sparkles and pixel magic in my portfolio!'
  }
];

const Blog = () => {
  return (
    <section className="blog-container">
      <h1 className="blog-title">My Blog</h1>
      <div className="post-list">
        {posts.map(post => (
          <div key={post.slug} className="post-card">
            <h2>{post.title}</h2>
            <p className="post-date">{post.date}</p>
            <p>{post.summary}</p>
            <Link to={`/blog/${post.slug}`} className="read-more">Read More →</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
