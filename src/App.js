import React from "react";
import { Routes, Route} from "react-router-dom";
import CookingRecipe from "./components/CookingRecipe/cookingRecipe";
import Home from "./components/Home/Home";
import Welcome from "./components/Welcome/Welcome";

const App = () => {
return(
<>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Welcome" element={<Welcome />} />
        <Route exact path="/CookingRecipe" element={<CookingRecipe/>} />
        {/* <Route exact path="/Welcome" element={<Form />} /> */}
    </Routes>
</>
)
};

export default App
