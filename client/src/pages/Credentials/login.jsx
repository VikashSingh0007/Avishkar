import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "./loginbg1.jpeg";
import { userLogin } from "../../services/authService";
import Navbar from "../Home/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const response = localStorage.getItem("userData");
    if (response && localStorage.getItem("userToken")) return navigate("/");
  }, []);

  const handleForgot = (e) => {
    e.preventDefault();
    navigate("/forgotpassword");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };

    const response = await userLogin(data);

    if (!response) {
      return;
    } else {
      localStorage.setItem("userToken", response.token);
      localStorage.setItem("userData", JSON.stringify(response.userData));
      navigate("/");
      return;
    }
  };

  return (
    <div className="containerAcco">
      <Navbar page="Login" />
      <div className="flex justify-center flex-wrap items-center h-[100vh] ">
        <div className="locard flex justify-center flex-col bg-yellow-200">
          <form className="w-full h-full gap-5 flex flex-col">
            <div className="gap-5 flex flex-col w-[15em] font-medium">
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  className="input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password mb-2">Password:</label>
                <input
                  className="input"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <a
                  onClick={handleForgot}
                  className="text-#0219e5-900 cursor-pointer"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <button
              className=" containerUser button-33 text-[1em]"
              onClick={(e) => handleSubmit(e)}
            >
              Login
            </button>
            <div>
              <div className="text-black text-md">
                Don't have an account yet?{" "}
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  Sign Up
                </span>
              </div>
            </div>
          </form>
        </div>
        <svg className="lofilter">
          <filter id="wavy2">
            <feTurbulence
              x="0"
              y="0"
              baseFrequency="0.01"
              numOctaves="3"
              seed="1"
            ></feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              scale="6"
            ></feDisplacementMap>
          </filter>
        </svg>
      </div>
    </div>
  );
};

export default Login;
