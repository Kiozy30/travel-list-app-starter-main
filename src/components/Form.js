import React, { useState } from "react";


function Form({ handleAddItem }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
  
    function handleSubmit(e) {
      e.preventDefault();
      if (!description) return;
  
      const newItem = ({
        id: Date.now(),
        description,
        quantity,
        packed: false,
      });
  
      handleAddItem(newItem);
  
      setDescription("");
      setQuantity(1);
    };
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need to pack?</h3>
        <select 
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
        </select>
        <input
          type="text"
          placeholder="Item description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">ADD</button>
      </form>
    );
  }

export default Form
