import React from "react";

import Sidebar from "./compoments/Sidebar/Sidebar"


const App: React.FC = () => {
  return (
    <div className="App">
      <div
          className="theme-bg">
          <Sidebar/>
      </div>
    </div>
  );
}

export default App;
