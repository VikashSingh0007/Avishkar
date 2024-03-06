import { toast } from 'react-toastify';
import Axios from './Axios.js'
// import { getAllEvents } from '../../../src/controllers/event.controller.js';

export const makeDc = async (data) => {
    try{
        const messageData = {
            email : data.email,
        }
        const res = await Axios.post('/admin/makedc' , messageData);
        if(res.data){
             toast.success(res.data.message);
             return res.data.success;
        }
        else{
          toast.error(res.data.message);
            return false;
        }
    }
    catch(error){
        toast.error(error.response.data.message);
    }
}

export const verifyPayment = async (data) => {
    try{
        const messageData = {
            email : data.email,
            status : data.status
        }
        const res = await Axios.post('/admin/verifypayment' , messageData);
        if(res.data){
             toast.success(res.data.message);
             return res.data.success;
        }
        else{
          toast.error(res.data.message);
            return false;
        }
    }
    catch(error){
        toast.error(error.response.data.message);
    }
}

export const getFeeNotPaid = async () => {
    try{
        
        const res = await Axios.get('/admin/getallfeenotpaid');
        if(res.data){
             toast.success(res.data.message);
             return res.data;
        }
        else{
          toast.error(res.data.message);
            return false;
        }
    }
    catch(error){
        toast.error(error.response.data.message);
    }
}

export const getTeamParticipatingInEvent = async (data) => {
    try{
        const messageData = {
            eventName : data.eventName
        }
        const res = await Axios.post('/admin/getallteamevent' , messageData);
        if(res.data){
             toast.success(res.data.message);
             return res.data.success;
        }
        else{
          toast.error(res.data.message);
            return false;
        }
    }
    catch(error){
        toast.error(error.response.data.message);
    }
}

export const getAllEvents = async (data) => {
    try{
       
        const res = await Axios.get('/admin/getallevent' );
        if(res.data){
             toast.success(res.data.message);
             return res.data.data;
        }
        else{
          toast.error(res.data.message);
            return false;
        }
    }
    catch(error){
        toast.error(error.response.data.message);
    }
}