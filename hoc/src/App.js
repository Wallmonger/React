import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Goku from './components/Goku';
import Vegeta from './components/Vegeta';


class App extends Component 
{
  constructor(props) {
    super(props)
  
    this.state = {
       vegeta: 100,
       goku: 100
    }
  }

  reduceLife = (param, power) => {
    if(param === 'Goku') 
      this.setState({
          vegeta: this.state.vegeta - power
      })
    else
      this.setState({
        goku: this.state.goku - power
    })
    
  }

  render () {
    return (
      <div className='container text-center'>
        <h1>Un titre très inspiré</h1>
        <hr />
  
        <div className='row'>
          <Goku name="Goku" life={this.state.goku} reduceHandler={this.reduceLife}/>
          <Vegeta name="Vegeta" life={this.state.vegeta} reduceHandler={this.reduceLife}/>
        </div>
  
      </div>
  
    );
  }
}

export default App;
