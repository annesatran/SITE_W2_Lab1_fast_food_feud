import * as React from "react"
import "./RestaurantsRow.css"
import { Chip } from "/src/components/Chip/Chip.jsx"

export function RestaurantsRow(props) {
  return (
    <div className="RestaurantsRow">
    <h2 className="title">Restaurants</h2>
    <div className="restaurants options">
      {props.restaurantsProp.map((restaurant) => (
      <Chip
        key={restaurant}
        label={restaurant}
        onClick = {() => props.setActiveRestaurant(restaurant)}
        onClose = {() => props.setActiveRestaurant(null)}
        isActive={restaurant == props.activeRestaurant}
      />
      ))}
    </div>
  </div>
    )
}
export default RestaurantsRow