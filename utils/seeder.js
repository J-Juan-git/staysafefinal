const room = require('../models/room')
const rooms = require('../data/rooms.json')
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://juan123:juan123@cluster0.ikunr.mongodb.net/staysafe?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(con => console.log("Connected to db"))

const fillRooms = async ()=>{
    try {
        await room.deleteMany();
        console.log("Deleted all rooms");
        await room.insertMany(rooms);
        console.log("Added all rooms");
        process.exit();
    } catch (error) {
        console.log(error.message)   
    }
}
fillRooms()