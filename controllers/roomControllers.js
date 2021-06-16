import Room from '../models/room'
const getAllRooms = async (req,res)=>{
    try{
        const room = await Room.find()
        res.status(200).json({
            success: true,
            count: room.length,
            room
        })
    }
    catch(err){
        res.status(400).json({
            success: false,
            error: err.message
        })
    }
    
}

// Creation of a new Room api/rooms

const newRoom = async (req,res) =>{    
    try{
        const room = await Room.create(req.body)
        res.status(200).json({
            success: true,
            room
        })
    }
    catch(err){
        res.status(400).json({
            success: false,
            error: err.message
        })
    }
    
}


export {
    getAllRooms,
    newRoom
}