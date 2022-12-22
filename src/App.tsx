import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import InvestorDetail from "./components/InvestorDetail";
import InvestorsList from "./components/InvestorsList";

const App: React.FC = () => {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/investors" className="navbar-brand">
          Sidecar
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/investors"} className="nav-link">
              Investors
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<InvestorsList/>} />
          <Route path="/investors" element={<InvestorsList/>} />
          <Route path="/investors/:id" element={<InvestorDetail/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
