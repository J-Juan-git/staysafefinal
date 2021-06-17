import nc from 'next-connect'
import { getOneRoom } from '../../../controllers/roomControllers'
import dbConnect from '../../../config/dbConnect';
const handler = nc();
dbConnect();
handler.get(getOneRoom)
export default handler