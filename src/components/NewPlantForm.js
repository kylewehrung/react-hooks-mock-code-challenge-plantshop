import React, {useState} from "react";

function NewPlantForm({ onAddPlant }) {
const [newPlant, setNewPlant] = useState({      //this was originally an empty array and worked, not controlled but it worked
  name: "",
  image: "",
  price: ","
})



function handlePlantFormSubmit(event) {
  event.preventDefault()
 onAddPlant({
  ...newPlant})

}

function handleNewItem(event) {
  setNewPlant({
    ...newPlant,
    [event.target.name]: event.target.value
  })
}



  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handlePlantFormSubmit}>
        <input 
        value={newPlant.name}
        onChange={handleNewItem}
        type="text" name="name" placeholder="Plant name" />
        <input 
        value={newPlant.image}
        onChange={handleNewItem}
        type="text" name="image" placeholder="Image URL" />
        <input 
        value={newPlant.price}
        onChange={handleNewItem}
        type="number" name="price" step="0.01" placeholder="Price" />

        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
