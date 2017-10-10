import React, { Component } from 'react';
import Cource from './components/Cource'

class App extends Component {
  render() {
    return (
        <div className="row">
            <Cource />
            <Cource />
            <Cource />
        </div>
    );
  }
}
export default App;
