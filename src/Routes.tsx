import Footer from "components/footer/Footer";
import NavBar from "components/navBar/NavBar";
import PageDefault from "components/pageDefault/PageDefault";
import About from "pages/about/About";
import Home from "pages/home/Home";
import Menu from "pages/menu/Menu";
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
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
        <Footer/>
      </Router>
    </main>
  );
}
