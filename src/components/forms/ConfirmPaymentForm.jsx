import React from 'react';
import { TbCurrencyNaira } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import CancelPayment from '../CancelPayment';

function ConfirmPaymentForm() {
  return (
    <div className="fade--in--right">
      <section className="confirm--payment--card">
        <header className="confirm--payment--card--header">
          <p>Item Name</p>{' '}
          <p style={{ display: 'flex', alignItems: 'center' }}>
            <TbCurrencyNaira /> Price
          </p>
        </header>
        <main>
          <div>
            <p style={{ fontWeight: '400' }}>Data science and usability</p>{' '}
            <p style={{ fontWeight: '700' }}>50,000.00</p>
          </div>
          <div>
            <p>Shipping</p>
            <p style={{ color: 'black' }}>0.00</p>
          </div>
        </main>
        <hr />
        <footer>
          <p>Total</p>
          <p style={{ fontWeight: '700' }}>50,000.00</p>
        </footer>
      </section>
      <footer className="form--footer" style={{ margin: '50px 0' }}>
        <Link to="/successfulPayment">
          <button>Pay</button>
        </Link>
        <CancelPayment />
      </footer>
    </div>
  );
}

export default ConfirmPaymentForm;
