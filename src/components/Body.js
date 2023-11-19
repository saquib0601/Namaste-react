// import RestaurantCard from "./RestaurantCard";
// import { useEffect, useState } from 'react';
// import restaurantList from "../utils/mockData";

// const Body = () => {
//     // Recat Will make DOM operate Fast
//     // React will do good DOM manipulation
//     // Whenever the state variable is updated react re-render the component quickly
//     // Local State Variable - Super PowerFull Variable - for that we use HOOKS, which is useState

//     const [listOfRestaurtants, setlistOfRestaurant]= useState(restaurantList);

//     const fetchData = async () => {
//         const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.1003796&lng=85.3730428&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//         // convert this data to JSON
//         const json = await data.json();
//         console.log(json);
//         setlistOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//         console.log(listOfRestaurtants)
//         console.log(listOfRestaurtants.data)
//         console.log(listOfRestaurtants.data.id)
//     };

//     useEffect(()=>{
//         console.log("useEffect Called");
        
//     }, []);
    
//     fetchData();

//     // this will print 1st because useEffect called after the render done of the component
//     console.log("Body Rendered");

//     // Normal JS varibale
// //     let listOfRestaurtants = [
// //         {
// //             data: {
// //               id: "74453",
// //               name: "Domino's Pizza",
// //               cloudinaryImageId: "bz9zkh2aqywjhpankb07",
// //               cuisines: ["Pizzas"],
// //               costForTwo: 40000,
// //               deliveryTime: 45,
// //               avgRating: "3.8",
// //           },
// //     },
// //     {
// //         data: {
// //           id: "74463",
// //           name: "KFC",
// //           cloudinaryImageId: "bz9zkh2aqywjhpankb07",
// //           cuisines: ["Pizzas"],
// //           costForTwo: 40000,
// //           deliveryTime: 45,
// //           avgRating: "4.5",
// //       }
// //     },
// //       {
// //         data: {
// //           id: "74466",
// //           name: "MCD",
// //           cloudinaryImageId: "bz9zkh2aqywjhpankb07",
// //           cuisines: ["Pizzas"],
// //           costForTwo: 40000,
// //           deliveryTime: 45,
// //           avgRating: "4.1",
// //       },
// // },
// // ];

//     return (
//         <div className="body">s
//             <div className="filter">
//                 <button className="filter-btn" 
//                 onClick={() => {
//                     //filter the listOfRestaurant
//                     let filteredList = listOfRestaurtants.filter(
//                         (res) => restaurant?.info?.avgRatingString > 4)
//                     setlistOfRestaurant(filteredList)
//                 }} >Top Rated Restaurants</button>
//             </div>
//             <div className="res-container">
//             {
//                 listOfRestaurtants.map(restaurant => <RestaurantCard key={restaurant?.data?.id} resData={...restaurant?.data}/>)
//             }
//             </div>
//         </div>
//     )
//     }

// export default Body;
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react"; /* This is named export */
import Shimmer from "./Shimmer"; /* This is default export */
import { swiggy_api_URL } from "../utils/constants.js";

// Filter the restaurant data according input type
function filterData(searchText, restaurants) {
  const resFilterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return resFilterData;
}

// Body Component for body section: It contain all restaurant cards
const Body = () => {
  // useState: To create a state variable, searchText, allRestaurants and filteredRestaurants is local state variable
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // use useEffect for one time call getRestaurants using empty dependency array
  useEffect(() => {
    getRestaurants();
  }, []);

  // async function getRestaurant to fetch Swiggy API data
  async function getRestaurants() {
    // handle the error using try... catch
    try {
      const response = await fetch(swiggy_api_URL);
      const json = await response.json();

      // initialize checkJsonData() function to check Swiggy Restaurant data
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {

          // initialize checkData for Swiggy Restaurant data
          let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      // call the checkJsonData() function which return Swiggy Restaurant data
      const resData = await checkJsonData(json);

      // update the state variable restaurants with Swiggy API data
      setAllRestaurants(resData);
      setFilteredRestaurants(resData);
    } catch (error) {
      console.log(error);
    }
  }

  // use searchData function and set condition if data is empty show error message
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurants(filteredData);
      setErrorMessage("");
      if (filteredData?.length === 0) {
        setErrorMessage("No matches restaurant found");
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };

  // if allRestaurants is empty don't render restaurants cards
  if (!allRestaurants) return null;

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          // update the state variable searchText when we typing in input box
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            // user click on button searchData function is called
            searchData(searchText, allRestaurants);
          }}
        >
          Search
        </button>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}

      {/* if restaurants data is not fetched then display Shimmer UI after the fetched data display restaurants cards */}
      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
          {filteredRestaurants.map((restaurant) => {
            return (
              <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;