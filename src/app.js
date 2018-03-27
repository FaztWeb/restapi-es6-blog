import express from 'express';
import routes from './routes';
import mongoose from 'mongoose'

const app = express();

// database
mongoose.connect('mongodb://localhost/restapiexampleone')
  .then(db => console.log('db connected'))
  .catch(err => console.error(err));


// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(express.json());

// routes
app.use('/', routes);

export default app;
