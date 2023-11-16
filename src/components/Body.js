import RestaurantCard from "./RestaurantCard";
import { useState } from 'react';
import restaurantList from "../utils/mockData";

const Body = () => {
    // Recat Will make DOM operate Fast
    // React will do good DOM manipulation
    // Whenever the state variable is updated react re-render the component quickly
    // Local State Variable - Super PowerFull Variable - for that we use HOOKS, which is useState

    const [listOfRestaurtants, setlistOfRestaurant]= useState(restaurantList);

    // Normal JS varibale
//     let listOfRestaurtants = [
//         {
//             data: {
//               id: "74453",
//               name: "Domino's Pizza",
//               cloudinaryImageId: "bz9zkh2aqywjhpankb07",
//               cuisines: ["Pizzas"],
//               costForTwo: 40000,
//               deliveryTime: 45,
//               avgRating: "3.8",
//           },
//     },
//     {
//         data: {
//           id: "74463",
//           name: "KFC",
//           cloudinaryImageId: "bz9zkh2aqywjhpankb07",
//           cuisines: ["Pizzas"],
//           costForTwo: 40000,
//           deliveryTime: 45,
//           avgRating: "4.5",
//       }
//     },
//       {
//         data: {
//           id: "74466",
//           name: "MCD",
//           cloudinaryImageId: "bz9zkh2aqywjhpankb07",
//           cuisines: ["Pizzas"],
//           costForTwo: 40000,
//           deliveryTime: 45,
//           avgRating: "4.1",
//       },
// },
// ];

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={() => {
                    //filter the listOfRestaurant
                    let filteredList = listOfRestaurtants.filter((res) => res.data.avgRating > 4)
                    setlistOfRestaurant(filteredList)
                }} >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
            {
                listOfRestaurtants.map(restaurant => <RestaurantCard key={restaurant.data.id} resData={restaurant}/>)
            }
            </div>
        </div>
    )
    }

export default Body;