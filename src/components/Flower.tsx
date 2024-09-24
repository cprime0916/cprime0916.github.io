import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/div.css';

const Flower: React.FC = () => {
    const { flower } = useParams();
    let name = "";
    let text = "UNDEFINED BEHAVIOUR";
    if(flower === "ole"){
        name = "Nerium oleander";
        text = "It is a plant cultivated in the Mediterranean Basin. ";
    } else if(flower === "tab"){
        name = "Tabernaemontana pandacaqui";
        text = "";
    } else if(flower === "yb"){
        name = "Yellow-bells";
        text = "";
    } else if(flower === "rt"){
        name = "Ruellia tuberosa";
        text = "It is a plant native to Central & South America, but it is also naturalised in Asian region, and it grows in places like yards & gardens.\nIt has trumpet-shaped & purple flowers.\n";
    } else if(flower === "bs"){
        name = "Bougainvillea spectabilis";
        text = "";
    } else if(flower === "bb"){
        name = "Bauhinia blakeana";
        text = "";
    }
    const source = `/bio/src/assets/${flower}.jpg`
    return (
        <>
            <div className="title">
                <h1>{name}</h1>
            </div>
            <img src={source} style={{width: 300, height: 300}} className="flower-container"></img>
            <p className="text">{text}</p>
        </>
    );
}

export default Flower;