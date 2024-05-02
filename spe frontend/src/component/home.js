import React, { useState } from 'react';
import './login.css';

function PhoneNumberForm() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform any action with the phone number, like validation or sending it to a server
    console.log('Phone number submitted:', phoneNumber);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div >
      <h2>Phone Number Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Enter your phone number"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PhoneNumberForm;
