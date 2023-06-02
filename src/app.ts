import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';


//importo le routes
import { authRoutes } from "./routes/auth";
import { ingredientsRoutes } from "./routes/ingredients";
import { cocktailsRoutes } from "./routes/cocktails";

export const app = express();

//configuro CORS per effettuare le chiamate mentre sviluppo il front-end
app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
  next();
});

app.use(express.json());
//definisco i path a cui saranno disponibili le mie routes
app.use('/v1/auth', authRoutes);
app.use('/v1/ingredients', ingredientsRoutes);
app.use('/v1/cocktails', cocktailsRoutes);

app.listen(3000, async () => {

    await mongoose.connect("mongodb://127.0.0.1:27017/cocktailDex");
    console.log("Server is running..")
});