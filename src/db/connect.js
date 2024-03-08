const mongoose =require('mongoose');
const { loadAllEvents } = require('../controllers/event.controller');
const pool=mongoose.connect(process.env.DATABASE_URL,{
    connectTimeoutMS: 10000
})
.then(function(db){
  console.log("DB is connected 🎉🎉🎉");
  loadAllEvents()
})
.catch(function(err){
  console.log('Error at DataBase Connection!!',err.message);
})

mongoose.connection.on('connected',()=>{
  console.log('connectes to data base')
})
mongoose.connection.on('error',(err)=>{
  console.log(err.message);
}) 
mongoose.connection.on('disconnected',()=>{
  console.log('db disconnected succesfully');
})

process.on('SIGINT',async ()=>{
  await mongoose.connection.close();
  process.exit(0);
})
module.exports=pool;

