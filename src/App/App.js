import React from 'react';
import GoatCorral from '../components/GoatCorral/GoatCorral';
import './App.scss';
import goatData from '../helpers/data/goatData';

class App extends React.Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  render() {
    const { goats } = this.state;

    return (
      <div className="App">
        <h1>INSIDE APP COMPONENT</h1>
        <GoatCorral goats={goats}/>
      </div>
    );
  }
}
// first "goats" on line 22 must match word inside brackets on line 5 in GoatCorral.js

export default App;

// apps need a render function and inside, it must return something (jsx)
