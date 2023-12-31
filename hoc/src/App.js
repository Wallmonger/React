import { Component } from 'react';
import './App.css';
import GokuRender from './components/prop-render/GokuRender';
import VegetaRender from './components/prop-render/VegetaRender';
import AddHits from './components/prop-render/AddHits';


class App extends Component 
{
  render() {
    return (
      <div className='container text-center'>
        <h1>Fight</h1>
        <div className='row'>
          {/* If AddHits state.fighter.compName == true, return Component, if not, return null  */}
          <AddHits 
            render = {(hits, addOne, fighters) => (
              fighters.vegeta && <VegetaRender hits={hits} addOne={addOne} name="Vegeta"/> 
            )}
          />
          
          <AddHits 
            render = {(hits, addOne, fighters) => (
              fighters.goku && <GokuRender hits={hits} addOne={addOne} name="Goku"/>
            )}
          />
        </div>
      </div>
    )
  }
} 

export default App;


//#region hoc
/* import Goku from './components/Goku';
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
} */
//#endregion

//#region errorBoundary
// render() {
//   return(
//     <div className='container text-center'>
//       <h1>Click</h1>
//       <div className='row'>

//         <ErrorBoundary>
//           <Vegeta/>
//         </ErrorBoundary>

//         <ErrorBoundary>
//           <Goku/>
//         </ErrorBoundary>


//         <ErrorBoundary>
//           <Frieza/>
//         </ErrorBoundary>
//       </div>
//     </div>
//   )
// }
//#endregion