import { toast } from 'react-toastify';
import Axios from './Axios.js'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export const makeDc = async (data) => {
    try{
        const messageData = {
            email : data.email,
            department:data.department
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
        console.log("event name"+data)
        const messageData = {
            eventName : data
        }
        const res = await Axios.post('/admin/getallteamevent' , messageData);
        if(res.data){
             toast.success(res.data.message);
             return {
                success : res.data.success,
                data : res.data.participatingTeam
             }
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
        
        const res = await Axios.get('/event/getallevent' );
        if(res.data){
             toast.success(res.data.message);
             return {
                success : true,
                data : res.data.data
             }
        }
        else{
          toast.error(res.data.message);
          return {
            success : false
        }
        }
    }
    catch(error){
        toast.error(error.response.data.message);
        return {
            success : false
        }
    }
}

export const downloadExcelEventFile = async (data) => {
    try{
        const messageData = {
            eventName : data
        }
        
        const res = await Axios.post('/admin/download' , messageData);
        if(res.data){
            const jsonData = res.data.data
            const worksheet = XLSX.utils.json_to_sheet(jsonData);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
            const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
            const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            saveAs(data, 'data.xlsx');
            return{
                success : true,
                data : res.data.data
            }
        }
        else{
            return {
                success : false
            }
        }
    }
    catch(error){
        toast.error(error.response.data.message);
        return {
            success : false
        }
    }
}