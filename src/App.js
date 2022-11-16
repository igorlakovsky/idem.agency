import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Form } from "./Form";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/form" element={<Form />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
