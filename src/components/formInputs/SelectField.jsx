import React from 'react';

function SelectField({ options, name, id }) {
  return (
    <select id={id} name={name}>
      <option value="options">{options}</option>
    </select>
  );
}

export default SelectField;
