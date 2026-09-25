import React from "react";
import Sidebar from "./assets/components/Sidebar";
import MainContent from "./assets/components/MainContent";
import InternalTesting from "./assets/components/InternalTesting";

import "./App.css";
const App = () => {
  if (window.location.pathname.replace(/\/$/, "") === "/internal-testing") {
    return <InternalTesting />;
  }

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
