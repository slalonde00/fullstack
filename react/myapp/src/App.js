import React from 'react'
import './App.css';
import QuoteContainer from './QuoteContainer.js'




function App() {
  return (
    <div className="App">
      <header className="App-header">
  <label>Auteur</label><br></br>
   <input type="text"></input><br></br>
   
     <QuoteContainer/>
      
      </header>
      
    </div>
  );
}

export default App;
