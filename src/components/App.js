import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import "../styles/Side.css";
import "../styles/Client.css";
import "../styles/Delete.css";
import "../styles/Edit.css";
import "../styles/Header.css";
import "../styles/Main.css";
import "../styles/New.css";
import Side from "./Side";
import Client from "./Client";
import Main from "./Main";

import Data from "./../data.json";
import { useState } from "react";

function App() {
  if (localStorage.getItem("allInvoices") === null) {
    localStorage.setItem("allInvoices", JSON.stringify(Data.invoices));
  }

  const [theme, setTheme] = useState("light");

  return (
    <Router>
      <div className={"App " + theme}>
        <Side changeTheme={setTheme} />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/client" element={<Client />} />
          {/* <Route exact path="/delete" element={<Delete />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
