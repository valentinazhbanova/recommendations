import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';

function App() {
  const [advice, setAdvice] = useState('');

useEffect( () => {
  getAdvice()
}, [])

const getAdvice = async() => {
  const responce = await fetch(`http://www.boredapi.com/api/activity/`);
  const data = await responce.json();
  console.log(data.activity);
  setAdvice(data.activity);
}

  return (
    <div className="App">
      <p>{advice}</p>
      <button onClick={getAdvice}>Чем заняться, если скучно?</button>
    </div>
  );
}

export default App;
