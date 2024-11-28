import React, { useState } from "react";


function Stats({ items }) {
    const totalItems = items.length;
    const packedItems = items.filter((item) => item.packed).length;
    const percentage =
      totalItems === 0 ? 0 : Math.round((packedItems / totalItems) * 100);
  
    return (
      <footer className="stats">
        <em>
          {percentage === 100 ? ( 
            <p>You got everything!</p>
          ) : (
           <p>{`You have ${totalItems} items in the  list. You already packed ${packedItems}${" "}
          (${percentage}%).`}</p> 
          )}
        </em>
      </footer>
    );
  }

export default Stats