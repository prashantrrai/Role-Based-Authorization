import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const baseURL = "http://192.168.29.69:85/api/v1/crm/recruit-authenticate";

export const LoginPage = () => {
  const [obj, setObj] = useState({
    userName: "palakz@sscs.com",
    password: "SscSAdmIn@123"
  });

  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setObj((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.keys(obj).length !== 0) {
      try {
        const response = await axios.post(baseURL, obj);
        const token = response.data.responseData.token;
        console.log("Login success")
        localStorage.setItem("token", token);

        const decodedData = jwtDecode(token);
        console.log(decodedData)
        if (decodedData.RoleId) {
            navigate("/home")
        }

      } catch (error) {
        console.error("Error submitting data:", error);
      }
    } else {
      alert("All Fields Required!");
    }
  };

  return (
    <>
      <h2>Login Page Content </h2>
      <p>Enter your username and password to proceed</p>

      <form>
        <input
          type="text"
          placeholder="enter username"
          name="userName"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="enter password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Login</button>
      </form>
    </>
  );
};
