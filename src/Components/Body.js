import ReastaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react"

function filterdata(searchText, listOfRestaurants){
   return listOfRestaurants.filter(restaurant => restaurant.data.name.includes(searchText))
}

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState({})
    const [listOfRestaurants, setlistOfRestaurants] = useState({})
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        getRestaurant()
    })


   async function getRestaurant(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6386438&lng=77.07206&page_type=DESKTOP_WEB_LISTING") 
    const json = await data.json()
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    setlistOfRestaurants(json?.data?.cards[2]?.data?.data?.cards)
   }
        <div className="body">
            <div className="filter">
            <input type="text" 
            placeholder="search your restaurant" 
            className="search-input" 
            value={searchText}
            onChange={(e) => {setSearchText(e.target.value)}}
            />
            <button className="search-btn" 
            onClick={() => {
             const data = filterdata(searchText, allRestaurants)
             setlistOfRestaurants(data)
             setAllRestaurants(listOfRestaurants)
            }}
            > search </button>
            </div>
            <div className = "res-container">
             {
                listOfRestaurants.map(restaurant => <ReastaurantCard key={restaurant.data.id} resData={restaurant} />)
             }
            </div>
        </div>
    
}
export default Body