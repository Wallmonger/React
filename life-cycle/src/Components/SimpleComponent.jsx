import React, { Component } from 'react';

export class SimpleComp extends Component {
    render() {

        console.log('%c simple component render()', 'color : blue')

        return (
            <div>
                Simple component
            </div>
        )
    }
}

export default SimpleComp