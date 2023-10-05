import { Component } from 'react';
import Count from './components/Count';
import './App.css';


class App extends Component 
{
  render() {
    return (
      <div className='text-center'>
          <Count />
      </div>
    )
  }
}

export default App;
