import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Chart1 from "./pages/chart1/Chart1";
const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chart1" element={<Chart1 />} />
      </Routes>
    </main>
  );
};

export default App;
