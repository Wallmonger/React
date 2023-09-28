import { Component } from 'react';

class ClassState extends Component 
{
    constructor(props) {
      super(props)
    
      this.state = {
         counter: 0
      }
    }

    addOne = () => {
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    render() {
        return(
            <div>
                <p>Class State: {this.state.counter}</p>

                <button onClick={this.addOne} className='btn btn-success'>Increment class state</button>
            </div>
        )
    }
}

export default ClassState;