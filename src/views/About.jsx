import careImg from "../assets/care.png";
import waterImg from "../assets/watering.png";

export default function About() {
  return (
    <div className="about-container">
      
      <div className="about-text">
        <h2>About FlowerPlant</h2>

        <h3>Our Mission</h3>
        <p>
          FlowerPlant aims to make plant care simple and accessible for everyone.
          Whether you are a beginner or experienced, our goal is to help you care
          for your plants with confidence.
        </p>

        <h3>Our Vision</h3>
        <p>
          We believe bringing nature indoors improves well-being and creates
          a calmer environment. FlowerPlant encourages mindful plant care.
        </p>

        <h3>What You Can Do</h3>
        <ul>
          <li>Explore predefined plant guides</li>
          <li>Create your own plant notes</li>
          <li>Update and manage your collection</li>
          <li>Filter and organize your plants easily</li>
        </ul>
      </div>

      <div className="about-images">
        <img src={careImg} alt="Plant care" />
        <img src={waterImg} alt="Watering a plant" />
      </div>

    </div>
  );
}