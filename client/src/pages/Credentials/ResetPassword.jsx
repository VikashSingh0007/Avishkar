import { useState } from "react";
import { useParams } from "react-router-dom";
import "./ForgotPassword.css";
function checkIfSame(a,b){
    return a!==b;
}
export default function ResetPassword(){
    const [password , setPassword] = useState('');
    const [confirmPassword , setConfirmPassword] = useState('');
    const params =  useParams(); //use this to get the token for calling
    const showError = () => {
        document.querySelector('#error').innerHTML = "Passwords Don't Match";
        setTimeout(()=>{
            document.querySelector('#error').innerHTML = '';
        },3000)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!password||!confirmPassword){
            document.querySelector('#error').innerHTML = "Enter Password";
        setTimeout(()=>{
            document.querySelector('#error').innerHTML = '';
        },3000)
        }
        if(checkIfSame(password,confirmPassword)){
            showError();
        }
        else{

            // write procceding logic here

        }
    }
    const handleConfirmChange = (e) => {
        setConfirmPassword(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    return (
      <div className="backgroundrecard flex justify-center flex-wrap items-center h-[100vh]">
      <div className="recard flex justify-center m-4 flex-col">
        <div className="  text-4xl font-semibold"> Reset Password </div>
        <form className="w-full h-full flex flex-col">
          <div className="gap-5 flex flex-col w-[15em] font-medium">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              onChange={(e) => setEmail(e.target.value)}
            />
  
            <label htmlFor="password">Confirm Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="text-[1.3em] mb-12" onClick={(e) => handleSubmit(e)}>
            Reset
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
      
    )
}