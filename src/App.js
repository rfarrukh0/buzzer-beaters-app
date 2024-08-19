import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Stats from './pages/Stats/Stats';
import Archive from './pages/Archive/Archive';
import PlayerTeamStandings from './pages/PlayerTeamStandings/PlayerTeamStandings';
import Home from './pages/Home/Home';
import './App.css';
import staticData from './data';  //remove after
import logo from './assets/images/buzzerbeaters.png';  
import menuButton from './assets/images/menubutton.png';  

function App() {
  const [data, setData] = useState({});  // temp data
  const [menuOpen, setMenuOpen] = useState(false); // menu toggle

  const toggleMenu = () => { // menutoggle
    setMenuOpen(!menuOpen);
  };

  useEffect(() => { // group data
    const groupedData = groupBySeason(staticData);
    setData(groupedData);
  }, []);

  const groupBySeason = (data) => {
    const grouped = {};

    data.forEach(item => {
      if (item.game) {
        // extract year month day 
        const [monthStr, , year] = item.game.split(' ');
        const month = new Date(`${monthStr} 1, ${year}`).getMonth();

        let seasonYear;
        if (month >= 6) {  // splitting seasons after july
          seasonYear = `${year}-${parseInt(year, 10) + 1}`;
        } else { 
          seasonYear = `${parseInt(year, 10) - 1}-${year}`;
        }

        if (!grouped[seasonYear]) {
          grouped[seasonYear] = [];
        }

        grouped[seasonYear].push({
          ...item,
          game: item.game.slice(0, 12) // random p in data removal
        });
      }
    });

    return grouped;
  };

  return (
    <Router>
      <div className="App">
        <header className="global-header">
          <Link to="/">
            <img src={logo} alt="Buzzer Beaters Logo" className="logo" />
          </Link>
          <button onClick={toggleMenu} className={`menu-button ${menuOpen ? 'open' : ''}`}>
            <img src={menuButton} alt="Menu Button" />
          </button>
        </header>
        <nav className={`side-menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/stats" onClick={toggleMenu}>Stats</Link></li>
            <li><Link to="/archive" onClick={toggleMenu}>Archive</Link></li>
            <li><Link to="/player-team-standings" onClick={toggleMenu}>Player/Team Standings</Link></li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home data={data} />} />
            <Route path="/stats" element={<Stats data={data} />} />
            <Route path="/archive" element={<Archive data={data} />} />
            <Route path="/player-team-standings" element={<PlayerTeamStandings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
