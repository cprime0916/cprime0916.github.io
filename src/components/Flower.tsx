import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/div.css';

const Flower: React.FC = () => {
    const { flower } = useParams();
    let name = "";
    let text = "UNDEFINED BEHAVIOUR";
    if(flower === "ole"){
        name = "Nerium oleander";
        text = "The Nerieae tribe belongs to the family Apocynaceae and includes plants such as “Nerium”, which is best known for the Nerium oleander, or simply 'Oleander'. \nIt is a plant cultivated in the Mediterranean Basin. ";
    } else if(flower === "tab"){
        name = "Tabernaemontana pandacaqui";
        text = "Tabernaemontana pandacaqui is a species of flowering plant in the family Apocynaceae, commonly known as windmill bush or banana bush.\n This species is native to Southeast Asia and the Pacific islands, \nand is notable for its ornamental and medicinal value.";
    } else if(flower === "yb"){
        name = "Tecoma stans";
        text = "Tecoma stans has many medicinal functions, mainly used to treat diabetes and digestive tract diseases. The juice of its leaves can inhibit Candida albicans infection; the roots can be used as medicine, as a diuretic, anthelmintic and stimulant. The flowers are brightly colored and have a long flowering period, and it has become a popular ornamental tree around the world.";
    } else if(flower === "rt"){
        name = "Ruellia tuberosa";
        text = "It is a plant native to Central & South America, but it is also naturalised in Asian region, and it grows in places like yards & gardens.\nIt has trumpet-shaped & purple flowers.\n";
    } else if(flower === "bb"){
        name = "Bauhinia blakeana";
        text = "Bauhinia x blakeana, also commonly called the Hong Kong Orchid Tree, is a hybrid species developed in Hong Kong between Bauhinia purpurea and Bauhinia variegata, both of which are native to various parts of Asia. Its native habitat is terrestrial.";
    }
    const source = `/src/assets/${flower}.jpg`
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