import { Component } from 'react';
import goku from '../img/goku.png';

class Goku extends Component 
{
    state = {
        bg: ''
    }

    handleClick = () => {
        this.setState({
            bg: 'bg-success'
        })
    }

    render() {
        return (
            <div className={`col ${this.state.bg}`}>
                <img onClick={this.handleClick} src={goku} alt="goku" height="400px"></img><br/>
            </div>
        )
    }
}

export default Goku