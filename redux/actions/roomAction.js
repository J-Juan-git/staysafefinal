import axios from 'axios'
import absoluteUrl from 'next-absolute-url'
import {
    ALL_ROOM_FAIL,
    ALL_ROOM_SUCCESS,
    CLEAR_ERRORS
} from '../constants/roomConstants'
// Get all Rooms

export const getRooms = (req) => async(dispatch) =>{
    try {
        const origin = absoluteUrl(req);
        const {data} = await axios.get(`${origin}/api/rooms`);

        dispatch({
            type: ALL_ROOM_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ALL_ROOM_FAIL,
            payload: error.response.data.message
        })
    }
}

// Clear errors

export const clearErrors =  () => async(dispatch) =>{
    dispatch({
        type: CLEAR_ERRORS
    })
}