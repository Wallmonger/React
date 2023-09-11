import { PureComponent } from 'react';

export class PureComp extends PureComponent {
    render() {

        const {name} = this.props;

        console.log('%c PureComponent Render()', 'color : green; font-size: 14px; font-weight: bold')

        return (
            <div>
                <p>
                    <span className='green'>PureComponent: </span>
                    {this.props.name}
                </p>
            </div>
        )
    }
}

export default PureComp