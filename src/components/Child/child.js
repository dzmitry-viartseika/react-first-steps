import React from 'react';
import './child.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const inputClasses  = [];

    inputClasses.push(props.title !== '' ? 'green' : 'red');

    return (
        <div className="child">
            <div>
                Child: { props.title }
            </div>
            <h1>{ props.children }</h1>
            <input
                type="text"
                onChange={props.onChangeHeadline}
                value={props.title}
                className={inputClasses}
            />
            <button onClick={props.onChangeTitle}>Click</button>
            <button onClick={props.onDeleteCar}>Delete Car</button>
        </div>
    )
};
