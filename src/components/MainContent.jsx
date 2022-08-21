import React, { useState } from 'react';
import BillingInfoForm from './forms/BillingInfoForm';
import ConfirmPaymentForm from './forms/ConfirmPaymentForm';
import PersonalInfoForm from './forms/PersonalInfoForm';
import Header from './Header';

function MainContent() {
  const [isActive, setIsActive] = useState('Personal Info');
  const showForm = (e) => {
    setIsActive((preValue) => e.target.innerText);
  };

  return (
    <div className="main--container">
      <h3 className="description--text">Complete your Purchase</h3>

      <section className="heading--section">
        <Header text="Personal Info" showForm={showForm} isActive={isActive} />
        <Header text="Billing Info" showForm={showForm} isActive={isActive} />
        <Header
          text="Confirm Payment"
          showForm={showForm}
          isActive={isActive}
        />
      </section>
      {isActive === 'Personal Info' && (
        <PersonalInfoForm setIsActive={setIsActive} />
      )}
      {isActive === 'Billing Info' && (
        <BillingInfoForm setIsActive={setIsActive} />
      )}
      {isActive === 'Confirm Payment' && <ConfirmPaymentForm />}
    </div>
  );
}

export default MainContent;
