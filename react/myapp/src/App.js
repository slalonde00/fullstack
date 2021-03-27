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

  userAction = async () => {
  const response = await fetch('https://api.imgflip.com/get_memes');
  const myJson = await response.json();
  console.log(myJson.data.memes[0].url);

  function getLink() {
      let urlarray = []
      let i = document.getElementById('userInput').value
      console.log(i);
          urlarray[i] = myJson.data.memes[i].url;
          const imgElement = document.createElement('img')
          document.getElementById('quoteContainer').appendChild(imgElement)
          imgElement.src = urlarray[i];

  }

 getLink();

  }

  render() { 
  return (
    <div className="App">
      <header className="App-header">
  <label>Auteur</label><br></br>
   <input type="text" id='userInput'></input><br></br>
   <button onClick={()=> {this.userAction()}} className="btn btn-primary">Submit</button><br></br>
      <div id='quoteContainer'>

      </div>
      </header>
      
    </div>
  )};

  }
export default App;