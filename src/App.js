import React, { useState } from 'react';
import EnquiryForm from './pages/EnquiryForm';
import ContactForm from './pages/ContactForm';
import ThankYouModal from './pages/ThankYouModal';

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app-layout">
      <div className="column">
        <EnquiryForm setShowModal={setShowModal} />
      </div>
      <div className="column">
        <ContactForm setShowModal={setShowModal} />
      </div>
      <div className="column info-column">
        <div className="info-content">
          <h1>Welcome!</h1>
          <h2>We're glad to hear from you.</h2>
          <h2>Please fill out the forms to get in touch.</h2>
        </div>
      </div>

      <ThankYouModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
