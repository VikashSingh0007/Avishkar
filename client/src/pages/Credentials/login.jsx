import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "./loginbg1.jpeg";
import { userLogin } from "../../services/authService";
import Navbar from "../Home/Navbar";
import Old from "../Home/assets/old.jpg"
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
    <div className="containerAcco absolute w-full h-full overflow-hidden">
      <div className="absolute z-[-1] ">
        <img src={Old} className=" object-cover w-screen h-screen  z-[-1]"/>
        </div>
      <Navbar page="Login" className=""/>
      <div className="flex  justify-center flex-wrap items-center h-[100vh] ">
        <div className="locard flex justify-center flex-col opacity-80 hover:opacity-100 bg-yellow-200 rounded-2xl">
          <form className="w-full h-full gap-5 flex flex-col">
            <div className="gap-5 mb-8 flex flex-col w-[15em] font-medium">
              <div className="">
                <label className="font-Robo" htmlFor="email">Email</label>
                <input
                  className="input text-[18px]  "
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="">
                <label className="font-Robo" htmlFor="password  mb-2">Password</label>
                <input
                  className="input text-[14px]"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <a
                  onClick={handleForgot}
                  className="font-Robo text-#0219e5-900 cursor-pointer"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <button
      className="containerUser font-Robo   text-orange-950  font-bold rounded-[2px] h-10 text-[1em] border-opacity-25 hover:bg-orange-800 hover:shadow-9xl"
      style={{
        // Add box shadow styles here
        boxShadow: "0 0 0 1.5px #000000", // Example box shadow
      }}
    >
              Login
            </button>
            <div>
              <div className="text-black font-Robo text-lg font-semibold tracking-tighter">
                Don't have an account yet?{" "}
                
                <span
                  className="text-orange-800  font-Robo text-lg  cursor-pointer tracking-wide hover:text-orange-950"
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