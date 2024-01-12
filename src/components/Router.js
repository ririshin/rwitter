import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Navigation from "./Navigation";

const AppRouter = ({ isLoggedIn }) => {
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Routes>
                {isLoggedIn ? (
                    <Route exact path="/" element={<Home />}></Route>
                ) : (
                    <Route exact path="/" element={<Auth />}></Route>
                )}
            </Routes>
        </Router>
    );
};

export default AppRouter;
