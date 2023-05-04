import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import phrases from './phrases.json';
import Author from './Author';

export default function Phrase({ setterBackground }) {
    const [phrase, setPhrase] = useState(
        phrases[Math.floor(Math.random() * phrases.length)]
    );

    const backgroundsList = [
        'linear-gradient(153deg, rgba(255,117,93,1) 0%, rgba(250,121,51,1) 35%, rgba(255,0,0,1) 100%)',
        'linear-gradient(238deg, rgba(255,93,93,1) 0%, rgba(250,51,51,1) 35%, rgba(218,9,9,1) 100%)',
        'linear-gradient(195deg, rgba(255,191,93,1) 0%, rgba(250,131,51,1) 35%, rgba(218,100,9,1) 100%)',
    ];
    useEffect(() => {
        setterBackground(
            backgroundsList[Math.floor(Math.random() * backgroundsList.length)]
        );
    }, [phrase]);

    const handleNewPhraseClick = () => {
        setPhrase(phrases[Math.floor(Math.random() * phrases.length)]);
    };

    return (
        <div
            className="phrase-container"
            style={{ background: phrase.background }}
        >
            <button onClick={handleNewPhraseClick}>Open cookie</button>

            <div className="phrase-square">
                <span className="phrase-text">{phrase.phrase}</span>
            </div>

            <Author author={phrase.author} />
        </div>
    );
}

Phrase.propTypes = {
    setterBackground: PropTypes.func.isRequired,
};
