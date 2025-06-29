import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { marked } from 'marked';
import { parseMarkdown } from '../utils/parseMarkdown';
import './Blog.css';

const BlogPost = () => {
  const { slug } = useParams();
  const [html, setHtml] = useState('');
  const [meta, setMeta] = useState(null);

useEffect(() => {
  import(`../posts/${slug}.md?raw`)
    .then((module) => {
      const raw = module.default;
      const { metadata, content } = parseMarkdown(raw);

      setMeta(metadata);
      setHtml(marked(content));
    })
    .catch((err) => {
      console.error("Error loading post:", err);
      setHtml('<p>Post not found.</p>');
    });
}, [slug]);

  return (
    <main className="blog-post-container">
      {meta ? (
        <article className='blog-post'>
          <h1>{meta.title}</h1>
          <p className="post-date">{meta.date}</p>
          <div dangerouslySetInnerHTML={{ __html: html }} className="post-content" />
          <Link to="/blog" className="back-link">← Back to Blog</Link>
        </article>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};

export default BlogPost;
