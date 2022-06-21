/*import {useEffect, useState} from "react";
import ZingAPI from "./api/ZingAPI";*/

import Sidebar from "./compoments/Sidebar/Sidebar"
import ThemeBackground from "./images/theme-background/eiffel.jpg"

function App() {
  /*const [music, setMusic] = useState();
  useEffect( () => {
    const data = async () => {
      try {
        const params = {
          id: 'ZZ98II9W'
        };
        const response = await ZingAPI.getSong(params);
        setMusic(response);
      } catch (err) {
        console.log(err);
      }
    }
    data()
    console.log(music)
  },[])*/
  return (
    <div className="App">
      <div
          className="theme-bg"
          style={{backgroundImage:`url(${ThemeBackground})`}}>
          <Sidebar/>

      </div>
    </div>
  );
}

export default App;
