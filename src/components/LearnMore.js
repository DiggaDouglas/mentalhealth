import React from 'react';
import LearnMoreImage from '../Assets/Developing Friendship Skills_ Help for Kids and Teens on the Autism Spectrum (1).jpeg';


function LearnMore() {
    return (
      <div className="learn-more-page">
        <h1> About Our Services</h1>
        <div className="learn-more-content">
          <img src={LearnMoreImage} alt="Learn More" className="learn-more-image" />
          <div className="learn-more-text">
            <p>
              At Lamedaqui Mental Health, we are dedicated to providing comprehensive mental health services to individuals, couples, and families. Our team of experienced professionals is committed to helping you navigate through life's challenges and achieve your mental health goals. We offer a range of services including individual therapy, group therapy, family counseling, and more. Our approach is centered around empowering you to take control of your mental health and live a fulfilling life.
            </p>
            <p>
              Our services are designed to address a variety of mental health concerns including anxiety, depression, trauma, relationship issues, and self-esteem. We use evidence-based practices to ensure that you receive the highest quality of care. Whether you are seeking support for yourself or a loved one, we are here to help. Our goal is to create a safe and supportive environment where you can explore your thoughts and feelings, develop coping strategies, and work towards your personal growth and well-being.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default LearnMore;
