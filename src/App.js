import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          id: '123',
          name: 'Linda',
        },
        {
          id: '234',
          name: 'Frank',
        },
        {
          id: '345',
          name: 'Jacky',
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
          <h1 key={this.state.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
