import { Component } from 'react';
import './App.css';
import LifeCycle from './LifeCycle';

class App extends Component {

  render() {
    return (
      <div className="App">
          <LifeCycle name="Jambon"/>
      </div>
    );
  }
}

export default App;
