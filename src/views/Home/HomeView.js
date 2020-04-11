import React from "react";
import Wordlist from "src/components/Wordlist";

const HomeView = ({result}) => {
    const homeViewWords = ["Tom", "Hello", "Yes", "No"];

    return (
        <div>
            <h1>Hello HomeView! {result}</h1>
            <Wordlist words={homeViewWords} />        
        </div>
    );
}

export default HomeView;