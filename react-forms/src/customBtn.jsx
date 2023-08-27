import React from 'react';

const customBtn = ({children, fontColor, background, radius}) => {

    children = children ? children : 'Default';
    fontColor = fontColor ? fontColor : 'black';
    background = background ? background : '#757575';
    radius = radius ? radius : '7px';

    const customBtnStyle = {
        backgroundColor : background,
        border: 'none',
        color: fontColor,
        fontSize : "19px",
        padding: '15px 30px',
        textAlign : 'center',
        textDecoration: 'none',
        borderRadius: radius,
        display : 'block',
        margin: '5px auto'

    }

    return (
        <React.Fragment>
            <button style={customBtnStyle}>{children}</button>
        </React.Fragment>
    )
}

export default customBtn;