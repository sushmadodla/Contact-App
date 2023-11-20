// ContactForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactForm.css';
function ContactForm() {
  const [newContact, setNewContact] = useState({ title: '', description: '' });
  const navigate = useNavigate();

  const addContact = () => {
    if (newContact.title.trim() !== '' && newContact.description.trim() !== '') {
      fetch('http://localhost:5000/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newContact),
      })
        .then(() => {
          setNewContact({ title: '', description: '' });
          navigate('/'); // Redirect to the contact list after adding a new contact
        })
        .catch((error) => console.error('Error adding contact:', error));
    }
  };

  const showList = () => {
    // Redirect to the ContactList
    navigate('/');
  };

  return (
    <div className="form">
      <label>Name</label>
      <input
        type="text"
        placeholder="Enter Name..."
        value={newContact.title}
        onChange={(e) => setNewContact({ ...newContact, title: e.target.value })}
      />
      <label>Phone Number</label>
      <input
        type="text"
        placeholder="Enter Mobile..."
        value={newContact.description}
        onChange={(e) => setNewContact({ ...newContact, description: e.target.value })}
      />
      <button onClick={addContact}>Add Contact</button>
      <br></br>
      <br></br>
      <button onClick={showList}>My contacts</button>
    </div>
  );
}

export default ContactForm;