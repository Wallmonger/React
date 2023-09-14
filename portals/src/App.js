import { Component, createRef } from 'react';
import './App.css';
import MyRef from './Components/MyRef';

class App extends Component 
{
  constructor(props) {
    super(props)
  
    this.refComp = createRef();
  }

  handleClick = () => this.refComp.current.addFocus();
  


  render () {
    return (
      <div className='App'>
          <MyRef ref={this.refComp}/>
          <button onClick={this.handleClick}>Valider</button>
      </div>
    );
  }
}





export default App;

//#region portals
// class App extends Component {

//   constructor(props) {
//     super(props)
  
//     this.state = {
//       showModal: false   
//     }
//   }

//   handleShow = () => {
//     this.setState({
//       showModal : true
//     })
//   }

//   handleHide = () => {
//     this.setState({
//       showModal: false
//     })
//   }

//   render() {

//     const modal = this.state.showModal && <Modal close={this.handleHide}/>;

//     return (
//       <div className="App">
//         <button onClick={this.handleShow}>Toggle Modal</button>
//         {modal}
//       </div>
//     );
//   }

// }
//#endregion