import { Component } from 'react'

export class ClassCount extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            count: 0    
        }
    }

    componentDidMount() { 
        document.title = `You clicked ${this.state.count} times`;
    }

    componentDidUpdate(prevProps, prevState) {
        document.title = `You clicked ${this.state.count} times`;
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.setState({count: this.state.count + 1})} className='btn btn-success w-25'>Set (C) count</button>
            </div>
        )
    }
}

export default ClassCount