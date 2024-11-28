import React, { useState } from "react";
import Logo from './Logo'
import Form from './Form'
import PackingList from './PackingList'
import Stats from './Stats'

// Initial packing items
const initialItems = [
  { id: 1, description: "Shirt", quantity: 5, packed: false },
  { id: 2, description: "Pants", quantity: 2, packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems);

  function handleDeleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleUpdateItem(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  function handleClearItems() {
    setItems([])
  }

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div className="app">
      <Logo />
      <Form handleAddItem={addItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onTogglePacked={handleUpdateItem}
      />
      <button onClick={handleClearItems}>Clear All Items 🗑️</button>
      <Stats items={items} />
    </div>
  );
}

export default App;

