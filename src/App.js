import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./Home";
import { Registation } from "./Registation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/form" element={<Registation />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
