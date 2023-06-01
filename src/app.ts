import express from 'express';
import mongoose from 'mongoose';

//importo le routes
import { ingredientsRoutes } from "./routes/ingredients";
import { cocktailsRoutes } from "./routes/cocktails";

export const app = express();

app.use(express.json());
//definisco i path a cui saranno disponibili le mie routes
app.use('/v1/ingredients', ingredientsRoutes);
app.use('/v1/cocktails', cocktailsRoutes);

app.listen(3000, async () => {

    await mongoose.connect("mongodb://127.0.0.1:27017/cocktailDex");
    console.log("Server is running..")
});