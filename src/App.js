import React from "react";
import Calcu from "./calcu";
import {BrowserRouter,Route,Routes} from "react-router-dom"
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calcu/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
