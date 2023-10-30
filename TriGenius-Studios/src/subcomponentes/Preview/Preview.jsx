import React from 'react'
import './Preview.css'

export function Preview(props) {
    return (
        <div className='Preview'>
            <img src={props.previewUrl}/>
            <h1>{props.tittle}</h1>
        </div>
    )
}

