import React from "react";
import { NavLink, useRoutes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import routes from "./routes";

function App() {
  const element = useRoutes(routes);
  return (
    <div className="App">
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 路由链接 */}
            <NavLink className="list-group-item" to="./about">
              About
            </NavLink>
            <NavLink className="list-group-item" to="./home">
              Home
            </NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              {/* <Routes>
                <Route path="/about" element={<About />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/" element={<Navigate to="/about" />}></Route>
              </Routes> */}
              {element}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
