import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { swiggy_menu_api } from "../utils/constants";
import "./RestaurantMenu.css";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const [showIndex,setShowIndex] = useState(null);

    const {resId} = useParams();
    console.log(resId)

    useEffect( () => {
        fetchMenu();
    },[]);

        // async function getRestaurant to fetch Swiggy API data
//   async function fetchMenu() {
//     try {
//         const data = await fetch(swiggy_menu_api+resId);
//         console.log(swiggy_menu_api+resId)
//         const json = await data.json();
//         console.log(json)
//         console.log("inside fetchMenu()")
//     } catch (error) {
//       console.log(error);
//     }
//   }

    const fetchMenu = async () => {
        const data = await fetch(
            swiggy_menu_api + resId
        );
        const json = await data.json();
        console.log(json);
        console.log("inside fecthMenu()");
        setResInfo(json?.data)
        console.log(json?.data)
        console.log(resInfo)
    };
    console.log(resInfo);


    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info ? resInfo?.cards[0]?.card?.card?.info : {}
    console.log(name)

   // const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
 
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card ? resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card : {}

    console.log(itemCards)
    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( c => c.card?.card?.["@type"] === 
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    // console.log(categories)

    // const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    // const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    // console.log(itemCards);

    if (resInfo === null) return <Shimmer/>;

    return (
        <div className="Name">
            <h3 className="resName">{name}</h3>
            <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
            <h2>Menu</h2>
            {/* <ul>
                {itemCards.map( item => <li key={item.card.info.id}>{item.card.info.name} - Rs {item.card.info.price/100 || item.card.info.defaultPrice/100}</li> )}
            </ul> */}

            {/* categories accordian */}
            {categories.map( (category, index) => 
            <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} showItems={index === showIndex ? true : false} setShowIndex={() => {setShowIndex(index)} }/> )}
        </div>
    )
}

export default RestaurantMenu;