import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{props.item.item_name}</h4>
      <ul className="fact-list">
        {nutritionFacts.map((nutritionFact) =>
          <NutritionalLabelFact
            key={nutritionFact.id}
            item={props.item}
            nutritionFact={nutritionFact}
          />
        )}
      </ul>
    </div>
  )
}

export function NutritionalLabelFact(props) {
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{props.nutritionFact.label}</span>{" "}
      <span className="fact-value">{props.item[props.nutritionFact.attribute]}</span>
    </li>
  )
}

export default NutritionalLabel
