import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReducerState from './components/ReducerState'
import HellowWorld from './components/HellowWorld'
import Users from './components/Users'
import { useState } from 'react'
import Basketball from './components/Basketball'
import Badminton from './components/Badminton'

const App = () => {
const [showPassword, setShowPassword] = useState(false);

  return (
    // <div style={{display: "flex", gap : ".5rem"}}>
    //   <input type={showPassword ? "text" : "password"} />
    //   <button onClick = {() => setShowPassword(!showPassword)}
    //   >{showPassword ? "Hide" : "Show"} Password</button>
    // </div>
    <Badminton/>
  );
};

export default App
