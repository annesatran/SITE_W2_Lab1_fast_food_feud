import * as React from "react"
import "./CategoriesColumn.css"
import { Chip } from "/src/components/Chip/Chip.jsx"

export function CategoriesColumn(props) {
  return (
    <div className="CategoriesColumn col">
      <div className="categories options">
        <h2 className="title">Categories</h2>
        {props.categoriesProp.map(category => (
          <Chip
            key={category}
            label={category}
            onClick = {() => props.setActiveCategory(category)}
            onClose = {() => props.setActiveCategory(null)}
            isActive={category == props.activeCategory}
          />
          ))}
      </div>
    </div>
    )
}
export default CategoriesColumn