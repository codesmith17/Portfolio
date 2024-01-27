import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "./assets/components/Sidebar";
import MainContent from "./assets/components/MainContent";

import "./App.css";
const App = () => {
  return (
    <main>
      {/* <Helmet>
        <script src="../script.js" type="text/javascript" />
      </Helmet> */}
      <Sidebar></Sidebar>
      <MainContent></MainContent>
    </main>
  );
};

export default App;
