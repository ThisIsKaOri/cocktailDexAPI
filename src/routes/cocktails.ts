import express, { Response, Request} from "express";
import { check, query } from "express-validator";

import { Cocktail, CocktailType } from "../models/Cocktail";
import { catchErrors, cocktailValidation, isAuth } from "../utils/utils";

const router = express();

//create cocktail
router.post("/", 
catchErrors, isAuth,
async ({ body }: Request, res: Response) => { 
    const { loggedUser } = res.locals; //res.locals.loggedUser esce da isAuth
    //controlliamo se l'utente é validato
    if(loggedUser.verify == ""){
        //cerchiamo se il cocktail é gia presente
        const findedCocktail = await Cocktail.findOne({ name: body.name});
        if (findedCocktail) {
            return res.status(409).json({ message: "cocktail already exist.." })
        }
        //se non esiste lo creiamo
        await Cocktail.create ({
            name: body.name,
            alcoholic: body.alcoholic,
            ibaFamily: body.ibaFamily,
            family: body.family,
            recipe: [...body.recipe],
            glass: body.galss,
            method: body.method,
            garnish: body.garnish,
            history: body.history,
            variants: [...body.variants],
            img: body.img
        });
        //ne prendiamo i dati
        const cocktailData = await Cocktail.findOne({ name : body.name });
        //montiamo la risposta con i dati
        const responseCocktail = {

            id: cocktailData!._id,
            name: cocktailData!.name,
            alcoholic: cocktailData!.alcoholic,
            ibaFamily: cocktailData?.ibaFamily,
            family: cocktailData?.family,
            recipe: [...cocktailData!.recipe],
            glass: cocktailData!.glass,
            method: cocktailData!.method,
            garnish: cocktailData!.garnish,
            history: cocktailData?.history,
            variants: cocktailData?.variants,
            img: cocktailData?.img
        }
        //e la ritorniamo
        return res.status(201).json(responseCocktail);
    };
    return res.status(403).json({message: "user not verified.."});
});

//read cocktail (query filtering)
router.get("/",
query("name").optional().isString(), 
query("alcoholic").optional().isBoolean(), 
query("ibaFamily").optional().isString(),
query("family").optional().isString(),
query("glass").optional().isString(),
query('ingredient').optional().isString().notEmpty().withMessage('Invalid ingredient value'),

catchErrors, 
async (req: Request, res: Response) => {
    //per questa operazione non é necessaria autenticazione
    //semplice con find senza filtro
    if(req.query.name) {
        //per il filtraggio uso una regex => value contains
        const nameRegex = new RegExp(`.*${req.query.name}.*`, "i");
        var cocktails = await Cocktail.find({ name: nameRegex });
    } else if(req.query.glass) {

        const glassRegex = new RegExp(`.*${req.query.glass}.*`, "i");
        var cocktails = await Cocktail.find({ glass: glassRegex });
    } else if(req.query.ingredient) {
        //per il filtraggio degli ingredienti uso una regex => inizia con
        //const ingredientRegex = new RegExp(`^${req.query.ingredient}`, "i");
        const ingredientRegex = new RegExp(`.*${req.query.name}.*`, "i");
        var cocktails = await Cocktail
        .find({ 'recipe': { $elemMatch: { ingredient: ingredientRegex } } });
    } else {
        //il resto delle queries
        var cocktails = await Cocktail.find({...req.query});
    }
    if(cocktails.length == 0){
        return res.status(404).json({message: "no cocktails found.."})
    }
    return res.status(200).json(cocktails);
});

//update cocktail
router.put("/:name", [
    check("name").isString().notEmpty().withMessage("name not valid")
],
cocktailValidation, catchErrors, isAuth,
async ({ params, body }: Request, res: Response) => {
    const { loggedUser } = res.locals; //res.locals.loggedUser esce da isAuth
    if(loggedUser.verify == ""){
        const cocktailName = params.name;
        //cerco il cocktail tramite name
        let modCocktail = await Cocktail.findOne({ name: cocktailName});
        if(!modCocktail){
            return res.status(404).json({message: "cocktail not found"});
        }
        //se lo trovo aggiorno i campi con i dati del body, i campi omessi
        //dovrebbero essere ignorati MA IN REALTA QUESTO SI FA CON PATCH
        //con PUT si è soliti modificare TUTTO      
            modCocktail.name = body.name,
            modCocktail.alcoholic = body.alcoholic,
            modCocktail.ibaFamily = body.ibaFamily,
            modCocktail.family = body.family,
            modCocktail.recipe = body.recipe,
            modCocktail.glass = body.glass,
            modCocktail.method = body.method,
            modCocktail.garnish = body.garnish,
            modCocktail.history = body.history,
            modCocktail.variants = body.variants,
            modCocktail.img = body.img
        //salvo le modifiche
        const updatedCocktail = await modCocktail.save();
        //restituisco il cocktail moddato
        return res.status(200).json(updatedCocktail);
    };
    return res.status(401).json({message: "user not verified.."});
});

//delete cocktail
router.delete("/:name", 
check("name").isString().notEmpty().withMessage("name not valid"),
catchErrors, isAuth, 
async ({ params }: Request, res: Response) => {
    const cocktailName = params.name;
    const { loggedUser } = res.locals; //res.locals.loggedUser esce da isAuth
    //controllo utente verificato
    if(loggedUser.verify == ""){
        //elimino il cocktail
        const deletedCocktail = await Cocktail.findOneAndDelete({name: cocktailName});
        //se non ritorna nulla il cocktail non esiste
        if(!deletedCocktail){
            return res.status(404).json({message: "cocktail not found.."})
        }
        return res.status(200).json(deletedCocktail);
    }
    return res.status(401).json({message: "user not verified.."});
});

export {router as cocktailsRoutes}