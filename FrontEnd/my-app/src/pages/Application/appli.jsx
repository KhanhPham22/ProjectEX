import React, { useState } from 'react';

function Application() {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add logic to submit the form
    console.log(`Name: ${name}, Position: ${position}, Phone Number: ${phoneNumber}, Start Date: ${startDate}, End Date: ${endDate}, Reason: ${reason}`);
  }

  return (
    <div>
      <h2>Application</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        <br />
        <label htmlFor="position">Position:</label>
        <input type="text" id="position" value={position} onChange={(e) => setPosition(e.target.value)} required />
        <br />
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        <br />
        <label htmlFor="startDate">Start Date:</label>
        <input type="date" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
        <br />
        <label htmlFor="endDate">End Date:</label>
        <input type="date" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
        <br />
        <label htmlFor="reason">Reason:</label>
        <textarea id="reason" value={reason} onChange={(e) => setReason(e.target.value)} required></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Application;