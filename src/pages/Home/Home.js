import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home({ data }) {
  const [count, setCount] = useState(0);

  // get season
  const currentSeason = Object.keys(data).sort((a, b) => b - a)[0];
  const [daysWithoutBuzzerBeaters, setDaysWithoutBuzzerBeaters] = useState(0);
  
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

    // days since last bb
    if (data[currentSeason] && data[currentSeason].length > 0) {
      const mostRecentGameDate = new Date(data[currentSeason][0].game);
      const today = new Date();
      const timeDiff = Math.abs(today - mostRecentGameDate);
      const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      setDaysWithoutBuzzerBeaters(daysDiff);
    }
  }, [totalBuzzerBeaters, data, currentSeason]);
    
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
      <div className="days-counter">
        <div className="days-text">
          <p>DAYS</p>
          <span className="days-count">{daysWithoutBuzzerBeaters}</span>
        </div>
        <p className="days-without">WITHOUT<br />BUZZER BEATERS</p>
      </div>
      <div className="more-stats-button-container">
        <Link to="/stats" className="more-stats-button">
          MORE STATS
        </Link>
      </div>
    </div>
  );
  
  
}

export default Home;
