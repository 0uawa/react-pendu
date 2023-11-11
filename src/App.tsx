import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './App.css'
import Pendu from './Pendu';

function App() {

  // let navigate = useNavigate(); 
  // const routeChange = () =>{ 
  //   navigate(`./Pendu.tsx`);
  // }
  const [word, setword] = useState("")
  

  return (
    <>
      <p>Choose a word : </p>
      <input id='wordChoosen'type='text' onChange={(e) => setword(e.target.value)}/>
      <button>submit</button>
      <p></p>
      <Pendu/>
    </>
  )
}

export default App
