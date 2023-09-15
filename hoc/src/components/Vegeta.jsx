import { Component } from 'react';
import vegeta from '../img/vegeta.jpg';
import countHits from './countHits';

class Vegeta extends Component {
    render() {

        const {name, addOneHit, hocState} = this.props;

        return (
        <div className="col">
            <img src={vegeta} alt="vegeta" height="400px"></img>
            <br />
            <button onClick={addOneHit} className="btn btn-success m-3">{name} attacks</button>

            <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">Hits</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{hocState.hits}</td>
                </tr>
            </tbody>
            </table>
        </div>
        )
    }
}

export default countHits(Vegeta)