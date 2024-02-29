import Axios from "./Axios.js";
import { Cookies } from "react-cookie";
const BaseUrl = "http://localhost:5000/api";
const signUp = async (data) => {
  try {
    const messageData = {
      name: data.name,
      email: data.email,
      college: data.college,
      gender: data.gender,
      phone: data.phone,
      password: data.password,
      resumeLink: data.resumeLink,
    };
    const res = await Axios.post(
      "http://localhost:8000/api/auth/signup",
      messageData
    );
    if (res.data) {
      return res.data.success;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error.message);
    return false;
  }
};
export default signUp;

export const signIn = async (data) => {
  const cookie = new Cookies();

  const messageData = {
    email: data.email,
    password: data.password,
  };
  try {
    const res = await Axios.post("/auth/signin", messageData);
    if (res.data) {
      cookie.set("userid", res.data.token);
      return res.data.success;
    } else {
      return false;
    }
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const forgotPassword = async (data) => {
  //email bhejo
  const messageData = {
    email: data.email,
  };
  try {
    const res = await Axios.post("/auth/forgotpassword", messageData);
    if (res.data) {
      return res.data.success;
    } else {
      return false;
    }
  } catch (e) {
    console.log(e.message);
    return false;
  }
};

export const resetPassword = async (data) => {
  // password ko reset karo
  const messageData = {
    token: data.token,
    password: data.password,
  };
  try {
    const res = await Axios.post("/auth/resetpassword", messageData);
    if (res.data) {
      return res.data.success;
    } else {
      return false;
    }
  } catch (e) {
    console.log(e.message);
    return false;
  }
};
