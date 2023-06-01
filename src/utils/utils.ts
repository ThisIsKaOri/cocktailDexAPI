import { Response, Request, NextFunction} from "express";
import { body, validationResult } from "express-validator";

import jwt from "jsonwebtoken";
export const jwtToken = "shhhhhhh";

import { User } from "../models/User";

export const isAuth = async ({ headers }: Request, res: Response, next: NextFunction) => {
    try {
        //prende la mail con cui è stato generato il token facendo il match tra 
        //il token presente nell'header e la passphrase(jwtToken)
        const tokenMail = await jwt.verify(headers.authorization!, jwtToken) as {email : string};
        //controlla se nel database è presente l'utente con quella mail e
        //assegna la mail alla variabile loggedUser
        res.locals.loggedUser = await User.findOne({email: tokenMail.email});        
        next();  
    } catch (error) {
        return res.status(401).json({message: "user not logged.."});
    }   
};

export const catchErrors = (req: Request, res: Response, next: NextFunction) => {
    //gestione errori validator
    const errors = validationResult(req); 
    //se l'array non è vuoto e quindi ci sono errori
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    };
    next();
};

export const userValidation = [
    body("name").notEmpty().withMessage("name value required"),
    body("surname").notEmpty().withMessage("surname value required"),
    body("email").isEmail().withMessage("invalid email"),
    body("password").isLength({ min: 4 }).withMessage("short password"),
];

export const credentialsValidation = [
    body("email").isEmail().notEmpty().withMessage("invalid email"),
    body("password").isString().notEmpty().withMessage("invalid password"),
];

export const cocktailValidation = [
    body('name').isString().notEmpty().withMessage('Invalid name value'),
    body('recipe.*.ingredient').isString().notEmpty().withMessage('Invalid ingredient name'),
    body('recipe.*.qty').optional().isString().notEmpty().withMessage('Invalid qty value'),
    body('recipe.*.oz').optional().isString().notEmpty().withMessage('Invalid oz value'),
    body('alcoholic').isBoolean().withMessage('Invalid alcoholic value'),
    body('ibaFamily').optional().isString().notEmpty().withMessage('Invalid ibaFamily name'),
    body('family').optional().isString().notEmpty().withMessage('Invalid family name'),
    body('glass').isString().notEmpty().withMessage('Invalid glass name'),
    body('method').isString().notEmpty().withMessage('Invalid method value'),
    body('garnish').isString().notEmpty().withMessage('Invalid garnish value'),
    body('history').optional().isString().notEmpty().withMessage('Invalid history value'),
    body('variants.*').optional().isString().notEmpty().withMessage('Invalid variant value'),
    body('img').optional().isString().notEmpty().withMessage('Invalid img value')
];

export const ingredientValidation = [
    body('name').isString().notEmpty().withMessage('Invalid ingredient name'),
    body('sterength').optional().isString().notEmpty().withMessage('Invalid strength value'),
    body('replacements.*').optional().isString().notEmpty().withMessage('Invalid replacements value'),
    body('description').optional().isString().notEmpty().withMessage('Invalid description value'),
    body('cocktails.*').isString().notEmpty().withMessage('Invalid cocktails value'),
    body('img').optional().isString().notEmpty().withMessage('Invalid img value')
];