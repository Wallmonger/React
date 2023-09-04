//#region Shortcuts

// rce shortcut for class component
// rconst to generate default constructor
// cdm to generate componentDidMount
// cdup to generate componentDidUpdate
// clg consolelog
// cwun componentWillUnmount()
//#endregion
import { Component } from 'react'

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
        this.setState({
            name :  this.props.name,
            step : this.state.step +1
        })

        console.log(`Step ${this.state.step} | Location : After setState in componentDidMount()`)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(`Step ${this.state.step} | Location : ComponentDidUpdate`);
        console.log(prevState);
        console.log(this.state)
    } 

    componentWillUnmount() {
        console.log('this is componentWillUnmount()');
    }


    render() {
        console.log(`Step ${this.state.step} | Location : Render`)

        return (
            <div className='borderBox'>
                { console.log(`Step ${this.state.step} | Location : Update DOM`)}
                <p>Loading : Step {this.state.step}</p>
                <p>Name : {this.state.name}</p>
            </div>
        )
  }

}

export default LifeCycle