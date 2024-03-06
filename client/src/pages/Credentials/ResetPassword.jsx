import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./ForgotPassword.css";

import { resetPassword } from "../../services/authService";
function checkIfSame(a,b){
    return a!==b;
}
export default function ResetPassword(){
    const [password , setPassword] = useState('');
    const [confirmPassword , setConfirmPassword] = useState('');
    const params =  useParams(); //use this to get the token for calling
    const navigate = useNavigate();
    useEffect(()=>{
      const response=localStorage.getItem("userData");
      if(response||localStorage.getItem("userToken")) return navigate('/');
    },[])
    const showError = () => {
        toast.error("Password Don't Match")
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!password){
            toast.error("Password Field Cannot Be Empty")
      
        }
        if(!confirmPassword){
            toast.error("Confirm Password Field Cannot Be Empty") 
        }
        if(checkIfSame(password,confirmPassword)){
            showError();
        }
        else{
           
            const  token  = params.token;
            console.log(token)
            const messageData = {
              token : token,
              password : password
            }
           await resetPassword(messageData)
           navigate('/login')
           return
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
              onChange={handlePasswordChange}
            />
  
            <label htmlFor="password">Confirm Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleConfirmChange}
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