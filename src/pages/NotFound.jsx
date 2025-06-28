import React from 'react';
import { Link } from 'react-router-dom';
import SimpleLayout from '../layouts/SimpleLayout';

const NotFound = () => {
  return (
    <SimpleLayout>
      <h1>404 - Page Not Found</h1>
      <p>Looks like you wandered off the map.</p>
      <Link to="/">Return to the homepage</Link>
    </SimpleLayout>
  );
};

export default NotFound;
