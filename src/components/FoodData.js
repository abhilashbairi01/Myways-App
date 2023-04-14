import React, { useEffect, useState } from 'react';

function FoodData() {
  const [food, setFood] = useState([]);
  const [filteredFood, setFilteredFood] = useState([]);
  const [filterFoodType, setFilterFoodType] = useState('');
  const [filteredTime, setFilteredTime] = useState('');

  useEffect(() => {
    let storedFood = JSON.parse(localStorage.getItem('food')) || [];
    setFood(storedFood);
    setFilteredFood(storedFood);
  }, []);

  useEffect(() => {
    let filtered = food.filter((foods) => {
      if (filterFoodType && filterFoodType !== foods.type) {
        return false;
      }
      if (filteredTime && filteredTime < foods.deliveryTime) {
        return false;
      }
      return true;
    });
    setFilteredFood(filtered);
  }, [food, filterFoodType, filteredTime]);

  const handleChange = (e) => {
    setFilterFoodType(e.target.value);
  };

  const handleDelivery = (e) => {
    setFilteredTime(e.target.value);
  };

  return (
    <>
      <div>
        <label htmlFor="filterFoodType">Food Type</label>
        <select id="filterFoodType" onChange={handleChange}>
          <option value="">All</option>
          <option value="Delicious Food">Delicious Food</option>
          <option value="Nutritious Food">Nutritious Food</option>
          <option value="Fast Food">Fast Food</option>
          <option value="Beverages">Beverages</option>
          <option value="Desserts">Desserts</option>
        </select>
        <label htmlFor="filteredTime">Max Delivery Time (in minutes)</label>
        <input type="number" id="filteredTime" value={filteredTime} onChange={handleDelivery} />
      </div>
      <br />
      <div>
        {filteredFood.map((food, index) => (
          <React.Fragment key={index}>
            <div>{food.name}</div>
            <div>{food.type}</div>
            <div>{food.deliveryTime} minutes</div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default FoodData;
