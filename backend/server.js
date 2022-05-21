import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js';
import 'dotenv/config'

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect(process.env.MONGODB_URL || `mongodb+srv://admin:${process.env.MONGO_ADMIN_PASSWORD}@cluster0.lsmbj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// app.get('/api/products/:id', (req, res) => {
//     const product = data.products.find(x => x._id === req.params.id);
//     if (product) {
//         res.send(product);
//     } else {
//         res.status(404).send({ message: 'Product not Found' });
//     }
// })

// app.get('/api/products', (req, res) => {
//     res.send(data.products);
// })

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});
})

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});