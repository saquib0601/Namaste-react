import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { swiggy_menu_api } from "../utils/constants";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();
    console.log(resId)

    useEffect( () => {
        fetchMenu();
    }, [] );

    const fetchMenu = async () => {
        const data = await fetch(
            swiggy_menu_api + resId
        );
        const json = await data.json();
        console.log(json);
        console.log("inside fecthMenu()");
        setResInfo(json.data)
    };
    console.log(resInfo);
 
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);

    if (resInfo === null) return <Shimmer/>;

    return (
        <div className="Name">
            <h3>{name}</h3>
            <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map( item => <li key={item.card.info.id}>{item.card.info.name} - Rs {item.card.info.price/100 || item.card.info.defaultPrice/100}</li> )}
            </ul>
        </div>
    )
}

export default RestaurantMenu;