import React from 'react';
import { Link } from 'react-router-dom';
import SimpleLayout from '../layouts/SimpleLayout';

const Blog = () => {
  return (
    <SimpleLayout>
      <h1>Blog Coming Soon!</h1>
      <p>I'm working on some fun dev posts, tutorials, and project insights.</p>
      <p>Check back later or explore the rest of the site!</p>
      <Link to="/">Return to the homepage</Link>
    </SimpleLayout>
  );
};

export default Blog;
