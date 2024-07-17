import React, { useState } from 'react';
 

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <main className="contact-page">
      <section className="section">
        <div className="container">
          <h2>Contact Us</h2>
          <p>Get in touch with us for support, inquiries, or to schedule a session.</p>
          <div className="contact-info">
            <div className="contact-card">
              <h3>Get in Touch</h3>
              <p>123 Nairobi Road, Nairobi, Kenya</p>
              <p>+254 726715490</p>
              <p>+1 6678 254445 41</p>
            </div>
            <div className="contact-card">
              <h3>Email Us</h3>
              <p>info@lamedaqui.com</p>
              <p>contact@lamedaqui.com</p>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            /><br /><br />
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            /><br /><br />
            <label htmlFor="subject">Subject:</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              value={formData.subject} 
              onChange={handleChange} 
            /><br /><br />
            <label htmlFor="message">Message:</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
            /><br /><br />
            <input type="submit" value="Send Message" />
          </form>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;

