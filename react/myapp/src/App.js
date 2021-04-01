import React, { useState } from 'react';
import Component from 'react';
import './App.css';
import axios from "axios";
import devalue from "devalue";

const App = () => {
 const [value, setValue] = useState();
  const [Quote, setQuote] = useState();

  function unescapeQuote(input){
    var e = document.createElement('textarea');
    e.innerHTML = input;
    // handle case of empty input
    const a =  e.childNodes.length === 0 ? "" & {} : e.childNodes[0].nodeValue;
    return a;
  }

  
  
function countQuotes(textObject) {
  let seperateur = '}'
  const calculSeparateurNumber = (textObject.lastIndexOf('}'));
  return (calculSeparateurNumber);
}

function findQuote(value, jsonObject) {
  let lines = jsonObject.split('}');  
        if (jsonObject.includes(value)) {
        for (let i = 0; i < lines.length-1; i++) {            
       return lines[i]
        }

  }
}

  const handleClick = async () => {
    const response = await axios.get(`http://localhost:9000/Quote/${value}`, {headers : {'Access-Control-Allow-Origin': '*'}, 'Content-Type': 'application/json'});
    const myJson = await response.data;
    const unescapeObject =  unescape(myJson);
    console.log(unescapeObject);
   /* const rawStringObject =  unescapeQuote(myJson);
    console.log(rawStringObject);
    return rawStringObject;*/
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