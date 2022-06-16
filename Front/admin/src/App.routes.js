import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Single from "./pages/Single";
import New from "./pages/New";
import List from "./pages/List";
import { aUserInputs, aProductInputs } from "./assets/sources/FormOne.js";
import './styles/dark.scss';
import { useSelector } from 'react-redux';

function App() {
  
  const { rdcr_darkMode } = useSelector((state) => state);

  return (
    <div className={rdcr_darkMode ? "app dark" : "app"}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New inputs={aUserInputs} />} />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New inputs={aProductInputs} />} />
          </Route>
        </Route>
      </Routes>
    </div>

  );
}

export default App;



// import { useContext, useState } from "react";
// import { DarkModeContext } from "./context/darkModeReducer";

/* 

function App() {

  const [dark, setDark] = useState(false);

  const {darkMode} = useContext(DarkModeContext);
*/