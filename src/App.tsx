import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AreaChart1 from "./pages/chart1/AreaChart1";
import Barcharts from "./pages/barchart/Barcharts";
import Linechart from "./pages/linechart/Linechart";
import Paichart from "./pages/paichart/Paichart";
import Radarchart from "./pages/radarchart/Radarchart";
const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chart1" element={<AreaChart1 />} />
        <Route path="/chart2" element={<Barcharts />} />
        <Route path="/chart3" element={<Linechart />} />
        <Route path="/chart4" element={<Paichart />} />
        <Route path="/chart5" element={<Radarchart />} />
      </Routes>
    </main>
  );
};

export default App;
