import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card" id="divs-planetas">
        <p data-testid="planet-name">{planetName}</p>
        <div className="img-container">

          <img
            id={ planetName }
            src={ planetImage }
            alt={ `Planeta ${planetName}` }
            className="img-planetas"
          />
        </div>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
