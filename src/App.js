import React, { Component } from 'react';

import Persons1 from './containers/Persons1';
import Login from './components/auth';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Login />
      </div>
    );
  }
}

export default App;
