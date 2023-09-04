import { Component } from 'react';
import './App.css';
import LifeCycle from './LifeCycle';

class App extends Component {
  
  state = {
        display : true
  }

  switchDisplay = () => {
    this.setState({
      display : !this.state.display
    })
  }

  render() {

    const showComponent = this.state.display ? (<LifeCycle name="Jambon"/>) : (<div className='borderBox'>There is no component here</div>);
    

    return (
      <div className="App">
          { showComponent }

          <button onClick={this.switchDisplay}>Click here</button>
      </div>
    );
  }
}

export default App;
