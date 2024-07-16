import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.css';

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go to home</Link>
    </div>
  );
}

export default NotFoundPage;