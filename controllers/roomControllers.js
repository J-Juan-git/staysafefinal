import Room from '../models/room'
import Features from '../utils/features'
// getAll Rooms
const getAllRooms = async (req,res)=>{    
    try{
        const features = new Features(Room.find(),req.query).search().filter()
        const room = await features.query
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
// Create a new room
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
// get a room detail
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
// update the required room
const updateRoom = async (req,res) =>{    
    try{
        let room = await Room.findById(req.query.id)
        if(!room){
            res.status(400).json({
                error: 'Cant update a Room that dosent exist'
            })
        }
        room = await Room.findByIdAndUpdate(req.query.id,req.body, {
            new: true
        })
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
// delete the required room => api/rooms/[id]
const deleteRoom = async (req,res) =>{    
    try{
        const room = await Room.findById(req.query.id)
        if(!room){
            res.status(400).json({
                error: 'Cant delete a Room that dosent exist'
            })
        }
        await room.remove();
        res.status(200).json({
            success: true,
            message: 'Room is deleted successfully'
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
    getOneRoom,
    updateRoom,
    deleteRoom
}