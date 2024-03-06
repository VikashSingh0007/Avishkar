const addUserToDepartment = (array , id) => {
    const n = array.length;
    for(let i = 0 ; i < n ; i++){
        if(array[i] == id){
            console.log('here');
            return array;
        }
    }
    const ans = [...array , id];
    return ans;
}
const findUserInDepartment = (array , id) => {
    const n = array.length;
    for(let i = 0 ; i < n; i++){
        if(array[i] == id){
            return true;
        }
    }
    return false;
}
const checkIfJoined = (user , event) => {
    // console.log("in CheckIfJoined()")
    for(let i = 0 ; i < user.participatingEvent.length ; i++){
        let id1  = JSON.stringify(user.participatingEvent[i]) 
        let id2 = JSON.stringify(event._id)
        // console.log("check in ",id1 === id2)
        if(id1 === id2){
            return true;
        }
    }
    return false
}

module.exports = {
    addUserToDepartment,
    findUserInDepartment,
    checkIfJoined
}

