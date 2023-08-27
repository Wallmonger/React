import React from 'react';

const customBtn = ({btnStyle, children, callback}) => {

    const customBtnStyle = {
        backgroundColor : 'grey',
        border: 'none',
        color: 'white',
        fontSize : "19px",
        padding: '15px 30px',
        textAlign : 'center',
        textDecoration: 'none',
        borderRadius: '7px',
        display : 'block',
        margin: '5px auto',
        cursor: 'pointer'

    }

    return <button onClick={callback} style={{ ...customBtnStyle, ...btnStyle }}>{children}</button>
}

export default customBtn;