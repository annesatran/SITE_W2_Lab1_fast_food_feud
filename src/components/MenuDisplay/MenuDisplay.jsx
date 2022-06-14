import * as React from "react"
import "./MenuDisplay.css"
import { Chip } from "/src/components/Chip/Chip.jsx"
import { NutritionalLabel } from "/src/components/NutritionalLabel/NutritionalLabel.jsx"

export function MenuDisplay(props) {
  return (
    <div className="MenuDisplay display">
      <div className="MenuItemButtons menu-items">
        <h2 className="title">Menu Items</h2>
        {props.currentMenuItems.map((menuItem) => (
        <Chip 
          key={menuItem.item_name}
          label={menuItem.item_name}
          onClick = {() => props.setActiveMenu(menuItem)}
          onClose = {() => props.setActiveMenu(null)}
          isActive={menuItem == props.activeMenu}
        />
        ))}
      </div>

      <div className="NutritionFacts nutrition-facts">
        { props.activeMenu ? <NutritionalLabel item={props.activeMenu}/> : null}
      </div>
    </div>
    )
}

export default MenuDisplay