import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

export const ProtectedRouteUser = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  function presentPage() {
    navigate(-1);
  }

  if (!token) return <Navigate to="/" />;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(()=>{
    if(token && jwtDecode(token).UserId!== "3"){ 
      presentPage()
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[token && jwtDecode(token).UserId !== "18"])

  const decodedData = jwtDecode(token);


  if (decodedData.UserId === "3") {
    return <Outlet />;
  }
 else{
   presentPage()
  }
};