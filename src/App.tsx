import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AreaChart1 from "./pages/chart1/AreaChart1";
import Barcharts from "./pages/barchart/Barcharts";
const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chart1" element={<AreaChart1 />} />
        <Route path="/chart2" element={<Barcharts />} />
      </Routes>
    </main>
  );
};

export default App;
