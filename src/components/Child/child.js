import React from 'react';
import classes from './child.module.scss'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const inputClasses  = [];

    const style = {
        border: '1px solid red',
        boxShadow: '0 4px 5px 0 rgba(0,0,0, .14)',
    }

    inputClasses.push(props.title !== '' ? 'green' : 'red');


    return (
        <div className={classes.child}>
            <div style={style}>
                Child: { props.title }
            </div>
            <h1>{ props.children }</h1>
            <input
                type="text"
                onChange={props.onChangeHeadline}
                value={props.title}
                className={classes['child__input']}
            />
            <button onClick={props.onChangeTitle}>Click</button>
            <button onClick={props.onDeleteCar}>Delete Car</button>
        </div>
    )
};
