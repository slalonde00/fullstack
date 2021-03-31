import React, { useState } from 'react';
import Component from 'react';
import './App.css';
import axios from "axios";

const App = () => {
 const [value, setValue] = useState();
  const [Quote, setQuote] = useState();

  
  const handleClick = async () => {
    const response = await axios.get(`http://localhost:9000/Quote/${value}`, {headers : {'Access-Control-Allow-Origin': '*'}, 'Content-Type': 'application/json'});
    const myJson = await response.data;
    setQuote(myJson);
    console.log(myJson);
  }

 const handleSubmit = (event) =>{
  event.preventDefault();
}

 const handleInputChange = (e) => {
  setValue(e.target.value);
}

//{Quote && Quote.map(r => <div><label>{r.Quote} : </label></div>)}
 

  return (
    <div className="App">
    <header className="App-header">
      <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInputChange}id="userInput"/><br></br>
        <button variant="primary" onClick={handleClick} className="mt-3 mb-3">Submit</button>
      </form>
    </header>
    <main className="App-main">
    </main>
    </div>  
    
  )
  }
export default App;