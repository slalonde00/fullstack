import React from 'react';
import QuoteData from './Quote.js';

function QuoteContainer() {
    return <p>Some Quotes</p>
}
/*
const QuoteContainer = props => {
const displayQuotes = () => {
    return props.QuoteData.map(Quotes=> {
        return <QuoteData Quote={QuoteData}/>
    })
}
    return (
        <>
    {displayQuotes()}
    </>
    )   
}
*/
export default QuoteContainer