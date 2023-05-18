import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../src/assets/scss/style.scss";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
