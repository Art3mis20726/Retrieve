import React from "react";
import { useRoutes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import About from "./pages/about";
// import UploadWidget from "./components/UploadWidget";

function App() {
  return (
    <div>
      <Header />
      <Sidebar/>
      {/* <UploadWidget /> */}
    </div>
  );
}

export default App;
