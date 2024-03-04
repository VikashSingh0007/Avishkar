import axios from "axios";
import { toast } from "react-toastify";
import { Cookies } from "react-cookie";
const base = "http://localhost:8000/api";
const Axios = axios.create({
  // change this url to base url if required
  baseURL: base,
  headers: {
    Accept: "application/json",
  },
});

Axios.interceptors.request.use(async (config) => {
  const cookie = new Cookies();
  const accessToken = cookie.get("userid"); // get the accessToken from here
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

// Axios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     if (error.code === "ERR_NETWORK"){
//       toast.error("SERVER INACTIVE")
//       return Promise.reject(error)
//     }
//     try{
//       const errData = error.response.data.error;
//       if (errData.status == 401 && errData.message=="Token Expired"){

//         const refreshToken = sessionStorage.getItem("refreshToken");

//         console.log("Refreshing Access Token",refreshToken)
//         const res = await Axios.post("/auth/refresh", {
//             refreshToken: refreshToken
//           }).catch(err=>{
//           console.log("ERR",err)
//         })

//         sessionStorage.setItem("accessToken", res.data.accessToken);

//         return Axios.request(error.config)
//       }
//       return Promise.reject(error)
//     }catch(err){
//       console.log(err)
//       return Promise.reject(error);
//     }
//   },
// );

export default Axios;
