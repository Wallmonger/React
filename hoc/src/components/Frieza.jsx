import { Component } from 'react';
import frieza from '../img/frieza.png';
import handleClicks from './handleClicks';


class Frieza extends Component 
{
    render() {

        const {backGround, clickHandler} = this.props;

        return (
            <div className={`col ${backGround}`}>
                <img onClick={clickHandler} src={frieza} alt="frieza" height="400px"></img><br/>
            </div>
        )
    }
}

export default handleClicks(Frieza) 