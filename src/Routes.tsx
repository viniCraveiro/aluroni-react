import NavBar from "components/navBar/NavBar";
import PageDefault from "components/pageDefault/PageDefault";
import Home from "pages/home/Home";
import Menu from "pages/Menu/Menu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function AppRouter() {
  return (
    <main>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<PageDefault />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}
