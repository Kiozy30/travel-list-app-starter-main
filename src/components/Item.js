import React, { useState } from "react";


function Item({ item, onTogglePacked, onDeleteItem }) {
    return (
      <li>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onTogglePacked(item.id)}
        />
        <span
          style={{
            textDecoration: item.packed ? "line-through" : "none",
            color: item.packed ? "gray" : "black",
          }}
        >
          {item.quantity} x {item.description}
        </span>
        <button onClick={() => onDeleteItem(item.id)}>🗑️</button>
      </li>
    );
  }

export default Item