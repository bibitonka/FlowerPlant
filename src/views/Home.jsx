import heroImage from "../assets/heroimage.jpg";
import { Link } from "react-router-dom";
import snakePlant from "../assets/snakeplant.png";
import spiderPlant from "../assets/spiderplant.png";
import fiddleFig from "../assets/fiddleleaffig.png";
import monsteraImg from "../assets/monstera.png";
import scheffleraImg from "../assets/schefflera.jpg";
import alocasiaImg from "../assets/alocasia.png";

export default function Home(){
    const predefinedPlants = [
        {
            id: 1,
            name: "Snake Plant",
            latin: "Sansevieria trifasciata",
            light: "Low to bright indirect light",
            water: "Every 2-3 weeks",
            soil: "Well-draining cactus or succulent mix",
            level: "Begginer",
            image: snakePlant,
        },
        {
            id: 2,
            name: "Spider Plant",
            latin: "Chlorophytum comosum",
            light: "Bright, indirect sunlight",
            water: "Every 1-2 weeks",
            soil: "Well-draining potting mix",
            level: "Intermediate",
            image: spiderPlant,
        },
        {
            id: 3,
            name: "Fiddle-Leaf Fig",
            latin: "Ficus lyrata",
            light: "Bright, indirect light (6+ hours)",
            water: "When top 2-3 inches of soil are dry",
            soil: "Well-draining, peat-based mix with perlite",
            level: "Expert",
            image: fiddleFig,
        },
        {
            id: 4,
            name: "Monstera",
            latin: "Monstera deliciosa",
            light: "Bright, indirect light",
            water: "When top 2–3 inches of soil are dry",
            soil: "Well-draining potting mix with peat and perlite",
            level: "Beginner",
            image: monsteraImg,
        },
        {
            id: 5,
            name: "Schefflera",
            latin: "Schefflera arboricola",
            light: "Bright, indirect light",
            water: "When top inch of soil is dry",
            soil: "Well-draining potting soil",
            level: "Easy to Intermediate",
            image: scheffleraImg,
        },
        {
            id: 6,
            name: "Alocasia",
            latin: "Alocasia amazonica",
            light: "Bright, indirect light (no direct sun)",
            water: "Keep soil lightly moist but not soggy",
            soil: "Rich, well-draining soil with perlite",
            level: "Intermediate",
            image: alocasiaImg,
        },
    ];
    
    return (
        <div className="home-page">
            <div className="hero-wrapper">
                <img 
                    src={heroImage} 
                    alt="Hero image"
                    className="hero-image"
                />
            </div>

            <section className="home-intro">
            <h2>Welcome to FlowerPlant</h2>
            <p>
                Explore plant care guides and create your own personal plant notes 
                so you can keep your plants healthy and happy.
            </p>

            <p>
                Whether you're a beginner or an experienced plant lover, 
                FlowerPlant helps you stay organized and confident in your plant care.
            </p>

            <p>
                Discover helpful tips, manage your collection, and grow your green space with ease.
            </p>
            </section>
    
            <h3>Example of plant care guides</h3>

            <div className="plant-grid">
      {predefinedPlants.map((plant) => (
        <div key={plant.id} className="card">

          <img
            src={plant.image}
            alt={plant.name}
            className="plant-card-image"
          />

          <h4>
            {plant.name} <em>({plant.latin})</em>
          </h4>

          <p><strong>Light: </strong>{plant.light}</p>
          <p><strong>Watering: </strong>{plant.water}</p>
          <p><strong>Soil: </strong>{plant.soil}</p>
          <p><strong>Difficulty level: </strong><em>{plant.level}</em></p>

        </div>
      ))}
    </div>

    <div style={{ marginTop: "20px" }}>
      <Link to="/myplants">
        <button>Make Your Own Plants!</button>
      </Link>
    </div>

  </div>
);
}
