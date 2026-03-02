import { useState, useEffect} from "react";
import PlantList from "../components/PlantList";
import SearchField from "../components/SearchField";

export default function MyPlants(){
    const [plants, setPlants] = useState(() => {
        const savedPlants = localStorage.getItem("plants");
        return savedPlants ? JSON.parse(savedPlants) : [];
    });

    const [filterText, setFilterText] = useState(()=> {
        const savedFilter=localStorage.getItem("filterText");
        return savedFilter ? savedFilter : "";
    })

    const [showForm, setShowForm] = useState(false);

    const [name, setName] = useState("");
    const [latin, setLatin] = useState("");
    const [light, setLight] = useState("");
    const [water, setWater] = useState("");
    const [soil, setSoil] = useState("");
    const [level, setLevel] = useState("");

    function createHandler(e) {
  e.preventDefault();

  const highestId =
    plants.length > 0 ? Math.max(...plants.map((p) => p.id)) : 0;

  const newPlant = {
    id: highestId + 1,
    name,
    latin,
    light,
    water,
    soil,
    level,
  };

  setPlants([...plants, newPlant]);

  setName("");
  setLatin("");
  setLight("");
  setWater("");
  setSoil("");
  setLevel("");

  setShowForm(false);
}

    useEffect(() => {
        localStorage.setItem("plants", JSON.stringify(plants));
    }, [plants]);

    useEffect(() =>{
        localStorage.setItem("filterText", filterText);
    }, [filterText]);

    const filteredPlants = plants.filter((plant) =>
        plant.name.toLowerCase().includes(filterText.toLowerCase()) || 
        plant.level.toLowerCase().includes(filterText.toLowerCase())
    );

    function handleInputChange(event) {
        setFilterText(event.target.value);
    }
    
    return (
    <div className="my-plants-page">
        <h2>My Plants</h2>
    
    <section className="my-plants-controls">
    {!showForm && (
  <button type="button" onClick={() => setShowForm(true)}>
    Add New Plant
  </button>
)}
        {showForm && (
  <form onSubmit={createHandler}>
    <h3>Create a new plant guide</h3>

    <div>
      <label htmlFor="name">Common name: </label>
      <input
        id="name"
        type="text"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
      />
    </div>

    <div>
      <label htmlFor="latin">Scientific name: </label>
      <input
        id="latin"
        type="text"
        value={latin}
        required
        onChange={(e) => setLatin(e.target.value)}
      />
    </div>

    <div>
      <label htmlFor="light">Light requirement: </label>
      <input
        id="light"
        type="text"
        value={light}
        required
        onChange={(e) => setLight(e.target.value)}
      />
    </div>

    <div>
      <label htmlFor="water">Watering cycle: </label>
      <input
        id="water"
        type="text"
        value={water}
        required
        onChange={(e) => setWater(e.target.value)}
      />
    </div>

    <div>
      <label htmlFor="soil">Soil type: </label>
      <input
        id="soil"
        type="text"
        value={soil}
        required
        onChange={(e) => setSoil(e.target.value)}
      />
    </div>

    <div>
      <label htmlFor="level">Difficulty level: </label>
      <input
        id="level"
        type="text"
        value={level}
        required
        onChange={(e) => setLevel(e.target.value)}
      />
    </div>

    <div>
        <button type="submit">Create plant</button>
         <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
    </div>
  </form>
)}
        <SearchField handleInput={handleInputChange} filterText={filterText} />
        </section>

        <section className="my-plants-cards">
        {plants.length > 0 ? (
            <PlantList plants={filteredPlants} setPlants={setPlants}/>
        ) : (
            <p>Sorry, no plants to show...</p>
        )}
        </section>
    </div>
    );
}