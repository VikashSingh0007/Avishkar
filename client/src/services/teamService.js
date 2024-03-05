import Axios from './Axios.js'


export const createTeam = async (data) => {
    const messageData = {
        teamName : data.teamName,
        teamSize : data.teamSize
    }
    const res = await Axios.post('/team/create',messageData);
    if(res.data){
        return res.data.success;
    }
    else{
        return false;
    }
}


export const deleteTeam = async (data) =>{
    const messageData = {
        teamId : data.teamId
    }
    const res = await Axios.post('/team/delete' , messageData);
    if(res.data){
        return res.data.success;
    }
    else{
        return false;
    }
}

export const updateTeam = async (data) => {
    const messageData = {
        teamId : data.teamId,
        teamName : data.teamName
    }
    const res = await Axios.post('/team/update' , messageData);
    if(res.data){
        return res.data.success;
    }
    else{
        return false;
    }
}

export const inviteTeam = async (data) => {
    const messageData = {
        teamId : data.teamId,
        email : data.email
    }
    const res = await Axios.post('/team/invite' , messageData);
    if(res.data){
        return res.data.success;
    }
    else{
        return false;
    } 
}

export const respondTeam = async (data) => {
    const messageData = {
        teamId : data.teamId,
        status : data.status
    }
    const res = await Axios.post('/team/respond' , messageData);
    if(res.data){
        return res.data.success;
    }
    else{
        return false;
    } 
}

export const getAllParticipating = async () => {
    // const messageData = {
    //     teamId : data.teamId,
    // }
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
