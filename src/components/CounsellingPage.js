import React, { useState } from 'react';
import Counsellor1Image from '../Assets/6333298b-7a23-4759-ac5c-fd5466ab749a copy.jpeg';
import Counsellor2Image from '../Assets/Download premium image of African Descent Man and Praying Group of People about preacher, business faith, african teacher african descent, christisn leadership, and stand blur people 143786.jpeg';
import Counsellor3Image from '../Assets/E therapy pro.jpeg';
import Counsellor4Image from '../Assets/cd65852e-69dd-41fa-aa5c-0894947237af.jpeg';

function CounsellingPage() {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleBookSession = () => {
    // Logic to handle booking session goes here
    // For now, just showing the success popup
    setShowSuccessPopup(true);

    // Simulate closing the popup after 3 seconds
    setTimeout(() => {
      setShowSuccessPopup(false);
    }, 1000);
  };

  return (
    <section className="section">
      <div className="container">
        <h2>Counselling</h2>
        <p>Our team of experienced counsellors are here to support you through life's challenges. We offer individual, couples, and family counselling sessions to help you achieve your mental health goals.</p>
        <h3>Our Counsellors</h3>
        <div className="counsellor-card">
          <img src={Counsellor1Image} alt="Counsellor 1" />
          <h4>Dr. Christopher Wilson</h4>
          <p>Specializing in anxiety and depression</p>
          <p>Dr. Christopher Wilson is a licensed clinical psychologist with over 10 years of experience in treating anxiety and depression. He has a PhD in Clinical Psychology from the University of California and has published several research papers on the topic.</p>
          <button className="book-button" onClick={handleBookSession}>Book a session</button>
        </div>
        <div className="counsellor-card">
          <img src={Counsellor2Image} alt="Counsellor 2" />
          <h4>Dr. John Doe</h4>
          <p>Specializing in relationships and trauma</p>
          <p>Dr. John Doe is a licensed marriage and family therapist with over 15 years of experience in treating relationship issues and trauma. He has a Master's degree in Marriage and Family Therapy from the University of Nairobi and has worked with hundreds of couples and families to improve their relationships.</p>
          <button className="book-button" onClick={handleBookSession}>Book a session</button>
        </div>
        <div className="counsellor-card">
          <img src={Counsellor3Image} alt="Counsellor 3" />
          <h4>Dr. Daniel Miller</h4>
          <p>Specializing in sports psychology</p>
          <p>Dr. Daniel Miller is a licensed clinical social worker with over 8 years of experience in treating athletes and individuals involved in sports. He helps individuals overcome mental blocks, build confidence, and improve their overall performance. His approach is centered around empowering individuals to reach their full potential.</p>
          <button className="book-button" onClick={handleBookSession}>Book a session</button>
        </div>
        <div className="counsellor-card">
          <img src={Counsellor4Image} alt="Counsellor 4" />
          <h4>Dr. Emily Johnson</h4>
          <p>Specializing in self-esteem and confidence</p>
          <p>Dr. Emily Johnson is a licensed clinical social worker with over 8 years of experience in treating self-esteem and confidence issues. She has a Master's degree in Social Work from Cambridge University and has worked with individuals of all ages to improve their self-esteem and confidence.</p>
          <button className="book-button" onClick={handleBookSession}>Book a session</button>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="success-popup">
          <p>Session successfully booked!</p>
        </div>
      )}
    </section>
  );
}

export default CounsellingPage;
