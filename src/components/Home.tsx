import React from 'react';
import Game from './Game';
import '../css/div.css';

const Home: React.FC = () => {
    return (
        <>
            <div className="title">
                <h1>Bio coursework</h1>
                <h2>Made by Charles Hung, Ye Zimo, and Leroi Ho</h2>
            </div>
            <Game />
        </>
    );
}

export default Home;
