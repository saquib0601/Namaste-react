// import { CDN_URL } from "../utils/constants.js"

// const styleCard = {
//     backgroundColor : "#f0f0f0"
// }


// // const RestaurantCard = (props) => {
// //     const { resData } = props;
// //     console.log(props)
// //     const {
// //         cloudinaryImageId,
// //         name,
// //         cuisines,
// //         avgRating,
// //         costForTwo,
// //         deliveryTime
// //     } = resData?.data;

//     // const RestaurantCard = ({
//     //     cloudinaryImageId,
//     //     name,
//     //     cuisines,
//     //     areaName,
//     //     sla,
//     //     costForTwo,
//     //     avgRatingString,
//     // }) => {

//     const RestaurantCard = (props) => {
//     console.log(props.resData)
//     return(
//         <div className="res-card" style={styleCard}>
//         <img
//             className="res-logo"
//             alt="Loading"
//             src={CDN_URL+(props.resData.cloudinaryImageId)}
//         />
//         <h3>{props.resData.name}</h3>

//         <h4>{props.resData.cuisines.join(", ")}</h4>
//         <h4>{props.resData.avgRatingString} + stars</h4>
//         <h4>{props.resData.costForTwo}</h4>
//         <h4>{props.resData.areaName}</h4>
//     </div>
//     )
// }

// export default RestaurantCard;
import { IMG_CDN_URL } from "../utils/constants.js"

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{areaName}</h5>
      <span>
        <h4
          style={
            avgRatingString < 4
              ? { backgroundColor: "var(--light-red)" }
              : avgRatingString === "--"
                ? { backgroundColor: "white", color: "black" }
                : { color: "white" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRatingString}
        </h4>
        <h4>•</h4>
        <h4>{sla?.lastMileTravelString ?? '2.0 km'}</h4>
        <h4>•</h4>
        <h4>{costForTwo ?? '₹200 for two'}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;