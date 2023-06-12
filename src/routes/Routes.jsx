import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollTop from "./ScrollTop";
import Header from "../components/Header";
import Home from "./pages/Home";
import Product from "./pages/Product";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Employees from "./pages/Employees";
import Notfound from "./pages/Notfound";

const RoutePage = () => {
    return (
        <Router>
            <ScrollTop />
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Home />
                        </>
                    }
                />
                <Route
                    path="/products"
                    element={
                        <>
                            <Product />
                        </>
                    }
                />
                <Route
                    path="/aboutus"
                    element={
                        <>
                            <AboutUs />
                        </>
                    }
                />

                <Route
                    path="/contact"
                    element={
                        <>
                            <Contact />
                        </>
                    }
                />

                <Route
                    path="/employees"
                    element={
                        <>
                            <Employees />
                        </>
                    }
                />

                <Route
                    path="*"
                    element={
                        <>
                            <Notfound />
                        </>
                    }
                />
            </Routes>
        </Router>
    );
};

export default RoutePage;
