import "./App.scss";
import Home from "./pages/home/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/Watch" element={<Watch />} />'
        <Route path="/register" element={<Register />} />'
      </Routes>
    </BrowserRouter>
  );
};

export default App;
