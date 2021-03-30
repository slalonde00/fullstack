import React, {Component} from 'react';

class QuoteDisplay extends Component{
    constructor() {
         super()
         this.state = {
           Quotes: [],
           get Quotes() {
             return this.Quotes;
           },
           set Quotes(value) {
             this.Quotes = value;
           },
         }
    }

    userAction = async () => {
        const response = await fetch('127.0.0.1',{method:'get'}, {headers: {"access-control-allow-origin" : "*","Content-type": "application/json; charset=UTF-8","Accept": "application/json"}},{mode: 'cors'})
        const myJson = await response.json()
        console.log(myJson.data.Quotes[0]);
        function displayData() {
            let QuotedataArray = []
            let i = document.getElementById('userInput').value
            console.log(i)
            QuotedataArray[i]=myJson.data.Quotes[i]
            console.log(QuotedataArray[i])
            const txtElement = document.createElement('p')
            document.getElementById('QuoteContainer').appendChild(txtElement);
            txtElement.innerText=QuotedataArray[i]

        }
      displayData();
    }

    QuoteHandler() {

 this.userAction();
    }

    render() {
        return( 
        <div >
            <header className="App-header">
                <label>Auteur</label><br></br>
                <input type="text" id='userInput'></input><br></br>
                <button onClick={()=>this.QuoteHandler()} className="btn btn-primary">Submit</button><br></br>
                <div id='QuoteContainer'></div>
            </header>
   

        </div>)
    }
}

export default QuoteDisplay