//import json server
const jsonServer=require('json-server')
//create server application using Json Server
const mediaAppServer=jsonServer.create()
//create a middleware used by json server
const middleware=jsonServer.defaults()
//create router: setup router for db.json file
const router=jsonServer.router('db.json')
//applying middleware to server
mediaAppServer.use(middleware)
//applying router to server
mediaAppServer.use(router)
//Define PORT
const PORT=3000
//start the server
mediaAppServer.listen(PORT,()=>{
    console.log("Media App server started on PORT " +PORT);
})