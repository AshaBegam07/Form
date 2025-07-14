import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export default function ThankYouModal({ show, onClose }) {
  if (!show) return null;

  const overlayStyle = {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  };

  const modalStyle = {
    backgroundColor: '#fff',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
    textAlign: 'center',
    animation: 'fadeIn 0.3s ease-in-out',
    minWidth: '300px'
  };

  const buttonStyle = {
    marginTop: '16px',
    padding: '10px 20px',
    backgroundColor: '#2563eb',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    marginRight: '10px'
  };

  const whatsappButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#25D366' 
  };
  
  const whatsappUrl = `https://wa.me/917603887385?text=Hi,I just submitted the form. Could you Share more details About this ?`;


  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <FaCheckCircle style={{ fontSize: '40px', color: 'green' }} />
        <h2 style={{ fontSize: '24px', fontWeight: '600' }}>Thank You!</h2>
        <p>Your form has been submitted successfully.</p>
        
        <div>
          <button onClick={onClose} style={buttonStyle}>Close</button>
          <button
            onClick={() => window.open(whatsappUrl, '_blank')}
            style={whatsappButtonStyle}
          >
            Go to WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
