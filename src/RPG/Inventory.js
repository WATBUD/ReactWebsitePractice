import React from 'react';
import './inventory.css';
const items = [
  {
    id: 1,
    name: 'Red Potion',
    image: 'https://via.placeholder.com/50x50',
    description: 'Restores a small amount of HP.',
  },
  {
    id: 2,
    name: 'Blue Potion',
    image: 'https://via.placeholder.com/50x50',
    description: 'Restores a small amount of MP.',
  },
  {
    id: 3,
    name: 'Elixir',
    image: 'https://via.placeholder.com/50x50',
    description: 'Fully restores HP and MP.',
  },
  {
    id: 4,
    name: 'Elixir',
    image: 'https://via.placeholder.com/50x50',
    description: 'Fully restores HP and MP.',
  },
  // ...其他道具
];

const customName = () => {
  return (
    <div className="inventory">
      <div className="inventory-header">
        My Inventory
        <div className="inventory-sort">
          <span>Sort By:</span>
          <select>
            <option>Name</option>
            <option>Price</option>
            <option>Quantity</option>
          </select>
        </div>
      </div>
      <div className="inventory-items">
        {items.map(item => (
          <div className="inventory-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="inventory-item-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default customName;
