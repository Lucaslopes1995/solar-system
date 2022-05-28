import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <div id="div-missions">

          <Title headline="Missões" />
        </div>
        <div id="mission-div">

          {missions.map((missao) => (<MissionCard
            key={ missao.name }
            name={ missao.name }
            year={ missao.year }
            country={ missao.country }
            destination={ missao.destination }
          />))}
        </div>
      </div>
    );
  }
}

export default Missions;
