import React, {Component} from 'react'
import './App.css';
import './QuoteContainer';
import QuoteContainer from './QuoteContainer';

class App extends Component{
  constructor() {
       super()
       this.state = {
         Quotes: []
        
       }
  }

 
      apiCall = async () => {
      const response = await fetch('127.0.0.1',{method:'get'}, {headers: {
        "access-control-allow-origin" : "*",
        "Content-type": "application/json; charset=UTF-8",
        "Accept": "application/json"
      }},{mode: 'cors'})
       const myJson = await response.json()
          };
  
  componentDidMount() {
  this.apiCall().then(myJson => {
  this.setState({Quotes: myJson})
})
};
  render() { 
  return (
    <div className="App">
      <header className="App-header">
  <label>Auteur</label><br></br>
   <input type="text" id='userInput'></input><br></br>
   <button onClick={()=> this.componentDidMount()} className="btn btn-primary">Submit</button><br></br>
     <QuoteContainer />

      </header>
      
    </div>
  )};

  }
export default App;