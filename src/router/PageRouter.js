import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AdminPage } from "../pages/admin/AdminPage";
import { LoginPage } from "../pages/Login";
import { UserPage } from "../pages/user/UserPage";
import { ProtectedRouteAdmin } from "./ProtectedRouteAdmin";
import { ProtectedRouteUser } from "./ProtectedRouteUser";
import { Salary } from "../pages/user/Salary";
import { HomePage } from "../pages/HomePage";

export const PageRouter = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LoginPage />} />

                <Route element={<ProtectedRouteAdmin />}>
                    <Route exact path="/home" element={<HomePage />} />
                    <Route exact path="/adminPage" element={<AdminPage />} />
                </Route>

                <Route element={<ProtectedRouteUser />}>
                    <Route exact path="/home" element={<HomePage />} />
                    <Route exact path="/userPage" element={<UserPage />} />
                    <Route exact path="/salary" element={<Salary />} />
                </Route>
                <Route exact path="/userPage" element={<UserPage />} />
            </Routes>
        </Router>
    );
};
