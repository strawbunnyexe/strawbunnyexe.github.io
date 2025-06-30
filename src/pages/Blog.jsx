import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../utils/loadPosts';
import { motion } from 'framer-motion';
import './Blog.css';

const POSTS_PER_PAGE = 5;

const Blog = () => {
  // Get posts and sort by date (newest first)
  const allPosts = getAllPosts().sort((a, b) => new Date(b.date) - new Date(a.date));
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = allPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handlePrev = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const handleNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <section className="blog-container">
      <h1 className="blog-title">My Blog</h1>
      <div className="post-list">
        {paginatedPosts.map((post, index) => (
          <motion.div
            key={post.slug}
            className="post-card"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h2>{post.title}</h2>
            <p className="post-date">{post.date}</p>
            <p>{post.summary}</p>
            <Link to={`/blog/${post.slug}`} className="read-more">Read More →</Link>
          </motion.div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={handlePrev} disabled={currentPage === 1}>← Prev</button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? 'active' : ''}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button onClick={handleNext} disabled={currentPage === totalPages}>Next →</button>
      </div>

    </section>
  );
};

export default Blog;
