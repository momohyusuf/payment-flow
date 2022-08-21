import React from 'react';
import CancelPayment from '../CancelPayment';
import InputField from '../formInputs/InputField';
import SelectField from '../formInputs/SelectField';

function PersonalInfoForm({ setIsActive }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="fade--in--right">
      <label htmlFor="name">Name</label>
      <InputField id="name" name="name" placeholder="Opara Linus Ahmed" />
      {/* ************* */}
      <label htmlFor="Email">Email Address</label> <sup>*</sup>
      <small>The purchase receipt will be sent to this address</small>
      <InputField
        placeholder="OparaLinusAhmed@devmail.com"
        id="email"
        name="email"
      />
      {/* ************ */}
      <label htmlFor="address-one">Address 1</label>
      <InputField
        placeholder="The address of the user goes here"
        name="address-one"
        id="address-one"
      />
      {/* ************ */}
      <label htmlFor="address-two">Address 2</label>
      <InputField placeholder="and here" name="address-two" id="address-two" />
      {/* ************ */}
      <section className="last--inputs">
        <label htmlFor="local-government">
          Local Government <br />
          <InputField
            placeholder="Surulere"
            name="address-two"
            id="local-government"
          />
        </label>
        {/* ************ */}
        <label htmlFor="State">
          State
          <SelectField options="Lagos" id="state" name="state" />
        </label>
      </section>
      {/*  */}
      <footer className="form--footer">
        <button onClick={() => setIsActive('Billing Info')}>Next</button>
        <CancelPayment />
      </footer>
    </form>
  );
}

export default PersonalInfoForm;
