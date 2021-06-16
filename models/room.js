import mongoose from 'mongoose'
const roomSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[ true,"Please enter the room name"],
        trim: true,
        maxlength: [100,'Room name cant be more than 100 characters!']
    },
    pricePerNight:{
        type: Number,
        required:[ true,"Please enter the room price"],        
        maxlength: [4,'Enter Room price!'],
        default: 0
    },
    description:{
        type: String,
        required: [true,"Enter the room Address"],        
    },
    guestCapacity:{
        type: Number,
        required: true
    },
    noOfBeds:{
        type: Number,
        required: false
    },
    internet:{
        type: Boolean,
        default: false
    },
    breakfast:{
        type: Boolean,
        default: false
    },
    airCondition:{
        type: Boolean,
        default: false
    },
    petsALlowed:{
        type: Boolean,
        default: false
    },
    roomCleaning:{  
        type: Boolean,
        default: false
    },
    ratings:{
        type: Number,
        default: false
    },
    images:[
            {
                public_id: {
                    type: String,
                    required: true,                
                },
                url:{
                    type: String,
                    required:true
                }
            }
        ],        
        category:{
            type: String,
            requried: true,
            enum:{
                values:[
                    'King',
                    'Single',
                    'Twins'
                ],
                message: "Select any one of the above Category"
            }
        },
        reviews:[
            {
                user:{
                    type: mongoose.Schema.ObjectId,
                    ref: 'User',                    
                },
                name:{
                    type: String,
                    required: true
                },
                ratings: {
                    type: Number,
                    required: true
                },
                comment:{
                    type: String,
                    required: true
                }
            }
        ],
        user:{
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: false             
        },
        createdAt:{
            type: Date,
            default: Date.now
        }
})
export default mongoose.models.Room || mongoose.model('Room',roomSchema);