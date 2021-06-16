import nc from 'next-connect'
import { getAllRooms,newRoom } from '../../../controllers/roomControllers'
import dbConnect from '../../../config/dbConnect';
const handler = nc();
dbConnect();
handler.get(getAllRooms)
handler.post(newRoom)
export default handler