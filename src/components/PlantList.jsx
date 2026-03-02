import PlantItem from "./PlantItem";

export default function PlantList({ plants, setPlants }) {
  function deletePlantHandler(id) {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this plant? It will be sad :("
    );

    if (isConfirmed) {
      setPlants(plants.filter((plants) => plants.id !== id));
    }
  }

  return (
    <div className="plant-list">
      {plants.map((plant) => (
        <PlantItem
          key={plant.id}
          plant={plant}
          deleteHandler={deletePlantHandler}
        />
      ))}
    </div>
  );
}