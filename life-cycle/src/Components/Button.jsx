import {memo, Fragment} from 'react';

function ButtonChange ({callback}) {

    console.log('%c Button Render()', 'color : skyblue');

    return (
        <Fragment>
            <button onClick={callback}>Change State Name</button> 
        </Fragment>
    )

}

export default memo(ButtonChange);