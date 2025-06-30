import React, { useState } from 'react';
import logo from '../assets/logo.png';
import '../index.css';
import '../animation.css';
import useInViewAnimation from './animation.js';

const NavBar = () => {
  const [navBarRef, isNavBarVisible] = useInViewAnimation();
  const [showPhone, setShowPhone] = useState(false);

  const handleNavClick = (e, targetId) => {
    if (targetId === 'FooterSection') {
      e.preventDefault();
      return;
    }

    if (targetId === 'location') {
      // location გარე ლინკია → დეფოლტ ქმედება არ იბლოკება
      return;
    }

    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="nav-bar" ref={navBarRef}>
      <img
        src={logo}
        alt="Logo"
        className={`logo ${isNavBarVisible ? 'slide-in' : ''}`}
      />

      <nav className="menu">
        {['PriceSection', 'CoachSection', 'location', 'FooterSection'].map((id, index) => {
          const labelMap = {
            PriceSection: 'აბონიმენტი',
            CoachSection: 'მწვრთნელები',
            location: 'მისამართი',
            FooterSection: 'კონტაქტი',
          };

          if (id === 'FooterSection') {
            return (
              <a
                key={id}
                href="#"
                onClick={(e) => handleNavClick(e, id)}
                onMouseEnter={() => setShowPhone(true)}
                onMouseLeave={() => setShowPhone(false)}
                className={isNavBarVisible ? 'slide-in' : ''}
                style={{
                  animationDelay: isNavBarVisible ? `${index * 0.15}s` : '0s',
                  cursor: 'default',
                }}
              >
                {showPhone ? '555 94 15 23' : labelMap[id]}
              </a>
            );
          }

          if (id === 'location') {
            return (
              <a
                key={id}
                href="https://www.google.com/maps/place/Hualing+Tbilisi+Sea+Plaza/@41.7086594,44.8600091,17z/data=!3m1!4b1!4m6!3m5!1s0x40440d9d3efa1247:0x9763e8a33b82cc9!8m2!3d41.7086594!4d44.8600091!16s%2Fg%2F11c5b0nx9n?hl=en-GE&entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className={isNavBarVisible ? 'slide-in' : ''}
                style={{
                  animationDelay: isNavBarVisible ? `${index * 0.15}s` : '0s',
                }}
              >
                {labelMap[id]}
              </a>
            );
          }

          return (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className={isNavBarVisible ? 'slide-in' : ''}
              style={{
                animationDelay: isNavBarVisible ? `${index * 0.15}s` : '0s',
              }}
            >
              {labelMap[id]}
            </a>
          );
        })}
      </nav>
    </div>
  );
};

export default NavBar;
