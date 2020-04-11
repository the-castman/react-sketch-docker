import React from 'react'
import Wordlist from 'src/components/Wordlist';


const Overview = () => {
    const overviewWordsOfTheDay = ["Monday", "Tuesday", "Wednesday"];
    
    return (
        <div>
            <h1>Hello overview!</h1>
            <Wordlist words={overviewWordsOfTheDay} />
        </div>
    )
}

export default Overview;
