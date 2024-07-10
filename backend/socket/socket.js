import { Server } from "socket.io";
import http from 'http';
import express from 'express';

const app=express();
const server = http.createServer(app);
const io = new Server(server,{
    cors: {
        origin: ["http://localhost:3000"],
        methods:["GET", "POST"]
        }
    }
);

export const getRecieverSocketId = (recieverId)=>{
    return userSocketMap[recieverId];
};

const userSocketMap = {}; //here user id will be the key

io.on('connection', (socket)=>{
    console.log("a user connected", socket.id);
    const userId  = socket.handshake.query.userId;
    if(userId!= "undifined") userSocketMap[userId]= socket.id;
    // send the even to all connected clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
    
    // used to listen to the events from both sides slient and server
    socket.on("disconneted", ()=> {
        console.log("user disconneted", socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));

    })
})

export {app, io, server}
