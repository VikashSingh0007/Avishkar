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
module.exports = {
    addUserToDepartment,
    findUserInDepartment
}

