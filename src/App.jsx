import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Dashboard } from "./pages";
import { Header, Sidebar } from "./components";

import { createContext, useEffect, useState } from "react";

const MyContext = createContext();

function App() {
  const [isToggle, setIsToggle] = useState(false);

  const values = {
    isToggle,
    setIsToggle,
  };

  // useEffect(() => {

  // }, [])

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />

        <div className="main d-flex">
          <div
            className={`sidebarWrapper ${isToggle === true ? "toggle" : ""}`}
          >
            <Sidebar />
          </div>

          <div className={`content ${isToggle === true ? "toggle" : ""}`}>
            <Routes>
              <Route path="/" exact={true} element={<Dashboard />} />
              <Route path="/dashboard" exact={true} element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
