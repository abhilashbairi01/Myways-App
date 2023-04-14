import React, { useState } from 'react'

function FoodApp() {
    const [foodName,setFoodName]=useState("");
    const [foodType,setFoodType]=useState("");
    const [deliveryTime,setdeliveryTime]=useState(0);

    const postdata=(e)=>{
        e.preventDefault();
        const addFood={name:foodName,type:foodType,deliveryTime:deliveryTime};
        let food=JSON.parse(localStorage.getItem('food')) ||[];
        food.push(addFood);
        localStorage.setItem('food',JSON.stringify(food));
        setFoodName("");
        setFoodType("Delioious Food");
        setdeliveryTime(0);
        

    }
    
  return (
    <div>
        <h1 style={{textAlign: 'center'}}>FoodApp</h1>
        <div>
            <form onSubmit={postdata}>
            <div>
            <label htmlFor='foodName'>Food Name</label>
            <input type="text" id="foodName" value={foodName} onChange={(e)=>{setFoodName(e.target.value)}} />
            </div>
            <br/>
            <div>
            <label htmlFor='foodType'>Food Type</label>
            <select id="foodType" value={foodType} onChange={(e)=>{setFoodType(e.target.value)}} >
            <option value="Delicious Food">Delicious Food</option>
            <option value="Nutrious Food">Nutrious Food</option>
            <option value="Fast Food">Fast Food</option>
            <option value="Beverages">Beverages</option>
            </select>

            </div>
            <br/>
            <div>
            <label htmlFor='deliver Time'>Max Delivery Time</label>
            <input type="number" id="deliveryTime" value={deliveryTime} onChange={(e)=>{setdeliveryTime(e.target.value)}} />
            </div>
            <br/>
            <button type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default FoodApp