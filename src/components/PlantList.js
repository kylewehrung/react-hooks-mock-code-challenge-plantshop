import React from "react";
import PlantCard from "./PlantCard";

function PlantList({showPlants}) {
  const allThePlants = showPlants.map((plant) => {
   return <PlantCard 
    key={plant.id}
    plant={plant}
    />
  })

  return (
    <ul className="cards">{allThePlants}</ul>
  );
}

export default PlantList;
