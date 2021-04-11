import React, { useState } from 'react';
import './App.css';
import axios from "axios";


const App = () => {
 const [value, setValue] = useState();
  const [Quote, setQuote] = useState();

  function htmlDecode(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  }

function findQuote(value, jsonObject) {
  let foundQuote = [];       
  for (let i = 0; i < Object.keys(jsonObject.quotes).length; i++) {            
          if (jsonObject.quotes[i].author.includes(value)){       
          foundQuote.push(jsonObject.quotes[i].quote);
          
          }
        }

        return foundQuote;
  }

  const handleClick = async () => {
    const response = await axios.get(`http://localhost:9000/Quote/${value}`, {headers : {'Access-Control-Allow-Origin': '*'}, 'Content-Type': 'application/json'});
    const myJson = await response.data;
    const unescapedJson = htmlDecode(myJson);
    const jsonObject = JSON.parse(unescapedJson);
  const foundQuote = findQuote(value, jsonObject)
  setQuote(foundQuote);
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
      <label>{Quote}</label><br></br> 
    </header>
    </div>  
  )
  }
export default App;