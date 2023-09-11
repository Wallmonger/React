import React, { Component } from 'react';
import SimpleComp from './SimpleComponent';

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'name1'
      }
    }

    shouldComponentUpdate(nextProps, nextState) { 
        console.log('ShouldComponentUpdate()');    

        console.log(this.state.name);
        console.log(nextState);

        if (this.state.name !== nextState.name) 
            return true;
        
        return false

    }

    changeName = () => {
        this.setState({
            name: 'name2'
        })
    }

    render() {

        console.log('%c PARENT COMPONENT RENDER()', 'color: red;')

        return (
            <div>
                <SimpleComp />
                <button onClick={this.changeName}>Change State Name</button>
                <p>{this.state.name}</p>
            </div>
        )
    }
}

export default ParentComponent;