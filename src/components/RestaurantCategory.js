import { useState } from "react";
import ItemList from "./ItemList";
import "./RestaurantCategory.css";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    console.log(data)

    // const [showItems,setShowItems]= useState(false);

    // const handleClick = () => {
    //     console.log("handleClick")
    //     setShowItems(!showItems)
    // }

    const handleClick = () => {
        setShowIndex();
    }

    return (
        <div>
            {/* header */}
            <div className="headerCategory">
                <div className="resTitleHeader" onClick={handleClick}>
                    <span>{data.title}</span>
                    <span>"↑"</span>
                </div>

                {/* accordian body */}

                { showItems && <ItemList items={data.itemCards}/>}

            </div>

        </div>
    )
}

export default RestaurantCategory;