// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <div className="card">
            <div className="header">
              <h1>Contact App</h1>
            </div>
            <Routes>
              <Route path="/" element={<ContactList />} />
              <Route path="/add" element={<ContactForm />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

//App.js