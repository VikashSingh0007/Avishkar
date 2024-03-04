import "./login.css"; // Import your CSS file
import { useState } from "react";
import bg from "./loginbg1.jpeg";
import { userLogin } from "../../services/authService";
import { useNavigate } from "react-router-dom";
const Lo = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
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
      navigate("/");
      return;
    }
    // if(response.data){

    // }
    // await axios.post("http://localhost:5000/api/auth/resetpassword", data);
  };
  return (
    <div
      className="flex justify-center flex-wrap items-center h-[100vh]"
      // style={{
      //   backgroundImage: `url(${bg})`,
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      // }}
      style={{
        background:
          "linear-gradient(to bottom, #d95f3b, #f0984a, #fcd6a5, #7aa9a3, #338f9a, #1c4c70)",
      }}
    >
      <div className="locard flex justify-center flex-col">
        <form className="w-full h-full gap-5 flex flex-col">
          <div className="gap-5 flex flex-col w-[15em] font-medium">
            <label htmlFor="email">Email:</label>
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Password:</label>
            <input
              className="input"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="button-33 text-[1em]"
            onClick={(e) => handleSubmit(e)}
          >
            Login
          </button>
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
          <feDisplacementMap in="SourceGraphic" scale="6"></feDisplacementMap>
        </filter>
      </svg>
    </div>
  );
};

export default Lo;
