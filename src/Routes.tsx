import Footer from "components/footer/Footer";
import NavBar from "components/navBar/NavBar";
import NotFound from "components/notFound/NotFound";
import PageDefault from "components/pageDefault/PageDefault";
import About from "pages/about/About";
import Dish from "pages/dish/Dish";
import Home from "pages/home/Home";
import Menu from "pages/menu/Menu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<PageDefault />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="about" element={<About />} />
            <Route path="prato/:id" element={<Dish />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
