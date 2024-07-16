import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Links from "./pages/Links/link";

function RoutesApp(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/link' element={<Links/>} />
        </Routes>
    </BrowserRouter>
    )
}

export default RoutesApp
