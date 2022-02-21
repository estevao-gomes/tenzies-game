import React from "react"

export default function Die(props){
  const style = !props.isWon? {
    backgroundColor: props.isSet? "Black" : "White",
    color: props.isSet? "White" : "Black"
  } :
  {
    backgroundColor: "Green",
    color: "White" 
  }
    return(
      <div className="die" id ={props.id} style = {style} onClick={props.setter}>
          <h2><strong>{props.value}</strong></h2>
        </div>
    )
}