import React from 'react';

function InputField({ placeholder, id, name }) {
  return <input type="text" placeholder={placeholder} id={id} name={name} />;
}

export default InputField;
