import React, { useState } from 'react';
import coaches from '../coach';
import '../coach.css';
import '../animation.css';
import useInViewAnimation from './animation.js';

const CoachSection = () => {
  const [currentCoachIndex, setCurrentCoachIndex] = useState(0);
  const coach = coaches[currentCoachIndex];

  const [coachSectionRef, isCoachSectionVisible] = useInViewAnimation(0.1);

  const goToNextCoach = () => {
    const nextIndex = (currentCoachIndex + 1) % coaches.length;
    setCurrentCoachIndex(nextIndex);
  };

  return (
    <div id="CoachSection" className="coach-section" ref={coachSectionRef}>
      <div className="coach-container">

        <div
          className={`coach-info ${isCoachSectionVisible ? 'fade-in' : ''}`}
          key={`info-${isCoachSectionVisible}-${currentCoachIndex}`}
        >
          <h1 className="coach-name">{coach.name}</h1>
          <p>გამოცდილება ფიტენს სფეროში: <span className="gold-text">{coach.experience}</span></p>
          <p>თვიური გადასახადი: <span className="gold-text">{coach.price}</span></p>
          <p>თვეში: <span className="gold-text">12 გაკვეთილი + კვების რაციონი</span></p>

          <button className="switch-btn" onClick={goToNextCoach}>NEXT</button>
        </div>

        <div
          className={`coach-image ${isCoachSectionVisible ? 'bounce-in' : ''}`}
          key={`img-${isCoachSectionVisible}-${currentCoachIndex}`}
        >
          <img src={coach.img} alt={coach.name} className="trainer-pic" />
        </div>

      </div>
    </div>
  );
};

export default CoachSection;
