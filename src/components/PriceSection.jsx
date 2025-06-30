import React from 'react';
import pricingPlans from '../price.js';
import useInViewAnimation from './animation.js'; 
import '../price.css';  
import '../animation.css';

const PriceSection = () => {
  const [ref, isVisible] = useInViewAnimation();

  return (
    <div
      id="PriceSection"
      className={`price-header ${isVisible ? 'slide-up' : ''}`}
      ref={ref}
    >
      <h1>
        აბონიმენტი
      </h1>
      <div className='price-cards'>
        {pricingPlans.map((plan) => (
          <div key={plan.id} className={`price-card ${plan.color} ${plan.id === 2 ? 'popular' : ''}`}>
            {plan.id === 2 && <div className="popular-badge">პოპულარული</div>}
            <div className="card-inner">
              <h2>{plan.name}</h2>
              <div className="price-container">
                <p className='price'>{plan.price}</p>
                <span className='period'>/ {plan.period}</span>
              </div>
              <ul className='features'>
                {plan.features.map((feature, index) => (
                  <li key={index}>
                    <span className="feature-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceSection;
