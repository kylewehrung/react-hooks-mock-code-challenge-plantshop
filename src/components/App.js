import React, {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [showPlants, setShowPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((resp) => resp.json())
    .then(setShowPlants)
  }, [])


function onAddPlant(newPlant) {
  setShowPlants([ newPlant,...showPlants ])
}


const displayPlant = showPlants.filter((plant) => (
  plant.name.toLowerCase().includes(search.toLowerCase())
))



  return (
    <div className="app">
      <Header />
      <PlantPage showPlants={displayPlant} setSearch={setSearch} onAddPlant={onAddPlant} />
    </div>
  );
}

export default App;
