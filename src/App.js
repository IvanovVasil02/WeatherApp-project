import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MeteoDetails from "./components/MeteoDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/meteoDetails/:lat/:lon' element={<MeteoDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
