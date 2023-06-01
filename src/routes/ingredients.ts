import express, { Response, Request} from "express";
import { check, query } from "express-validator";

import { Ingredient, IngredientType } from "../models/Ingredient";
import { catchErrors, ingredientValidation, isAuth } from "../utils/utils";

const router = express();


//create ingredient
router.post("/", 
ingredientValidation, catchErrors, isAuth,
async ({ body }: Request, res: Response) => { 
    const { loggedUser } = res.locals; //res.locals.loggedUser esce da isAuth
    //controlliamo se l'utente é validato
    if(loggedUser.verify == ""){
        //cerchiamo se l'ingrediente é gia presente
        const findedIngredient = await Ingredient.findOne({ name: body.name});
        if (findedIngredient) {
            return res.status(409).json({ message: "ingredient already exist.." })
        }
        //se non esiste lo creiamo
        await Ingredient.create ({
            name: body.name,
            strength: body.strength,
            replacements: [...body.replacements],
            description: body.description,
            cocktails: [...body.cocktails],
            img: body.img
        });
        //ne prendiamo i dati
        const ingredientData = await Ingredient.findOne({ name : body.name });
        //montiamo la risposta con i dati
        const responseIngredient = {

            id: ingredientData!._id,
            name: ingredientData!.name,
            strength: ingredientData!.strength,
            replacements: [...ingredientData!.replacements],
            description: ingredientData!.description,
            cocktails: [...ingredientData!.cocktails],
            img: ingredientData?.img
        }
        //e la ritorniamo
        return res.status(201).json(responseIngredient);
    };
    return res.status(405).json({message: "user not verified.."});
});

//read ingredient (query filtering)
router.get("/",
query("name").optional().isString(), 
query("strength").optional().isString(),
query('cocktail').optional().isString().notEmpty().withMessage('Invalid cocktail value'),

catchErrors, 
async (req: Request, res: Response) => {
    //per questa operazione non é necessaria autenticazione
    //semplice con find senza filtro
    if(req.query.name) {
        //per il filtraggio uso una regex => value contains
        const nameRegex = new RegExp(`.*${req.query.name}.*`, "i");
        var ingredients = await Ingredient.find({ name: nameRegex });
    } else if(req.query.cocktail) {

        const cocktailRegex = new RegExp(`.*${req.query.cocktail}.*`, "i");
        var ingredients = await Ingredient
        .find({ 'cocktails': { $in: [cocktailRegex] } });
    } else {
        if(req.query.strength === ""){

            var ingredients = await Ingredient.find({strength: ""});
        } else {
            const strengthRegex = new RegExp(`.*${req.query.strength}.*`, "i");
            var ingredients = await Ingredient.find({strength: strengthRegex});
        }
    }
    if(ingredients.length == 0){
        return res.status(404).json({message: "no ingredients found.."})
    }
    return res.status(200).json(ingredients);
});

//update ingredient
router.put("/:name", [
    check("name").isString().notEmpty().withMessage("name not valid")
],
ingredientValidation, catchErrors, isAuth,
async ({ params, body }: Request, res: Response) => {
    const { loggedUser } = res.locals; //res.locals.loggedUser esce da isAuth
    if(loggedUser.verify == ""){
        const cocktailName = params.name;
        //cerco l'ingrediente tramite name
        let modIngredient = await Ingredient.findOne({ name: cocktailName});
        if(!modIngredient){
            return res.status(404).json({message: "ingredient not found"});
        }
        //se lo trovo aggiorno i campi con i dati del body, i campi omessi
        //dovrebbero essere ignorati MA IN REALTA QUESTO SI FA CON PATCH
        //con PUT si è soliti modificare TUTTO      
            modIngredient.name = body.name,
            modIngredient.strength = body.strength,
            modIngredient.replacements = body.replacements,
            modIngredient.description = body.description,
            modIngredient.cocktails = body.cocktails,
            modIngredient.img = body.img
        //salvo le modifiche
        const updatedIngredient = await modIngredient.save();
        //restituisco il cocktail moddato
        return res.status(200).json(updatedIngredient);
    };
    return res.status(401).json({message: "user not verified.."});
});

//delete Ingredient
router.delete("/:name", 
check("name").isString().notEmpty().withMessage("name not valid"),
catchErrors, isAuth, 
async ({ params }: Request, res: Response) => {
    const ingredientName = params.name;
    const { loggedUser } = res.locals; //res.locals.loggedUser esce da isAuth
    //controllo utente verificato
    if(loggedUser.verify == ""){
        //elimino l'ingrediente
        const deletedIngredient = await Ingredient.findOneAndDelete({name: ingredientName});
        //se non ritorna nulla l'ingrediente non esiste
        if(!deletedIngredient){
            return res.status(404).json({message: "ingredient not found.."})
        }
        return res.status(200).json(deletedIngredient);
    }
    return res.status(401).json({message: "user not verified.."});
});


export {router as ingredientsRoutes}