import {memo} from 'react';

function FunctionComp(props) {

    console.log('%c Function Component Render()', 'color: purple; font-size : 14px; font-weight: bold');

    return (
        <div>
            <p>
                <span className="purple">Function Component: </span>
                {props.name}
            </p>
        </div>
    )
}

/*  Export memo permet de réaliser la même vérification automatique des props 
    que la classe PureComponent, mais sur un composant de type fonction */
export default memo(FunctionComp) ;