import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
// import UploadWidget from "./components/UploadWidget";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
       {/* <Route path="/" element={<Home />}/> */}
      </Routes>
    <div>
      <Header />
      <Sidebar/>
      {/* <UploadWidget /> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
