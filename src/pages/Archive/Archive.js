import React from 'react';

function Archive({ data }) {
  return (
    <div>
      {Object.keys(data).sort((a, b) => b - a).map(season => (
        <div key={season}>
          <h2>{season} Season</h2>
          <table>
            <thead>
              <tr>
                <th>Player</th>
                <th>Game</th>
                <th>Team</th>
                <th>Opponent</th>
                <th>Distance</th>
              </tr>
            </thead>
            <tbody>
              {data[season].map((item, index) => (
                <tr key={index}>
                  <td>{item.player}</td>
                  <td>{item.game}</td>
                  <td>{item.team}</td>
                  <td>{item.opp}</td>
                  <td>{item.distance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default Archive;
