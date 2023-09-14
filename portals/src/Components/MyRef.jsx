import { Component, createRef } from 'react';

class MyRef extends Component 
{
    constructor(props) {
      super(props)
    
      this.state = {
        value: ''
      }

      this.myTitle = createRef();
      this.myInput = createRef();

      console.log(this.myTitle)
    }

    addFocus = () => { 
        this.myInput.current.focus();
    }


    render() {

        return (
            <div>
                <input ref={this.myInput} type="text"/>
            </div>
        )
    }
}

export default MyRef;