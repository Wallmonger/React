//#region Shortcuts

// rce shortcut for class component
// rconst to generate default constructor
// cdm to generate componentDidMount
//#endregion
import { Component } from 'react'
import ChildComponent from './Components/ChildComponent';

class LifeCycle extends Component {

    constructor(props) {
        // super() to access parent class properties
        super(props)
        
        this.state = {
            name : 'Jan',
            step : 1
        }

        console.log(`Step ${this.state.step} | Location : Constructor`)
    }

    // Only accessible when everything including children are loaded
    componentDidMount() { 
        console.log(`Step ${this.state.step} | Location : componentDidMount()`);
    }

  render() {

    console.log(`Step ${this.state.step} | Location : Render`)

    return (
        <div>
            { console.log(`Step ${this.state.step} | Location : Update DOM`)}
            <p>Loading : Step {this.state.step}</p>
            <p>Name : {this.state.name}</p>

            <ChildComponent />
        </div>
    )
  }

}

export default LifeCycle