import React, { useEffect, useState } from 'react';
import "../css/div.css";

const choiceObject: any = {
    question: "Is the flower white?",
    yes: {
        question: "Does the plant have lance-shaped leaves?",
        yes: {
            answer: "Nerium oleander",
            alias: "ole",
        },
        no: {
            answer: "Tabernaemontana pandacaqui",
            alias: "tab",
        },
    },
    no: {
        question: "Is the flower trumpet-shaped?",
        yes: {
            question: "Is it yellow?",
            yes: {
                answer: "Yellow-bells",
                alias: "yb",
            },
            no: {
                answer: "Ruellia tuberosa",
                alias: "rt",
            },
        },
        no: {
            question: "Is it native to South America?",
            yes: {
                answer: "Bougainvillea spectabilis",
                alias: "bs",
            },
            no: {
                answer: "Bauhinia blakeana",
                alias: "bb",
            }
        }
    },
};

const Game: React.FC = () => {
    const [nowKey, setNowKey] = useState(choiceObject);
    useEffect(() => {
        
        if(nowKey.answer !== undefined){
            // alert(`${nowKey.alias}`);
            location.assign(`flower/${nowKey.alias}`)
        }
    }, [nowKey]);
    return (
        <>
            <div className="container">
                <p>{nowKey.question}</p>
            </div>
            <div className="options">
                <button onClick={() => setNowKey(nowKey.yes)}>Yes</button>
                <button onClick={() => setNowKey(nowKey.no)}>No</button>
            </div>
        </>
    );
}

export default Game;