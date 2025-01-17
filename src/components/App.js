import React, { useState } from "react";
import Header from "./Header";  // Import the Header component
import ShoppingList from "./ShoppingList";  // Import the ShoppingList component
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function onDarkModeClick() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  function onCategoryChange(category) {
    setSelectedCategory(category);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={onDarkModeClick} isDarkMode={isDarkMode} />
      <ShoppingList 
        items={itemData} 
        selectedCategory={selectedCategory} 
        onCategoryChange={onCategoryChange} 
      />
    </div>
  );
}

export default App;
