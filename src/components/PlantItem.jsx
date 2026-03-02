import { Link } from "react-router-dom";

export default function PlantItem({ plant, deleteHandler }) {
  return (
    <div className="card">
      <h3>
        {plant.name} <em>({plant.latin})</em>
      </h3>
      <p>
        <strong>Light: </strong>
        {plant.light}
      </p>
      <p>
        <strong>Watering: </strong>
        {plant.water}
      </p>
      <p>
        <strong>Soil: </strong>
        {plant.soil}
      </p>
      <p>
        <strong>Difficulty Level: </strong>
        {plant.level}
      </p>

      <div className="card-actions">
        <Link to={`/update/${plant.id}`} className="card-button card-button-update">
          Update
        </Link>
        <button
          type="button"
          className="card-button card-button-delete"
          onClick={() => deleteHandler(plant.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}