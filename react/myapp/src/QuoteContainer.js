import React from 'react';
import Quote from './Quote';

const QuoteContainer = props => {
const displayQuotes = () => {
    return props.Quotes.map(Quote=> {
        return <Quote url={Quote.url}/>
    })
}
    return (
        <>
    {displayQuotes()}
    </>
    )   
}

export default QuoteContainer