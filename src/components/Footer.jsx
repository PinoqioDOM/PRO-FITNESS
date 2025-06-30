import React from 'react';
import useInViewAnimation from './animation.js';
import '../footer.css'
import '../animation.css';

const Footer = () => {
  const [ref, isVisible] = useInViewAnimation();

  return (
    <div
      id="FooterSection"
      className={`footer ${isVisible ? 'fade-in slide-up' : ''}`}
      ref={ref}
    >
      <div className='footer-box'>
        <div className="footer-info">
          <div className="footer-header">
            <h1 className='footer-title'>PRO FITNESS</h1>
            <div className="social-icons">
              <a href="https://www.facebook.com/profile.php?id=100064966390244" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-square-facebook fa-2xl"></i>
              </a>
              <a href="https://www.instagram.com/pro_fitness_hualing_/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram fa-2xl"></i>
              </a>
            </div>
          </div>

          <div className="footer-slogan">
            გახდი შენი თავის საუკეთესო ვერსია ჩვენთან !
          </div>
        </div>

        <div className="footer-contacts">
          <div className="hours-card">
            <h2 style={{textAlign: 'center'}}>სამუშაო საათები</h2>
            <p style={{letterSpacing:'2px', marginTop:'5px'}}>
              ორშაბათი - კვირა 07:00 - 00:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;