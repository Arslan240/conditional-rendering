import { useState } from 'react'
import './App.css'
import {quotes} from './quotes'

function App() {
  const [messages, setMessages] = useState(["If life were predictable it would cease to be life"]);
  
  const addMessage = () => {
    if(quotes.length > messages.length){
      setMessages([...messages, quotes[messages.length]])
    }
  }
  const removeMessage = () => {
    setMessages(messages.slice(0, messages.length - 1))
    // console.log(messages.slice(0, messages.length - 1))
  }
  
  return (
    <div className="App">
      <h1>Conditional Rendering</h1>
      {
        // using double not to convert falsy or falsy values to boolean literals.
        !!messages.length &&
        messages.map((message) => (
          <h3 className='quote'>{message}</h3>
        ))
      }
      <button onClick={addMessage}>Add</button>
      <button onClick={removeMessage}>Clear</button>
    </div>
  )
}

export default App
