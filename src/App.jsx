import * as React from "react"
// IMPORT ANY NEEDED COMPONENTS HERE
import { Header } from "./components/Header/Header.jsx"
import { Instructions } from "./components/Instructions/Instructions.jsx"
import { createDataSet } from "./data/dataset"
import "./App.css"

import { CategoriesColumn } from "./components/CategoriesColumn/CategoriesColumn.jsx"
import { RestaurantsRow } from "./components/RestaurantsRow/RestaurantsRow.jsx"
import { MenuDisplay } from "./components/MenuDisplay/MenuDisplay.jsx"
import { DataSource } from "/src/components/DataSource/DataSource.jsx"

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!
const { data, categories, restaurants } = createDataSet()

export function App() {
  const [activeCategory, setActiveCategory] = React.useState(null)
  const [activeRestaurant, setActiveRestaurant] = React.useState(null)
  const [activeMenu, setActiveMenu] = React.useState(null)

  let currentMenuItems = data.filter((dataItem) => {
    return dataItem.food_category == activeCategory && dataItem.restaurant == activeRestaurant
  })

  function getInstruction (){
    if (!(activeCategory || activeRestaurant || activeMenu)) {
      return appInfo.instructions.start;
    } else if (activeCategory && !(activeRestaurant || activeMenu)) {
      return appInfo.instructions.onlyCategory;
    } else if (activeRestaurant && !(activeCategory || activeMenu)) {
      return appInfo.instructions.onlyRestaurant;
    } else if (!(activeMenu) && (activeCategory && activeRestaurant)) {
      return appInfo.instructions.noSelectedItem;
    } else {
      return appInfo.instructions.allSelected
    }}

  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <CategoriesColumn
        categoriesProp={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
         />

      {/* MAIN COLUMN */}
      <div className="container">
        <Header
          title={appInfo.title}
          tagline={appInfo.tagline}
          description={appInfo.description}
        />

        {/* RESTAURANTS ROW */}
        <RestaurantsRow
          restaurantsProp={restaurants}
          activeRestaurant={activeRestaurant}
          setActiveRestaurant={setActiveRestaurant}
        />

        {/* INSTRUCTIONS GO HERE */}
        <Instructions
          instructions={getInstruction()}
        />

        {/* MENU DISPLAY */}
        <MenuDisplay
          currentMenuItems={currentMenuItems}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu} 
        />

        <DataSource
          text={appInfo.dataSource}
        />
      </div>
    </main>
  )
}

export default App
