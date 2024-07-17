import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import ResourcesPage from './components/ResourcesPage';
import SupportGroupsPage from './components/SupportGroupsPage';
import CounsellingPage from './components/CounsellingPage';
import ContactPage from './components/ContactPage';
import MembershipPage from './components/MembershipPage';
import LearnMore from './components/LearnMore';


import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/support-groups" element={<SupportGroupsPage />} />
            <Route path="/counselling" element={<CounsellingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/learn-more" element={<LearnMore />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
     
    </Router>
  );
}

export default App;
