import { Component } from 'react';
import goku from '../img/goku.png';
import countHits from './countHits';

class Goku extends Component {
    render() {

        const {name, addOneHit, hocState, life} = this.props;

        const lifeValue = life > 0 ? (<td>{life} %</td>) : (<td><span className='badge bg-danger'>You died</span></td>);

        const button = life > 0 ? (<button onClick={addOneHit} className="btn btn-success m-3">{name} attacks</button>) : (<button className='btn btn-danger m-3 disabled'>y a plus d'vie</button>)

        return (
        <div className="col">
            <img src={goku} alt="goku" height="400px"></img>
            <br />
            {button}

            <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">Hits</th>
                <th scole="col">HP</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{hocState.hits}</td>
                {lifeValue}
                </tr>
            </tbody>
            </table>
        </div>
        )
    }
}

export default countHits(Goku, 20)