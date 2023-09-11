import { Component } from 'react'

class MyComponent extends Component {


    constructor(props) {
        super(props)
        
        this.state = {
            name : 'Dev'
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('%c getDerivedStateFromProps launched', 'color : red; background : yellow; font-size : 15px; font-weight : 900');

        console.log(props);
        console.log(state);

        return null;
    }

    forceChange = () => {
        this.forceUpdate(() => {
            console.log('%c Force update, Skip shouldComponentUpdate', 'color : green; font-weight : 900; font-size : 15px');
        })
    }

    shouldComponentUpdate(nextProps, nextState) { 
        console.log('%c shouldComponentUpdate launched', 'color : blue; font-weight : 900; font-size : 15px');
        return true; 
    }


    render() {
        console.log('%c Render()', 'font-size : 15px; font-weight : 900');
        return (
            <div>
                <p>Name : {this.state.name}</p>
                <p>Age : {this.props.age}</p>
                <button onClick={this.forceChange}>force change update</button>
            </div>
        )
    }
}

export default MyComponent