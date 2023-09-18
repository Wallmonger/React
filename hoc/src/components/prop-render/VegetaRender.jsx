import { Component } from 'react';
import vegeta from '../../img/vegeta.png';


class VegetaRender extends Component 
{

    render() {

        const {hits, addOne, name} = this.props;

        return (
        <div className="col">
            <img src={vegeta} alt="vegeta" height="400px"></img>
            <br />
            <button onClick={addOne} className='btn btn-success mt-3'>{name} attacks</button>

            <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Hits</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{hits}</td>
                </tr>
            </tbody>
            </table>
        </div>
        )
    }
}

export default VegetaRender