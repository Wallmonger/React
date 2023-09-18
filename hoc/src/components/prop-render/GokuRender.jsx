import { Component } from 'react';
import goku from '../../img/goku.png';


class GokuRender extends Component 
{

    render() {

        const {hits, addOne, name} = this.props;
        return (
        <div className="col">
            <img src={goku} alt="goku" height="400px"></img>
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

export default GokuRender