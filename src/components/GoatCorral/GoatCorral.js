import React from 'react';
import PropTypes from 'prop-types';
import Goat from '../Goat/Goat';
import goatShape from '../../helpers/propTypes/goatShape';

class GoatCorral extends React.Component {
  static propTypes = {
    goats: PropTypes.arrayOf(goatShape.goatShape),
  }

  render() {
    const { goats } = this.props;

    const goatCards = goats.map((goat) => (
    <Goat key={goat.id} goat={goat}/>
    ));

    return (
      <div>
        <h2>GET YOUR GOAT</h2>
        <div className="card-columns">
        { goatCards }
        </div>
      </div>
    );
  }
}

export default GoatCorral;
