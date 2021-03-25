import React, {Component} from 'react'
import './App.css';
import QuoteContainer from './QuoteContainer.js'


class App extends Component{
  constructor() {
       super()
       this.state = {
         Quotes: [],
        
       }
  }

 /*
      apiCall = async () => {
      const response = fetch('http://localhost:9000/', { mode: 'no-cors' })
       const myJson = response.json() 
    };
  
  componentDidMount() {
  this.apiCall().then(myJson => {
  this.setState({Quotes: myJson})
})
};
*/
 sometext = '';
  consolelogging(sometext){
   console.log(sometext);
 }
datastructuremap() {
  const response = fetch('http://localhost:9000/', { mode: 'no-cors' })
 let  myconsolelog  = response.Json;  
  console.log(myconsolelog);
  };


  

  render() { 
  return (
    <div className="App">
      <header className="App-header">
  <label>Auteur</label><br></br>
   <input type="text"></input><br></br>
   <button onClick={()=> {this.datastructuremap()}} className="btn btn-primary">Submit</button><br></br>
      <QuoteContainer Quotes={this.state.Quotes}/>
      </header>
      
    </div>
  )};

  }
export default App;