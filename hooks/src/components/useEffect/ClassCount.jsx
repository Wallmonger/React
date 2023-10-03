import { Component } from 'react'

export class ClassCount extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            count: 0   ,
            name: '' 
        }
    }

    componentDidMount() { 
        document.title = `You clicked ${this.state.count} times`;
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.count !== prevState.count) {
            document.title = `You clicked ${this.state.count} times`;
            console.log("updated title");
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.setState({count: this.state.count + 1})} className='btn btn-success w-25'>Set (C) count</button>

                <div className="input-group my-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Change State Name</span>
                    <input type="text" value={this.state.name} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={e => {
                        this.setState({
                            name: e.target.value
                        })
                    }}/>
                </div>

                <p>State name : <span className='text-secondary'>{this.state.name}</span></p>
            </div>
        )
    }
}

export default ClassCount