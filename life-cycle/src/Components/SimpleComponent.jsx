import { Component } from 'react';

export class SimpleComp extends Component {
    render() {

        console.log('%c Simple Component Render()', 'color : blue; font-size: 14px; font-weight: bold')

        return (
            <div>
                <p>
                    <span className='blue'>Simple Component: </span>
                    {this.props.name}
                </p>
            </div>
        )
    }
}

export default SimpleComp