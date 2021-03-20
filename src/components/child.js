import React from 'react';

const Child = (props) => (
    <div>
        <div>
            Child: { props.title }
        </div>
        <h1>{ props.children }</h1>
        <input type="text" onChange={props.onChangeHeadline} value={props.title}/>
        <button onClick={props.onChangeTitle}>Click</button>
        <button onClick={props.onDeleteCar}>Delete Car</button>
    </div>
)

export default Child;
