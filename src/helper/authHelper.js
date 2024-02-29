const { hashSync, genSaltSync } = require("bcrypt");
const { randomBytes } = require("crypto");
const { readFileSync } = require("fs");
const { join } = require("path");
const { sign } = require("jsonwebtoken");

const privateKEY = process.env.PRIVATE_KEY
const signOptions = {
    issuer: "CulravAvishkar 2k24",
    expiresIn: "24h",
    algorithm: "RS256",
};

const generateUsername = (email) => {
    let username = email.substring(0, email.indexOf("@"));
    const randomNumber = Math.floor(Math.random() * 9000 + 1000);
    username = username + randomNumber.toString();
    return username;
}



const checkMNNITEmail = (email) => {
    const array = email.split('@');
    if(array[1] === "mnnit.ac.in"){
        return true;
    }
    else{
        return false;
    }
}

module.exports = {
    generateUsername,
    checkMNNITEmail,

}