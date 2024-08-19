import React, { useEffect, useState } from 'react';
import './Home.css';

function Home({ data }) {
  const [count, setCount] = useState(0);

  // get season
  const currentSeason = Object.keys(data).sort((a, b) => b - a)[0];
  
  // #bb in szn
  const totalBuzzerBeaters = data[currentSeason] ? data[currentSeason].length : 0;

  // counter animation
  useEffect(() => {
    let start = 0;
    const end = totalBuzzerBeaters;
    
    if (start === end) return;

    const totalDuration = 2000; // in milliseconds
    let startTime = null;

    // eas func for smooth :)
    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    // animation func
    const animateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const easing = easeInOutCubic(progress / totalDuration);
      const currentCount = Math.round(end * easing);
      setCount(currentCount);

      // animation till end
      if (progress < totalDuration) {
        requestAnimationFrame(animateCounter);
      } else {
        setCount(end); 
      }
    };

    requestAnimationFrame(animateCounter);
  }, [totalBuzzerBeaters]);
  
  return (
    <div className="home">
      <div className="counter-box">
        <div className="counter-content">
          <span className="count-number">{count}</span>
          <p>
            BUZZER<br />BEATERS
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
