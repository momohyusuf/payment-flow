import React from 'react';

function Header({ text, showForm, isActive }) {
  return (
    <div className="heading--text">
      <h5
        style={{ color: ` ${isActive === text ? '#f2994a' : ''}` }}
        onClick={showForm}
      >
        {text}
      </h5>
      <div className={` ${isActive === text ? 'active' : ''}`}></div>
    </div>
  );
}

export default Header;
