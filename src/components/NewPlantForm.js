import React, { useState } from "react";

function NewPlantForm({ onSubmit }) {
  const [newPlants, setNewPlants] = useState({
   name: "",
   image: "",
   price: "",
  })
  
function handleFormSubmit(event) {
  event.preventDefault()
  onSubmit({
    ...newPlants
  })
}


  function handleChange(event) {
    setNewPlants({
      ...newPlants,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleFormSubmit}>
        <input 
        onChange={handleChange}
        value={newPlants.name}
        type="text" name="name" placeholder="Plant name" />
        <input 
        onChange={handleChange}
        value={newPlants.image}
        type="text" name="image" placeholder="Image URL" />
        <input 
        onChange={handleChange}
        value={newPlants.price}
        type="number" name="price" step="0.01" placeholder="Price" />
        <button 
        
        type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
