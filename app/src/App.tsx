import React, { Component } from 'react';

import Hello from './components/Hello';

class App extends Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <Hello />
        </header>
      </div>
    );
  }
}

export default App;
