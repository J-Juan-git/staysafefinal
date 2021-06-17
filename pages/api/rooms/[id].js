import nc from 'next-connect'
import { getOneRoom , updateRoom, deleteRoom} from '../../../controllers/roomControllers'
import dbConnect from '../../../config/dbConnect';
const handler = nc();
dbConnect();
handler.put(updateRoom)
handler.get(getOneRoom)
handler.delete(deleteRoom)
export default handler