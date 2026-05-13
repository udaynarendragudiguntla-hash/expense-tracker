import express from 'express';
import cors from 'cors';
import userrouter from './router/userRouter.js'
const app = express();
app.use(cors())
const PORT =5000;
app.use(express.json());
app.use('/transaction',userrouter);
app.listen(PORT,()=>console.log(`server is running on ${PORT}`))