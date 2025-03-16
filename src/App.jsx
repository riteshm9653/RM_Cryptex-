import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Coin from "./pages/Coin/Coin";
import Footer from "./Components/Footer/Footer";
import Cryptoinfo from "./Components/Cryptoinfo/Cryptoinfo";
import Mains from "./Components/Mains/Mains";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Mains />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/coin/:coinId" element={<Coin />}></Route>
        <Route path="/info" element={<Cryptoinfo />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
