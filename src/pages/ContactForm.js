import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';

export default function ContactForm({ setShowModal }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const { name, email, message } = form;
    if (!name || !email || !message) {
      toast.error('Fill all required fields');
      return;
    }
    try {
      await fetch('https://form-backend-cs0u.onrender.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      toast.success('Message sent!');
      setShowModal(true);
     
    } catch (err) {
      toast.error('Submission failed');
    }
  };

  const formStyle = {
    backgroundColor: '#ffffff',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    animation: 'fadeIn 0.5s ease-in-out'
  };

  const inputStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    fontSize: '16px',
    background: '#f9f9f9'
  };

  const buttonStyle = {
    padding: '12px',
    backgroundColor: '#2563eb',
    color: '#fff',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer'
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2 style={{ fontSize: '20px', fontWeight: '600' }}>Contact Form</h2>

      <div style={inputStyle}>
        <FaUser />
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name *"
          style={{ border: 'none', outline: 'none', flex: 1, background: 'transparent' }}
        />
      </div>

      <div style={inputStyle}>
        <FaEnvelope />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email *"
          style={{ border: 'none', outline: 'none', flex: 1, background: 'transparent' }}
        />
      </div>

      <div style={inputStyle}>
        <FaCommentDots />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message *"
          rows={4}
          style={{ border: 'none', outline: 'none', flex: 1, background: 'transparent', resize: 'none' }}
        />
      </div>

      <button type="submit" style={buttonStyle}>
        Submit
      </button>
    </form>
  );
}
