import React from "react";
import { Routes, Route} from "react-router-dom";

import {RepiceContextProvider} from "./Context/RecipeContext.jsx"

import CookingRecipe from "./components/CookingRecipe/cookingRecipe";
import Home from "./components/Home/Home";
import Welcome from "./components/Welcome/Welcome";
import Fin from "./components/Fin/Fin";

const App = () => {
return(
    <RepiceContextProvider>

        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/Welcome" element={<Welcome />} />
            <Route exact path="/CookingRecipe" element={<CookingRecipe/>} />
            <Route exact path="/Fin" element={<Fin/>}/>
        </Routes>
    
    </RepiceContextProvider> 
)
};

export default App
