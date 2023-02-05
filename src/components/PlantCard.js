import React, { useState } from "react";

function PlantCard({ plant, onDelete }) {
  const [inStock, setInStock] = useState(true)
const { image, name, price, id } = plant

function handleClick() {
  setInStock((currentStock) => !currentStock)
}


function handleDelete() {
  fetch(`http://localhost:6001/plants/${id}`, {
    method: "DELETE",
  })
  onDelete(id)
}


  return (
    <li className="card">
      <button 
      onClick={handleDelete}
      style={{color: "red"}}
      >delete me
      </button>

      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>


      {inStock ? (
        <button 
        onClick={handleClick}
        className="primary">In Stock</button>


      ) : (
        <button 
        onClick={handleClick}
        >Out of Stock</button>


      )}
    </li>
  );
}

export default PlantCard;
