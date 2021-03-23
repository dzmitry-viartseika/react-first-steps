import React from 'react';
import './test.scss'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const customCss = {
        border: '10px solid green',
    }

    const fontS = {
        fontSize: '60px'
    }

    return (
        <div className="test" style={ customCss }>
            <h1 style={fontS}>Test</h1>
            <button onClick={props.onChangeTitle}>Click 1</button>
            <button>+</button>
            <button>-</button>
        </div>
    )
};


