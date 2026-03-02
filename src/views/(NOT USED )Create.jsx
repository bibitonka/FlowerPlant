import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";

export default function Create(){
    const [plants, setPlants] = useState (() => {
        const savedPlants=localStorage.getItem("plants");
        return savedPlants ? JSON.parse(savedPlants) : [];
    });

    const [name, setName] = useState("");
    const [latin, setLatin] = useState("");
    const [light, setLight] = useState("");
    const [water, setWater] = useState("");
    const [soil, setSoil] = useState("");
    const [level, setLevel] = useState("");
        
const navigate = useNavigate();

useEffect(() => {
    localStorage.setItem("plants", JSON.stringify(plants));
}, [plants]);

function createHandler(e) {
    e.preventDefault();

    const highestId =
        plants.length > 0 ? Math.max(...plants.map((plant) => plant.id)) : 0;

    const newPlant = {
        id: highestId + 1,
        name: name,
        latin: latin,
        light: light,
        water: water,
        soil: soil,
        level: level,
    };

    setPlants([...plants, newPlant]);
    navigate("/myplants");
}

    return (
        <form onSubmit={createHandler}>
            <h2>Create a new plant guide</h2>

            <div>
                <label htmlFor="name">Common name:</label>
                <input 
                    id="name" 
                    type="text"
                    value={name}
                    required
                    onChange={((e) => setName(e.target.value))} />
            </div>
            
            <div>
                <label htmlFor="latin">Scientific name:</label>
                <input 
                    id="latin" 
                    type="text"
                    value={latin}
                    required
                    onChange={((e) => setLatin(e.target.value))}
                    />
            </div>

            <div>
                <label htmlFor="light">Light requirement:</label>
                <input 
                    id="light" 
                    type="text"
                    value={light}
                    required
                    onChange={((e) => setLight(e.target.value))}
                    />
            </div>

            <div>
                <label htmlFor="water">Watering cycle:</label>
                <input 
                    id="water" 
                    type="text"
                    value={water}
                    required
                    onChange={((e) => setWater(e.target.value))}
                    />
            </div>

            <div>
                <label htmlFor="soil">Soil type:</label>
                <input 
                    id="soil" 
                    type="text"
                    value={soil}
                    required
                    onChange={((e) => setSoil(e.target.value))}
                    />
            </div>
            
            <div>
                <label htmlFor="level">Difficulty level:</label>
                <input 
                    id="level" 
                    type="text"
                    value={level}
                    required
                    onChange={((e) => setLevel(e.target.value))}
                    />
            </div>

            <button type="submit">Create a plant</button>
        </form>
    );
}