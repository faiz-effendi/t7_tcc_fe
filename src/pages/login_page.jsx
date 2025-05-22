import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const handleLogin = async () => {
    await axios
      .post(`${API_URL}/login`, { email, password }, { withCredentials: true })
      .then((response) => {
        console.log("Login successful", response.data);
        localStorage.setItem("localSavedUserData", JSON.stringify({ accessToken: response.data.accessToken }));
        navigate("/home");
      })
      .catch((error) => {
        console.log("Login failed: ", error);
        alert("Login failed. please ensure your email and password are correct.");
      })
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="bg-gray-300 w-[400px] rounded-lg p-6">
        <h1 className="text-center text-2xl font-bold mb-4">Hii, welcome back!</h1>
        <input type="email" placeholder="Email" className="border-2 border-gray-500 w-full px-2 py-1 rounded-md mb-3" onChange={ e => { setEmail(e.target.value) }}/>
        <input type="password" placeholder="Password" className="border-2 border-gray-500 w-full px-2 py-1 rounded-md" onChange={ e=> { setPassword(e.target.value) }}/>
        <div className="rounded-md w-full bg-gray-400 hover:bg-green-500 cursor-pointer text-center text-white p-1 mt-4" onClick={ handleLogin }>
          Login
        </div>
      </div>
    </div>
  )
}

export default Login;