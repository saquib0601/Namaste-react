import "./ItemList.css";
import { IMG_CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {
    console.log(items)
    return (
        <div>
            { items.map( (item) => (
                <div key={item.card.info.id} className="itemListHeader">
                    <div className="mainDivForName">
                    <div className="namePrice">
                        <span>{item.card.info.name}</span>
                        <span>- ₹ {item.card.info.price/100 ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                    </div>
                    <p className="description">{item.card.info.description}</p>
                    </div>
                    <div className="imageDiv">
                    <img src={IMG_CDN_URL + item.card.info.imageId} className="imageClass"/>
                    <button className="addItem">ADD +</button>
                    </div>
                </div>
            ) ) }
        </div>
    )
}

export default ItemList;