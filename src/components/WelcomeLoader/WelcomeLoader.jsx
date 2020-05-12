import React from 'react';
import './WelcomeLoader.css';

function WelcomeLoader() {
  return (
    <section className="loaderScreen">
      <div className="container">
        <div className="loader">
          <svg className="loaderCirc" viewBox="25 25 50 50">
            <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
          </svg>
        </div>
        <div className="logo">
          <div className="sq">
            <span className="wsq" style={{backgroundColor: '#f25022'}}></span>
            <span className="wsq" style={{backgroundColor: '#7fba00'}}></span>
            <span className="wsq" style={{backgroundColor: '#00a4ef'}}></span>
            <span className="wsq" style={{backgroundColor: '#ffb900'}}></span>
          </div>
          <p>Microsoft</p>
        </div>
      </div>
    </section>
  );
}

export default WelcomeLoader;
