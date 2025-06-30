import React from 'react';
import '../animation.css';
import useInViewAnimation from './animation.js'; 

const HeaderSection = () => {
  const letters = ['P', 'R', 'O', ' ', 'F', 'I', 'T', 'N', 'E', 'S', 'S'];

  const [headerRef, isHeaderVisible] = useInViewAnimation();

  return (
    <div className='header' ref={headerRef}>
      <div className='text'>
        {letters.map((letter, index) => (
          <span
            key={index}
            className={isHeaderVisible ? 'fade-in' : ''}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
}

export default HeaderSection;