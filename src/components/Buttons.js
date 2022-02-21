import React from "react"

export default function Button(props){
    return(
        <div className="buttons" onClick={props.change}><h3>{!props.won? "Roll dices!" : "New Game!"}</h3></div>
    )
}