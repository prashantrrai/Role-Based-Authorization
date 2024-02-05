import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

export const ProtectedRouteAdmin = (props) => {
    const token = localStorage.getItem("token");

    const navigate = useNavigate();

    function presentPage() {
        navigate(-1);
    }

    if (!token) return <Navigate to="/" />;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if (token && jwtDecode(token).RoleId !== "17") {
            presentPage()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token && jwtDecode(token).RoleId !== "17"])



    const decodedData = jwtDecode(token);

    if (decodedData.RoleId === "17") {
        return <Outlet {...props} />;
    }
    else if (decodedData.RoleId !== "17") {
        presentPage()
    }
};
