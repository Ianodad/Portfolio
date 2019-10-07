import React from 'react'
import './css/headline.css';


const headline=(props)=> {
    return (
        <div>
        <h1 className={props.name} data-heading={props.data}>{props.headln}</h1>
        </div>
    )
}

export default headline
