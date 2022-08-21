import React from 'react';
import { Outlet } from 'react-router-dom';

function SharedLayout() {
  return (
    <div>
      <div className="hero"></div>
      <Outlet />
    </div>
  );
}

export default SharedLayout;
