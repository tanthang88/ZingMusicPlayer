import React from "react";
import {Route, Routes} from "react-router-dom";
import {About, Home} from "../compoments/Test/test";

const Router: React.FC = (): JSX.Element => {
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
};
export default Router;
