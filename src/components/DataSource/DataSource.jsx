import * as React from "react"
import "./DataSource.css"

export function DataSource(props) {
  return (
    <div className="data-sources">
      <p>{props.text}</p>
    </div>
    )
}

export default DataSource