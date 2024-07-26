import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AreaChart1 from "./pages/chart1/AreaChart1";
const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chart1" element={<AreaChart1 />} />
      </Routes>
    </main>
  );
};

export default App;
