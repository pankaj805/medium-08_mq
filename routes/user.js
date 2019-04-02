import {Router} from 'express';
let router = Router();
import {getUserDetails} from '../services/UserService';

router.post('/hello',async (req,res,next)=>{
    let uname = req.body.username;
    let userDetails = await getUserDetails(req.db,uname)
    res.statusCode = 200;
    res.data = userDetails;
    next();
});

export default router;