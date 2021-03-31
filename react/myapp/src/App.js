import React, { useState } from 'react';
import Component from 'react';
import './App.css';
import axios from "axios";

const App = () => {
 const [value, setValue] = useState();
  const [Quote, setQuote] = useState();

  
  const handleClick = async () => {
    const response = await axios.get(`https://127.0.0.1/9000/Quote/${value}`,   );
    const myJson = await response.json();
    this.value.setQuote(myJson.data);  
    console.log(myJson.Quote.author[0]);
      
  }

 const handleSubmit = (event) =>{
  event.preventDefault();
}

 const handleInputChange = (e) => {
  setValue(e.target.value);
}

  return (
    <div className="App">
    <header className="App-header">
      <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInputChange}id="userInput"/><br></br>
        <button variant="primary" onClick={handleClick} className="mt-3 mb-3">Submit</button>
      </form>
    </header>
    <main className="App-main">
    <div id="quotesContainer"></div>
    </main>
    </div>  
    
  )
  }
export default App;