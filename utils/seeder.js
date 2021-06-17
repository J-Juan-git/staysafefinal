const Room = require('../models/room')
const rooms = require('../data/rooms.json')
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://juan123:juan123@cluster0.ikunr.mongodb.net/staysafe?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(con => console.log("Connected to db"))

const fillRooms = async ()=>{
    try{
    await Room.deleteMany();
    console.log('Rooms are deleted')
    await Room.insertMany(rooms)
    console.log("All rooms are added!!");
    }
    catch(e){
        console.log(e.message)
    }
}