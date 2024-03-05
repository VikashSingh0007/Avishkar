import { toast } from 'react-toastify';
import Axios from './Axios.js'


export const createTeam = async (data) => {
    try{
        const messageData = {
            teamName : data.teamName,
            teamSize : data.teamSize
        }
        const res = await Axios.post('/team/create',messageData);
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
        console.log(error);
        toast.error(error.response.data.message);
        return false;
    }
   
}


export const deleteTeam = async (data) =>{
    try{
        const messageData = {
            teamId : data.teamId
        }
        const res = await Axios.post('/team/delete' , messageData);
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
        console.log(error);
        toast.error(error.response.data.message);
        return false; 
    }
   
}

export const updateTeam = async (data) => {
    try{
        const messageData = {
            teamId : data.teamId,
            teamName : data.teamName
        }
        const res = await Axios.post('/team/update' , messageData);
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
        console.log(error);
        toast.error(error.response.data.message);
        return false; 
    }
    
   
}

export const inviteTeam = async (data) => {
    try{
        const messageData = {
            teamId : data.teamId,
            email : data.email
        }
        const res = await Axios.post('/team/invite' , messageData);
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
        console.log(error);
        toast.error(error.response.data.message);
        return false; 
    }
    
}

export const respondTeam = async (data) => {
    try{
        const messageData = {
            teamId : data.teamId,
            status : data.status
        }
        const res = await Axios.post('/team/respond' , messageData);
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
        console.log(error);
        toast.error(error.response.data.message);
        return false;
    }
     
}

export const getAllParticipating = async () => {
   
    try{
        const res = await Axios.get('/team/getparticipating',{
            // params : messageData
        });
      
        if(res.data){
            return {
                success : false,
                teams : res.data,
            }
        }
        else{
            return {
                success : false,
            }
        }
    }
    catch(error){
        console.log(error);
        toast.error(error.response.data.message);
        return false;
    }
    
}

export const getAllTeamMembers = async (data) => {
    const messageData = {
        teamId : data.teamId,
    }
    const res = await Axios.get('/team/allmembers',{
        params : messageData
    });
    if(res.data){
        return {
            success : false,
            teams : res.data,
        }
    }
    else{
        return {
            success : false,
        }
    }
}

export const getAllInvite = async () => {
    const messageData = {
        
    }
    const res = await Axios.get('/team/getinvite',{
        params : messageData
    });
    if(res.data){
        return {
            success : false,
            teams : res.data,
        }
    }
    else{
        return {
            success : false,
        }
    }
}
