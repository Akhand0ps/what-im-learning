import { useState } from 'react'

import './App.css'


//crete a react component that takes todos as an input and renders them

function App() {
  
  return (
    <>
      
      <Todo title='go to gym' description='do 30 pushups' done={false} />
        
    </>
  )
} 

interface Todoprop {
  title:string,
  description: string,
  done:boolean
}


function Todo(props: Todoprop){
  return <div>
    <h1>
      {props.title}
    </h1>

     <h1>
      {props.description}
    </h1>

     <h1>
      {props.done ? "Done" : "Not Done"}
    </h1>
  </div>
}

export default App
