import React from "react"

export function Button(props){
    return(
        <>
            <button className={props.type}>{props.type}</button>
        </>
    )
}