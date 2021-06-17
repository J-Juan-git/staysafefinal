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

// Get a room detail => api/rooms/:id
const getOneRoom = async (req,res) =>{    
    try{
        const room = await Room.findById(req.query.id)
        if(!room){
            res.status(400).json({
                error: 'Room not found with this ID'
            })
        }
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
    newRoom,
    getOneRoom
}