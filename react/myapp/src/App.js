import React, {Component} from 'react'
import './App.css';
import QuoteContainer from './QuoteContainer.js'


class App extends Component{
  constructor() {
       super()
       this.state = {
           Quotes: []
       }
  }

 
      apiCall = async () => {
      const response = await fetch('http://localhost:9000/', { mode: 'no-cors' })
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
   <input type="text"></input><br></br>
   <button onClick={()=> this.componentDidMount()} className="btn btn-primary">Submit</button><br></br>
      <QuoteContainer Quotes={this.state.Quotes}/>
      </header>
      
    </div>
  )};

  }
export default App;