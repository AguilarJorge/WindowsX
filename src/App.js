import React, { useState } from 'react';
import './App.css';
import WelcomeScreen from './components/WelcomeLoader/WelcomeLoader';
import LoginScreen from './components/Login/Login';

function App() {
  const [loader, setLoader] = useState(true);
  setTimeout(function(){
    setLoader(false);
  }, 3000)
  return loader ? <WelcomeScreen/> : <LoginScreen/>;
}

export default App;
