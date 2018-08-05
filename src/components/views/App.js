import React from 'react';
import Navigation from '../layout/navigation';

export default ({ children }) => {
  return (
    <div>
      <Navigation />
      { children }
    </div>
  )
}