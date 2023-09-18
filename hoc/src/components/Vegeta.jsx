import { Component } from 'react';
import vegeta from '../img/vegeta.png';

class Vegeta extends Component 
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
                <img onClick={this.handleClick} src={vegeta} alt="vegeta" height="400px"></img><br/>
            </div>
        )
    }
}

export default Vegeta