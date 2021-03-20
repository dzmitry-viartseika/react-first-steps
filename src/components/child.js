import React from 'react';

const Child = (props) => (
    <div>
        <div>
            Child: { props.title }
        </div>
        <h1>{ props.children }</h1>
        <button onClick={props.onChangeTitle}>Click</button>
    </div>
)

export default Child;
