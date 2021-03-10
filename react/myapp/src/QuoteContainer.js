import React, {Component} from 'react'


class QuoteContainer extends Component{
  constructor() {
       super()
       this.state = {
           Quote: ''
       }
  }

  changeQuote() {
    this.setState({
      Quote:'Quotes goes here'
    })
      
  }
  render() {
      return (
        <div>
        <button onClick={()=> this.changeQuote()} class="btn btn-primary">Submit</button><br></br>
          <br></br><label>
              {this.state.Quote} 
          </label>
          </div>
      )
  }

}

export default QuoteContainer;
