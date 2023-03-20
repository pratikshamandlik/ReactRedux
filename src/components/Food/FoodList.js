import React,{useState, useEffect} from "react";

import axios from "axios";


 const FoodList=()=> {
  const [foods, setFoods] = useState(null);
  const baseURL = "http://localhost:3000/getFoods";

  useEffect(() => {
    axios.get(baseURL).then((response) => {
     // console.log("response");
     // console.log(response);
      setFoods(response.data);
    });
  }, []);

  if (!foods) 
  return <div className="App">Loading...</div>;
else{

  return (
   foods && foods.forEach((food, index) => {

    <div>
      <h1>{food.category}</h1>
      <p>{food.name}</p>
    </div>
  })
  );
    
}
}
export default FoodList;