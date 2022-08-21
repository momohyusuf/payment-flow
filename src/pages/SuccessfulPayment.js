import React from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function SuccefulPayment() {
  return (
    <div className="main--container fadeInDown">
      <section className="purchase--successfull--card">
        <div>
          <div className="success--icon">
            <BsCheckLg style={{ fontSize: '41.7px' }} />
          </div>
          <h2 className="description--text">Purchase Completed</h2>
          <p>Please check your email for details concerning this transaction</p>
          <Link to="/">Return Home</Link>
        </div>
      </section>
    </div>
  );
}

export default SuccefulPayment;
