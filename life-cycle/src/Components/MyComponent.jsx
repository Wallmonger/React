import React, { Component } from 'react'

class MyComponent extends Component {


    constructor(props) {
        super(props)
        
        this.state = {
            name : 'Dev'
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('%c getDerivedStateFromProps launched', 'color : red; background : yellow; font-size : 15px');

        console.log(props);
        console.log(state);

        return null;
    }

  render() {
    return (
      <div>Hello world</div>
    )
  }
}

export default MyComponent