
import { Routes, Route } from "react-router-dom";
import Album from "./container/Album";
import Currency from "./container/Currency";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Album />} />
        <Route path="/currency/:currencySymbol" element={<Currency />} />
      </Routes>
    </div>
  );
}

export default App;