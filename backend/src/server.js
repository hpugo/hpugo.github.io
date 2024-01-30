import express from 'express';
import cors from 'cors';
import shoeRouter from './routers/shoes.router.js'
import userRouter from './routers/user.router.js'

const app = express ();
app.use(express.json());

app.use(cors({
    credentials:true,
    origin: ['http://localhost:3000']
})
);

app.use('/api/shoes', shoeRouter);
app.use('/api/users', userRouter);

const PORT = 3001

app.listen(PORT, () => {
    console.log('listening on port' + PORT);
});