import React, { useState } from 'react';
import './App.css';
import axios from "axios";

const App = () => {
  const [value, setValue] = useState();
  const [Quotes, setQuotes] = useState();
  
 const handleClick = async () => {
const fetchedData = await axios.get(`127.0.0.1/${value}`)
setQuotes(fetchedData.Quote.author);
console.log(fetchedData.Quote.author);
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
      <input type="text" value={value} onChange={handleInputChange} /><br></br>
        <button variant="primary" onClick={handleClick} className="mt-3 mb-3">Submit</button>
      </form>
    </header>
    <main className="App-main">
    {Quotes && Quotes.map(r => <div key={r.author}>   </div>)}
    </main>
    </div>  
    
  )
}

export default App;