import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
const [plants, setPlants] = useState([])
const [search, setSearch] = useState("")

function onSubmit(newPlant) {
  setPlants([...plants, newPlant])
}


useEffect(() => {
  fetch("http://localhost:6001/plants")
  .then((r) => r.json())
  .then(setPlants)
}, [])

const filterPlants = plants.filter((plant) => (
  plant.name.toLowerCase().includes(search.toLowerCase())
))

function onDelete(id) {
  const badPlant = plants.filter((plant) => plant.id !== id)
  setPlants(badPlant)
}

  return (
    <main>
      <NewPlantForm onSubmit={onSubmit}/>
      <Search setSearch={setSearch}/>
      <PlantList plants={filterPlants} onDelete={onDelete}/>
    </main>
  );
}

export default PlantPage;
