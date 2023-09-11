import { Component } from 'react';
import SimpleComp from './SimpleComponent';
import PureComp from './PureComponent';
import FunctionComp from './FunctionComponent';

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'name1'
      }
    }

    // shouldComponentUpdate(nextProps, nextState) { 
    //     console.log('ShouldComponentUpdate()');    

    //     // console.log(this.state.name);
    //     // console.log(nextState);

    //     // if (this.state.name !== nextState.name) 
    //     //     return true;
        
    //     return true;
    // }

    changeName = () => {
        this.setState({
            name: 'name2'
        })
    }

    render() {

        console.log('%c PARENT COMPONENT RENDER()', 'color: red; font-size: 14px; font-weight: bold')

        return (
            <div>
                <p>
                    <span className='red'>Parent Component: </span>
                    {this.state.name}
                </p>

                <SimpleComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
                <FunctionComp name={this.state.name}/>

                <button onClick={this.changeName}>Change State Name</button>           
            </div>
        )
    }
}

export default ParentComponent;