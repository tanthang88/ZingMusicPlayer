import React from "react";
import Sidebar from "./compoments/Sidebar/Sidebar";
import Router from "./routes";

const App: React.FC = () => {
    return (
        <div className="App">
            {/*Hiển thị sidebar trên tất cả các trang*/}
            <Sidebar />
            {/*Routes*/}
            <Router />
        </div>
    );
};

export default App;
