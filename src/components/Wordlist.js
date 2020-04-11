import React from 'react'

export default function Wordlist(props) {
    const { words } = props;

    return (
        <div>
            <h4>Words of the day:</h4>
            <ul>
                { words && words.map((word, index) => {
                    return <li key={`${word}-${index}`}>{word}</li>
                }) }
            </ul>
        </div>
    )
}
