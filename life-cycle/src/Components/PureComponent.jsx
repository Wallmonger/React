import React, { PureComponent } from 'react';

export class PureComp extends PureComponent {
    render() {

        const {name} = this.props;

        console.log('%c PureComponent render()', 'color : green')

        return (
            <div>
                Pure Component {name}
            </div>
        )
    }
}

export default PureComp