import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ showPlants, setSearch, onAddPlant }) {
  return (
    <main>
      <NewPlantForm showPlants={showPlants} onAddPlant={onAddPlant} />
      <Search setSearch={setSearch}/>
      <PlantList showPlants={showPlants}/>
    </main>
  );
}

export default PlantPage;
