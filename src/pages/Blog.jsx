import React from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../utils/loadPosts';
import './Blog.css';

const Blog = () => {
  // Get posts and sort by date (newest first)
  const posts = getAllPosts().sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <section className="blog-container">
      <h1 className="blog-title">My Blog</h1>
      <div className="post-list">
        {posts.map((post) => (
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
