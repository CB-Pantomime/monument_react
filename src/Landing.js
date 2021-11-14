// need that react...
import React from 'react';

// importing the styles for Landing
import './Landing.css';

// Components that comprise the Landing component
import Nav from './Nav';
import Header from './Header';
import Archive from './Archive';
import AboutTheMagazine from './AboutTheMagazine';
// import Gallery from './Gallery';
import Contact from './Contact';
// import Footer from './Footer';

function Landing() {
  return (
      <div>
        <Nav />,
        <Header />,
        <Archive />,
        <AboutTheMagazine />, 
        <Gallery />,
        <Contact />,
        <Footer />
      </div>
  );
}

// export default Landing;