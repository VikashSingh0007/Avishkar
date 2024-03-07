import Axios from "./Axios.js";
// console.log(`${import.meta.env.VITE_API_BACKEND_URL}`);
import { Cookies } from "react-cookie";
import { toast } from "react-toastify";

export const updateResume = async (data) => {
  try {
    const messageData = {
      resumeLink: data.resumeLink,
    };
    const res = await Axios.post("/team/updateresume", messageData);
    if (res.data) {
      toast.success(res.data.message);
      return res.data.success;
    } else {
      toast.error(res.data.message);
      return false;
    }
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

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
      paymentLink: data.paymentLink,
    };
    const res = await Axios.post(
      `${import.meta.env.VITE_API_BACKEND_URL}/auth/signup`,
      messageData
    );
    if (res.data) {
      toast.success(res.data.message);
      return res.data.success;
    } else {
      toast.error(res.data.message);
      return false;
    }
  } catch (error) {
    console.log(error);

    toast.error(error.response.data.message);
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
      toast.success(res.data.message);
      return res.data.success;
    } else {
      toast.error(res.data.message);
      return false;
    }
  } catch (error) {
    console.log("here");

    toast.error(error.response.data.message);
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
      toast.success(res.data.message);
      return res.data.success;
    } else {
      toast.error(res.data.message);
      return false;
    }
  } catch (error) {
    console.log(error.message);
    toast.error(error.response.data.message);
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
    console.log("reseting");
    const res = await Axios.post("/auth/resetpassword", messageData);
    if (res.data) {
      toast.success(res.data.message);
      return res.data.success;
    } else {
      toast.error(res.data.message);
      return false;
    }
  } catch (error) {
    console.log(error.message);
    toast.error(error.response.data.message);
    return false;
  }
};
export const verifyUser = async (token) => {
  try {
    const response = await Axios.post(
      `${import.meta.env.VITE_API_BACKEND_URL}/auth/verifyuser`,
      {
        token,
      }
    );
    if (response.data.success) {
      toast.success("User Verified Successfully");
      return true;
    } else {
      toast.error(response.data.message);
      return false;
    }
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
    return false;
  }
};

export const userLogin = async (data) => {
  try {
    const response = await Axios.post(
      `${import.meta.env.VITE_API_BACKEND_URL}/auth/login`,
      data
    );
    if (response.data.success) {
      return response.data;
    } else {
      toast.error(response.data.message);
      return false;
    }
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
    return false;
  }
};
