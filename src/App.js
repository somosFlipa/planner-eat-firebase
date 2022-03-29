import React from "react";
import { Routes, Route} from "react-router-dom";
import CookingRecipe from "./components/cookingRecipe";
import Home from "./components/Home";
import Welcome from "./components/Welcome"

const App = () => {

return(
<>
    <h1>Recetas</h1>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Welcome" element={<Welcome />} />
        <Route exact path="/CookingRecipe" element={<CookingRecipe/>} />
    </Routes>

</>
)
};

export default App
