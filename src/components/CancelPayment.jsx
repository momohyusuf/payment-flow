import React from 'react';
import { Link } from 'react-router-dom';

function CancelPayment() {
  return (
    <Link style={{ textDecoration: 'none' }} to="/">
      <span>Cancel Payment</span>
    </Link>
  );
}

export default CancelPayment;
