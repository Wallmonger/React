import { Component } from 'react';
import vegeta from '../../img/vegeta.png';


class VegetaRender extends Component 
{

    state = {
        hits : 0
    }

    addOne = () => {
        this.setState(prevState => {
            return {
                hits: prevState.hits + 1
            }
        })
    }

    render() {
        return (
        <div className="col">
            <img src={vegeta} alt="vegeta" height="400px"></img>
            <br />
            <button onClick={this.addOne} className='btn btn-success mt-3'>{this.props.name()} attacks</button>

            <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Hits</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{this.state.hits}</td>
                </tr>
            </tbody>
            </table>
        </div>
        )
    }
}

export default VegetaRender