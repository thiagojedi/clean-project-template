import React, { useState } from 'react';

export const TodoContainer = () => {
  const [items, setItems] = useState<string[]>(['Vish']);

  const [newItem, setNewItem] = useState('');

  return (
    <>
      <h2>Todo List</h2>
      <div>
        <ul>
          {items.map((item, i) => (
            <li key={i.toString() + item}>{item}</li>
          ))}
        </ul>

        <label htmlFor="new-item">Add items</label>
        <input
          type="text"
          name="new-item"
          id="new-item"
          value={newItem}
          onChange={(e) => setNewItem(e.currentTarget.value)}
        />
        <button
          onClick={() =>
            setItems((prev) =>
              prev.includes(newItem) ? prev : [...prev, newItem],
            )
          }
        >
          Add
        </button>
      </div>
    </>
  );
};
