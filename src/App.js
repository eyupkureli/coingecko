
import { Routes, Route } from "react-router-dom";
import Album from "./Album";
import Currency from "./Currency";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Album />} />
        <Route path="/currency/:symbol" element={<Currency />} />
      </Routes>
    </div>
  );
}

export default App;