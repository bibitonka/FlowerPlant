import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Update(){
    const { id } = useParams();
    const navigate = useNavigate();

    const [plants, setPlants] = useState(() => {
        const savedPlants = localStorage.getItem("plants");
        return savedPlants ? JSON.parse(savedPlants) : [];
    });

    useEffect (() => {
        localStorage.setItem("plants", JSON.stringify(plants));
    }, [plants]);

    const plant = plants.find((plant) => plant.id === Number(id));

    const [name, setName] = useState("");
    const [latin, setLatin] = useState("");
    const [light, setLight] = useState("");
    const [water, setWater] = useState("");
    const [soil, setSoil] = useState("");
    const [level, setLevel] = useState("");

    useEffect(() => {
        if (plant) {
            setName(plant.name);
            setLatin(plant.latin);
            setLight(plant.light);
            setWater(plant.water);
            setSoil(plant.soil);
            setLevel(plant.level);
        }
    }, [plant]);

function updateHandler(e) {
    e.preventDefault();

    const updatedPlant = {
        id: Number(id),
        name: name,
        latin: latin,
        light: light,
        water: water,
        soil: soil,
        level: level,
    };

    const updatedPlants = plants.map((plant) => 
    plant.id===Number(id) ? updatedPlant : plant
);

setPlants(updatedPlants);

navigate("/myplants");
}

    return (
        <div>
            <h2>Update Plant</h2>

            {plant ? (
                <form onSubmit={updateHandler}>
                    <div>
                        <label htmlFor="id">ID: </label>
                        <input id="id" type="number" value={id} readOnly />
                    </div>

                    <div>
                        <label htmlFor="name">Plant name:</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            required
                            onChange={(e) => setName(e.target.value)}
                            />
                    </div>

                    <div>
                        <label htmlFor="latin">Scientific name:</label>
                        <input
                            id="latin"
                            type="text"
                            value={latin}
                            required
                            onChange={(e) => setLatin(e.target.value)}
                            />
                    </div>

                    <div>
                        <label htmlFor="light">Light requirements:</label>
                        <input
                            id="light"
                            type="text"
                            value={light}
                            required
                            onChange={(e) => setLight(e.target.value)}
                            />
                    </div>

                    <div>
                        <label htmlFor="water">Watering:</label>
                        <input
                            id="water"
                            type="text"
                            value={water}
                            required
                            onChange={(e) => setWater(e.target.value)}
                            />
                    </div>

                    <div>
                        <label htmlFor="soil">Soil requirements:</label>
                        <input
                            id="soil"
                            type="text"
                            value={soil}
                            required
                            onChange={(e) => setSoil(e.target.value)}
                            />
                    </div>

                    <div>
                        <label htmlFor="level">Difficulty level:</label>
                        <input
                            id="level"
                            type="text"
                            value={level}
                            required
                            onChange={(e) => setLevel(e.target.value)}
                            />
                    </div>

                    <button type="submit">Update</button>
                </form>
            ) : (
                <p> Plant not found. </p>
            )}
        </div>
    );
}