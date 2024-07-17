import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/WhatsApp Image 2024-06-13 at 22.32.21_7b087006.jpg'

function NavigationMenu() {
  return (
    <nav>
     <img src={logo} alt="Logo" style={{ height: '50px' }} />
     <h1>LAMEDAQUI MENTAL HEALTH</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/support-groups">Support Groups</Link></li>
        <li><Link to="/counselling">Counselling</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/membership">Membership</Link></li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;
