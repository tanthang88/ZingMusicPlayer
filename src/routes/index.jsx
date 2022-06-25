import React from "react";
import {Routes, Route} from "react-router-dom";
import {About} from "../compoments/Test/test";
import Home from "../pages/Home";

function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="abc" element={<About />} />
                <Route path="d" element={<Home />} />
                <Route path="e" element={<About />} />
                <Route path="f" element={<Home />} />
            </Routes>
        </>
    );
}
export default Router;
