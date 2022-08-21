import React from 'react';
import CancelPayment from '../CancelPayment';
import InputField from '../formInputs/InputField';
import SelectField from '../formInputs/SelectField';

function BillingInfoForm({ setIsActive }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className="fade--in--right"
      id="billing--info"
      onSubmit={handleSubmit}
    >
      {/* **********     */}
      <label htmlFor="name-on-card">Name on Card</label> <sup>*</sup>
      <InputField
        placeholder="Opara Linus Ahmed"
        id="name-on-card"
        name="name-on-card"
      />
      {/* ************ */}
      <label htmlFor="Card-type">Card Type</label>
      <sup>*</sup>
      <br />
      <SelectField options="Visa" id="card-type" name="card-type" />
      {/* ***** */}
      <section className="last--inputs">
        {/* *************** */}
        <label htmlFor="card-details">
          Card details <sup>*</sup>
          <InputField
            placeholder={`44960    44960     44960     44960`}
            id="card-details"
            name="card-details"
          />
        </label>
        {/* ************** */}
        <label htmlFor="expiry-date">
          Card details<sup>*</sup>
          <InputField
            placeholder="04 / 23"
            id="expiry-date"
            name="expiry-date"
          />
        </label>
        {/* ************ */}
        <label htmlFor="cvv">
          CVV<sup>*</sup>
          <InputField placeholder="923" id="cvv" name="cvv" />
        </label>
      </section>
      {/* *************** */}
      <footer className="form--footer">
        <button onClick={() => setIsActive('Confirm Payment')}>Next</button>
        <CancelPayment />
      </footer>
    </form>
  );
}

export default BillingInfoForm;
