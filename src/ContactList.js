// ContactList.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactList.css';

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch contacts from the json-server
    fetch('http://localhost:5000/contacts')
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error('Error fetching contacts:', error));
  }, []);

  const handleAddContactClick = () => {
    // Redirect to the ContactForm
    navigate('/add');
  };

  const handleDeleteContact = (id) => {
    // Delete contact from the json-server
    fetch(`http://localhost:5000/contacts/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        // Update the UI by removing the deleted contact
        const updatedContacts = contacts.filter((contact) => contact.id !== id);
        setContacts(updatedContacts);
      })
      .catch((error) => console.error('Error deleting contact:', error));
  };

  return (
    <div className="contact-list">
      <ul style={{ listStyle: 'none' }}>
        {contacts.map((contact) => (
          <li key={contact.id} className="contact">
            <h3>{contact.title}</h3>
            <p>{contact.description}</p>
            {/* <Link to={`/details/${contact.id}`}>Details</Link> */}
            {/* Add a delete button */}
            <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
          </li>
        ))}
        <center>
          <button onClick={handleAddContactClick}>Add Contact</button>
        </center>
      </ul>
    </div>
  );
}

export default ContactList;
