import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <>
        <div id="planetas-div">

          <Title headline="Planetas" />
        </div>
        <div data-testid="solar-system" id="divs-todos-planetas">
          {Planets.map((planeta) => (<PlanetCard
            key={ planeta.name }
            planetName={ planeta.name }
            planetImage={ planeta.image }
          />))}
        </div>
      </>

    );
  }
}

export default SolarSystem;
