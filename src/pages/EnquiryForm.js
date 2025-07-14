import React, { useState } from 'react';
import { toast } from 'react-toastify';
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaVenusMars,
  FaQuestion,
  FaCode
} from 'react-icons/fa';

export default function EnquiryForm({ setShowModal }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    contactNumber: '',       
    gender: '',
    howDidYouHear: '',       
    codingExperience: ''     
  });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const { name, email, contactNumber, gender, howDidYouHear } = form;
    if (!name || !email || !contactNumber || !gender || !howDidYouHear) {
      toast.error('Fill all required fields');
      return;
    }
    try {
      await fetch('https://form-backend-cs0u.onrender.com/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      toast.success('Enquiry submitted!');
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

  const selectStyle = { ...inputStyle };

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
      <h2 style={{ fontSize: '20px', fontWeight: '600' }}>Enquiry Form</h2>

      <div style={inputStyle}>
        <FaUser />
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name *"
          style={{
            border: 'none',
            outline: 'none',
            flex: 1,
            background: 'transparent'
          }}
        />
      </div>

      <div style={inputStyle}>
        <FaEnvelope />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email *"
          style={{
            border: 'none',
            outline: 'none',
            flex: 1,
            background: 'transparent'
          }}
        />
      </div>

      <div style={inputStyle}>
        <FaPhone />
        <input
          name="contactNumber"
          value={form.contactNumber}
          onChange={handleChange}
          placeholder="Contact *"
          style={{
            border: 'none',
            outline: 'none',
            flex: 1,
            background: 'transparent'
          }}
        />
      </div>

      <div style={selectStyle}>
        <FaVenusMars />
        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          style={{
            border: 'none',
            outline: 'none',
            flex: 1,
            background: 'transparent'
          }}
        >
          <option value="">Select Gender *</option>
          <option>Female</option>
          <option>Male</option>
          <option>Other</option>
        </select>
      </div>

      <div style={selectStyle}>
        <FaQuestion />
        <select
          name="howDidYouHear"
          value={form.howDidYouHear}
          onChange={handleChange}
          style={{
            border: 'none',
            outline: 'none',
            flex: 1,
            background: 'transparent'
          }}
        >
          <option value="">How did you hear about us? *</option>
          <option>Social Media</option>
          <option>Friend</option>
          <option>Ad</option>
          <option>Other</option>
        </select>
      </div>

      <div style={selectStyle}>
        <FaCode />
        <select
          name="codingExperience"
          value={form.codingExperience}
          onChange={handleChange}
          style={{
            border: 'none',
            outline: 'none',
            flex: 1,
            background: 'transparent'
          }}
        >
          <option value="">Experience in Coding?</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>

      <button type="submit" style={buttonStyle}>
        Submit
      </button>
    </form>
  );
}
