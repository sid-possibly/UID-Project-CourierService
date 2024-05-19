// ContactForm.js
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return <div className="thank-you-message">Thank you for your info. We will contact you soon.</div>;
  }

  return (
    <div className="contact-section">
      <div className="contact-box">
        <p>Still have some queries? Leave your info so that our person can contact you. <button id="showForm" onClick={() => setSubmitted(false)}>Click here</button>.</p>
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name"><i className="fa fa-user-circle" aria-hidden="true"></i> Name:</label><br />
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required /><br />
          <label htmlFor="email"><i className="fa fa-address-book" aria-hidden="true"></i> Email:</label><br />
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required /><br />
          <label htmlFor="message"><i className="fa fa-commenting" aria-hidden="true"></i> Message:</label><br />
          <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

ReactDOM.render(<ContactForm />, document.getElementById('contact-form-root'));
