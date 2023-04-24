import { RES_IMG_URL } from "../utils/constants";

const ReastaurantCard  = (props) => {
    const { resData } = props;

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime, address} = resData?.data
    return (
    <div className="res-card">
      <img className="res-logo" alt="res-image" src={ RES_IMG_URL + cloudinaryImageId }/>
     <h2 className="res-name" >{name}</h2>
     <h5 className="res-cuisines">{cuisines.join(', ')}</h5>
     <div className="res-items">
     <h5 className="res-avgRating">{avgRating}</h5>
     <h5 className="res-cost">₹{costForTwo/100} FOR TWO</h5>
     <h5 className="res-deliveryTime">{deliveryTime}-MINS</h5>
     </div>
     <h4 className="res-deliveryTime">{address}</h4>
    </div>
    )
}
export default ReastaurantCard