import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const role = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    const token = localStorage.getItem("token")
    const decodedData = jwtDecode(token);
    console.log(token, decodedData)

    if (decodedData.RoleId === 17) {
        navigate("/adminPage")
    }
    else if (decodedData.RoleId === 15) {
        navigate("/userPage")
    }
}