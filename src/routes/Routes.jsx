import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollTop from "./ScrollTop";
import Header from "../components/Header";
import Home from "./pages/Home";
import Events from "./pages/Events";
import News from "./pages/News";
import NewView from "./pages/NewView";
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
                    path="/events"
                    element={
                        <>
                            <Events />
                        </>
                    }
                />
                <Route
                    path="/news"
                    element={
                        <>
                            <News />
                        </>
                    }
                />
                <Route
                    path="/news/:newId"
                    element={
                        <>
                            <NewView />
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
