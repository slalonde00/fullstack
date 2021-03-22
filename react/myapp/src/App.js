import React from 'react'
import './App.css';
import QuoteContainer from './QuoteContainer.js'


const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';
const client = new MongoClient(url);
// Use connect method to connect to the server
client.connect(function(err) {
  assert.equal(null, err);
  console.log('Connected successfully to server');

  const db = client.db(dbName);

  client.close();
});


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
