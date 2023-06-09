import mongoose from "mongoose";

export type UserT = {
    _id?: string;
    name?: string;
    surname?: string;
    email: string;
    password: string;
    verify?: string;
    token?: string;
    isAdmin: boolean;
    favorites?: String[];
};

//creo lo schema, la struttura dei document
const userSchema = new mongoose.Schema({

    name: { type: String },
    surname: { type: String },
    email: { 
        type: String, 
        reuired: true 
    },
    password: { 
        type: String, 
        reuired: true 
    },
    verify: { type: String},
    token: { type: String},
    isAdmin: {
        type: Boolean, 
        reuired: true
    },
    favorites: {tipe: [String]}
});

//creo il model per applicare la struttura scelta a tutti i document nella
//collection che verrà creata dal nome singolare scelto come primo parametro
export const User = mongoose.model("User", userSchema);