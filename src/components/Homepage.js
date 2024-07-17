import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupForm from './SignupForm';

// Importing images
import DaveImage from '../Assets/Dave.jpeg';
import TeamMember2Image from '../Assets/30 Amazing photos from behind the scenes of \'The Godfather\' - One of the greatest movie trilogies ever made _ The Vintage News.jpeg';
import TeamMember3Image from '../Assets/a0830ad7-83a8-4d6a-8a23-74c1cdacd0a1.jpeg';
import TeamMember4Image from '../Assets/Muere el filósofo Jacques Derrida.jpeg';
import Client1Image from '../Assets/Brand Photoshoot for Business Operations Agency.jpg';
import Client2Image from '../Assets/Handshake on Business Meeting Stock Image - Image of help, appointment_ 18730351.jpg';
import Client3Image from '../Assets/How to Enhance Your Client Experience.jpg';
import Client4Image from '../Assets/58c2772d-931b-49d8-98fe-cc5d31faaca3.jpeg';


function Homepage() {
    const [isSignupFormVisible, setSignupFormVisible] = useState(false);
    const navigate = useNavigate();

    const handleSignupClick = () => {
        setSignupFormVisible(true);
    };

    const handleCloseSignupForm = () => {
        setSignupFormVisible(false);
    };

    const handleLearnMoreClick = () => {
        navigate('/learn-more');
    };

    return (
        <div>
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h2>Your Path to Better Mental Health</h2>
                            <p>Access comprehensive mental health support anytime, anywhere.</p>
                            <button onClick={handleSignupClick}>Sign Up</button>
                            <button onClick={handleLearnMoreClick}>Learn More</button>
                        </div>
                    </div>
                </div>
            </section>

            {isSignupFormVisible && <SignupForm onClose={handleCloseSignupForm} />}

            <section id="about" className="section">
                <div className="container">
                    <h2>About Us</h2>
                    <p>Our mission is to provide accessible and affordable mental health support to everyone, anywhere.</p>
                    <h3>Our Team</h3>
                    <div className="team">
                        <div className="team-member">
                            <img src={DaveImage} alt="Team Member 1" />
                            <p>ARAKASZN</p>
                        </div>
                        <div className="team-member">
                            <img src={TeamMember2Image} alt="Team Member 2" width="400" height="400" />
                            <p>DOUBLEBLACK</p>
                        </div>
                        <div className="team-member">
                            <img src={TeamMember3Image} alt="Team Member 3" />
                            <p>JEFFERSON</p>
                        </div>
                        <div className="team-member">
                            <img src={TeamMember4Image} alt="Team Member 4" />
                            <p>KENSON</p>
                        </div>
                    </div>

                    <h3>Testimonials</h3>
                    <p>Read what our users have to say about us.</p>

                    <div className="testimonials">
                        <div className="testimonial">
                            <img src={Client1Image} alt="Client 1" />
                            <p>"Lamedaqui Mental Health has been a game-changer for me. The support and resources they provide are top-notch."</p>
                            <p>- Emily R., Happy Client</p>
                        </div>
                        <div className="testimonial">
                            <img src={Client2Image} alt="Client 2" />
                            <p>"I was struggling to find the right therapist, but Lamedaqui Mental Health connected me with someone who truly understands me."</p>
                            <p>- David K., Satisfied Client</p>
                        </div>
                        <div className="testimonial">
                            <img src={Client3Image} alt="Client 3" />
                            <p>"The online support groups have been a lifesaver for me. I finally feel like I'm not alone in my struggles."</p>
                            <p>- Sarah L., Grateful Client</p>
                        </div>
                        <div className="testimonial">
                            <img src={Client4Image} alt="Client 4" />
                            <p>"Lamedaqui Mental Health's resources have helped me to better understand my mental health and take control of my well-being."</p>
                            <p>- Tasha, Happy Client</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Homepage;
