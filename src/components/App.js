import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  
  const [lightOn, setLightOn] = useState(false)
  const appClass = lightOn ? "App dark" : "App light"

  

  function handleLight() {
    setLightOn((light) => !light)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleLight} > {lightOn ? "Light Mode" : "Dark Mode"} </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}




export default App;
