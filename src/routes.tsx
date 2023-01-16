import Home from "pages/home/Home";
import Menu from "pages/Menu/Menu";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}
