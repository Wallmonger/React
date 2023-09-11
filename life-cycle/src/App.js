import { Component } from 'react';
import './App.css';
import ParentComponent from './Components/ParentComponent'


class App extends Component {

  render () {
    return (
      <div className='App'> 
        <ParentComponent />
      </div>
    )
  }

}

export default App;

//#region Comments
// Previous cycles
// state = {
//       display : true,
//       age : 24
// }

// addOneYear = () => {
//   this.setState((prevState) => ({
//     age : prevState.age + 1
//   }))
// }

// switchDisplay = () => {
//   this.setState({
//     display : !this.state.display
//   })
// }

// render() {

//   const showComponent = this.state.display ? (<LifeCycle name="Jambon"/>) : (<div className='borderBox'>There is no component here</div>);
  

//   return (
//     <div className="App">
//         { showComponent }

//         <button onClick={this.switchDisplay}>Click here</button>
//         <hr />

//         <MyComponent age={this.state.age} />
//         <button onClick={this.addOneYear}>Change props</button>
//     </div>
//   );
// }
//#endregion 