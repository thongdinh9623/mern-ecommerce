import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
const port = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

const app = express();

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  // Any route that is not api will be redirected to index.html
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is listening on port ${port}`));
