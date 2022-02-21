import React from "react"
import './App.css';
import Main from './components/Main.js'
import Buttons from './components/Buttons.js'
import Die from './components/Die.js'
import Header from "./components/Header.js"

function App() {
  const[values, setValues] = React.useState(()=>{
    let array = []
    for(let i = 0; i<10; i++){
      array.push(
        {
          value: Math.floor(Math.random()*6)+1,
          set: false,
          id:i
        }
      )
    }
    return array
  })
  const[won, setWon] = React.useState(false)
  const dies = values.map((die, index) => <Die value = {die.value} key={index} id={die.id} isSet={die.set} setter={setter} isWon={die.isWon}/>)

  function isWon(){
    let isWon = true
    let value = values[0].value
    for(let i = 1; i < values.length; i++){
      if(values[i].value !== value){
        isWon = false
      }
    }
    if(isWon){
      setValues((oldValues)=>{
        const newValues = oldValues.map((oldValue)=>{
            return {
              ...oldValue,
              isWon: isWon
            }
          })
        return newValues
      })
      setWon(true)
    }
  }

  function newValues(){
      setValues((oldValues)=>{
        const newValues = oldValues.map((oldValue)=>{
          if(!oldValue.set){
            return {
              ...oldValue,
              value: Math.floor(Math.random()*6)+1
            }
          }else{
            return {
              ...oldValue,
            }
          }
        })
        return newValues
      })
  }



  function setter(event){
    const id = parseInt(event.currentTarget.id)
    setValues((oldValues)=>{
      const newValues = oldValues.map((oldValue)=>{
        if(oldValue.id===id){
          console.log(`Die ${id} set to ${!oldValue.set}`) 
          return {
          ...oldValue,
          set: !oldValue.set
        }}
        else{
          return oldValue
        }
      })
      return newValues
    })
    isWon()   
  }

  function unSetter(){
    setValues((oldValues)=>{
      const newValues = oldValues.map((oldValue)=>{
          return {
            ...oldValue,
            set: false,
            isWon: false
          }
      })
      return newValues
    })
    console.log(values)
  }

  function newGame(){
    unSetter();
    setWon(false);
    newValues()
  }
  return (
    <div className='main'>
      <Header />
      <Main dies={dies}/>
      <Buttons won = {won} change={won? newGame : newValues}/>
    </div>
  );
}

export default App;
