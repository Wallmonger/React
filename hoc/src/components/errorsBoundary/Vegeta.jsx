import { Component } from 'react';
import vegeta from '../img/vegeta.png';
import handleClicks from './handleClicks';

class Vegeta extends Component 
{    
    render() {

        const {backGround, clickHandler} = this.props;

        return (
            <div className={`col ${backGround}`}>
                <img onClick={clickHandler} src={vegeta} alt="vegeta" height="400px"></img><br/>
            </div>
        )
    }
}

export default handleClicks(Vegeta)