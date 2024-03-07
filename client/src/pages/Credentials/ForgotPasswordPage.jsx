import { useEffect, useState } from "react";
import "./ForgotPassword.css";
import { forgotPassword } from "../../services/authService";

import { useNavigate } from "react-router-dom";
export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  useEffect(() => {
    const response = localStorage.getItem("userData");
    if (response && localStorage.getItem("userToken")) return navigate("/");
  }, []);
  const navigate = useNavigate();
  const validateEmail = (email) => {
    if (email == "") {
      return false;
    }
    return true;
  };
  const showError = () => {
    document.querySelector("#error").innerHTML = "Email Cannot be Empty";
    setTimeout(() => {
      document.querySelector("#error").innerHTML = "";
    }, 3000);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      showError();
    } else {
      // perform action here
      // call backend here
      forgotPassword({ email: email }).then((res) => {
        if (res) {
          setTimeout(500, () => {
            navigate("/login");
          });
        }
      });
    }
  };
  return (
    <div
      className="backgroundrecard flex justify-center flex-wrap items-center h-[100vh]"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #d95f3b, #f0984a, #fcd6a5, #7aa9a3, #338f9a, #1c4c70)",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="recard flex justify-center flex-col"
        style={{
          background: "#d7d0a7",
        }}
      >
        <div className="text-4xl font-semibold"> Recover Password </div>
        <form className="w-full h-full gap-5 flex flex-col">
          <div className="gap-5 flex flex-col w-[15em] font-medium mt-5">
            <label htmlFor="email">Email:</label>
            <input
              class="input"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            className="button-33 text-[1.3em]"
            onClick={(e) => handleSubmit(e)}
          >
            Recover
          </button>
        </form>
      </div>
      <svg className="refilter">
        <filter id="wavy2">
          <feTurbulence
            x="0"
            y="0"
            baseFrequency="0.01"
            numOctaves="3"
            seed="1"
          ></feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="12"></feDisplacementMap>
        </filter>
      </svg>
    </div>
  );
}
