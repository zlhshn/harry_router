import React from "react";
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
    <>
      <div >
 

        {/* <!-- CONTACT MAIN --> */}
        <main className="contact">
  <h2>Contact ...</h2>
  <div className="contact__list">
    <div className="contact__item">
      <i className="fas fa-envelope" /> Email
      <div className="text-secondary">haryy@hogwarts.com</div>
    </div>
    <div className="contact__item">
      <i className="fas fa-mobile-alt" /> Phone
      <div className="text-secondary">+40 (571) 360-1234</div>
    </div>
    <div className="contact__item">
      <i className="fas fa-map-marker-alt" /> Address
      <div className="text-secondary">
      Warner Bros. Studio Tour London
      </div>
    </div>
  </div>
</main>

      </div>
    </>
  );
};

export default Contact;
