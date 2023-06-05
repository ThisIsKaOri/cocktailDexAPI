import mongoose from "mongoose";

export type IngredientType = {

  _id?: string;
  name: string;
  strength?: string;
  replacements?: string[];
  description?: string;
  cocktails: string[];
  img?: string;
};

export const dummy_ingredients: IngredientType[] = [
  {
    "name": "absinthe",
    "strength": "45-74%",
    "replacements": [
      "pernod",
      "herbsaint"
    ],
    "description": "A highly alcoholic distilled spirit made from botanicals, primarily including grand wormwood, often associated with the \"green fairy\" and known for its anise flavor.",
    "cocktails": [
      "sazerac",
      "corpse reviver no. 2",
      "death in the afternoon"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/absinthe"
  },
  {
    "name": "agave nectar",
    "strength": "",
    "replacements": [
      "simple syrup",
      "honey syrup"
    ],
    "description": "A natural sweetener made from the sap of the agave plant, commonly used in cocktails for a touch of sweetness.",
    "cocktails": [
      "margarita",
      "paloma",
      "tequila sunrise"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/agave nectar"
  },
  {
    "name": "aguardiente",
    "strength": "29-60%",
    "replacements": [
      "cachaça",
      "white rum"
    ],
    "description": "A generic term for various alcoholic beverages, often derived from sugar cane or fruit, widely consumed in Latin America.",
    "cocktails": [
      "coco loco",
      "llanero"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/aguardiente"
  },
  {
    "name": "amaretto liqueur",
    "strength": "24-28%",
    "replacements": [
      "orgeat syrup"
    ],
    "description": "An Italian sweet almond-flavored liqueur made from apricot pits or almonds, often used in dessert cocktails.",
    "cocktails": [
      "amaretto sour",
      "godfather",
      "alabama slammer"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/amaretto liqueur"
  },
  {
    "name": "amaro nonino",
    "strength": "35%",
    "replacements": [
      "campari",
      "aperol"
    ],
    "description": "An Italian bitter liqueur made from a blend of herbs, roots, and spices, known for its complex and bittersweet flavor.",
    "cocktails": [
      "negroni sbagliato",
      "paper plane",
      "nonino sour"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/amaro nonino"
  },
  {
    "name": "angostura bitters",
    "strength": "44.7%",
    "replacements": [
      "orange bitters"
    ],
    "description": "A concentrated bitters made from a variety of herbs and spices, used to add complexity and balance to cocktails.",
    "cocktails": [
      "old fashioned",
      "manhattan",
      "trinidad sour"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/angostura bitters"
  },
  {
    "name": "aperol",
    "strength": "11%",
    "replacements": [
      "campari",
      "amaro nonino"
    ],
    "description": "An Italian aperitif liqueur with a bright orange color and a bitter-sweet taste, often used in refreshing cocktails.",
    "cocktails": [
      "aperol spritz",
      "garibaldi",
      "aperol sour"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/aperol"
  },
  {
    "name": "apricot brandy",
    "strength": "24-30%",
    "replacements": [
      "peach schnapps"
    ],
    "description": "A liqueur made from apricot juice or apricot kernels, adding a fruity and sweet flavor to cocktails.",
    "cocktails": [
      "apricot sour",
      "army & navy",
      "flaming lamborghini"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/apricot brandy"
  },
  {
    "name": "bénédictine",
    "strength": "40%",
    "replacements": [
      "herbal liqueur"
    ],
    "description": "A herbal liqueur made from a blend of 27 different herbs and spices, often used as a flavoring agent in cocktails.",
    "cocktails": [
      "vieux carré",
      "bénédictine sour",
      "monte carlo"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/bénédictine"
  },
  {
    "name": "black pepper",
    "strength": "",
    "replacements": [
      "-"
    ],
    "description": "A common spice used to add a subtle heat and flavor to savory cocktails.",
    "cocktails": [
      "black pepper martini",
      "black pepper bourbon smash"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/black pepper"
  },
  {
    "name": "bourbon",
    "strength": "40-50%",
    "replacements": [
      "rye whiskey",
      "scotch whisky"
    ],
    "description": "A type of American whiskey made primarily from corn and aged in charred oak barrels, known for its rich, sweet, and full-bodied flavor.",
    "cocktails": [
      "mint julep",
      "old fashioned",
      "whiskey sour"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/bourbon"
  },
  {
    "name": "brambuie",
    "strength": "19-22%",
    "replacements": [
      "-"
    ],
    "description": "A Scottish liqueur made from a blend of Scotch whisky, honey, herbs, and spices, with a sweet and herbal flavor profile.",
    "cocktails": [
      "rusty nail",
      "bobby burns",
      "highland sling"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/brambuie"
  },
  {
    "name": "brandy",
    "strength": "35-60%",
    "replacements": [
      "cognac",
      "armagnac"
    ],
    "description": "A spirit distilled from wine or fermented fruit juice, often aged in oak barrels, with a wide range of flavors depending on the origin.",
    "cocktails": [
      "brandy alexander",
      "sidecar",
      "brandy sour"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/brandy"
  },
  {
    "name": "brown sugar",
    "strength": "",
    "replacements": [
      "white sugar"
    ],
    "description": "A partially refined sugar with a molasses flavor, commonly used to add sweetness and depth to cocktails.",
    "cocktails": [
      "mojito",
      "dark 'n' stormy",
      "caipirinha"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/brown sugar"
  },
  {
    "name": "cachaça",
    "strength": "38-48%",
    "replacements": [
      "aguardiente",
      "white rum"
    ],
    "description": "A Brazilian spirit made from sugarcane juice, similar to rum but with a distinct flavor profile.",
    "cocktails": [
      "caipirinha",
      "batida de côco",
      "leite de onça"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/cachaça"
  },
  {
    "name": "calvados",
    "strength": "40-50%",
    "replacements": [
      "apple brandy"
    ],
    "description": "An apple brandy produced in the Normandy region of France, known for its rich and fruity flavors.",
    "cocktails": [
      "apple martini",
      "french 75",
      "calvados sidecar"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/calvados"
  },
  {
    "name": "campari",
    "strength": "20.5%",
    "replacements": [
      "aperol",
      "amaro nonino"
    ],
    "description": "An Italian herbal liqueur known for its bright red color and bitter taste, commonly used in aperitivo cocktails.",
    "cocktails": [
      "negroni",
      "americano",
      "boulevardier"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/campari"
  },
  {
    "name": "celery",
    "strength": "",
    "replacements": [
      "celery salt"
    ],
    "description": "A vegetable with a crisp texture and mild, savory flavor, often used as a garnish or in savory cocktails.",
    "cocktails": [
      "bloody mary",
      "dirty martini",
      "the last word"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/celery"
  },
  {
    "name": "celery salt",
    "strength": "",
    "replacements": [
      "-"
    ],
    "description": "A seasoning blend made from ground celery seeds and salt, used to add a savory and salty note to cocktails.",
    "cocktails": [
      "bloody caesar",
      "michelada",
      "red snapper"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/celery salt"
  },
  {
    "name": "chambord",
    "strength": "16.5-17%",
    "replacements": [
      "raspberry liqueur"
    ],
    "description": "A French raspberry liqueur with a sweet and fruity taste, commonly used in champagne cocktails.",
    "cocktails": [
      "french martini",
      "kir royale",
      "chambord collins"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/chambord"
  },
  {
    "name": "champagne",
    "strength": "12-12.5%",
    "replacements": [
      "sparkling wine"
    ],
    "description": "A sparkling wine produced in the Champagne region of France, known for its elegance and effervescence.",
    "cocktails": [
      "champagne cocktail",
      "mimosa",
      "french 75"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/champagne"
  },
  {
    "name": "citrus juice",
    "strength": "",
    "replacements": [
      "-"
    ],
    "description": "The juice extracted from citrus fruits like lemons, limes, oranges, and grapefruits, used for acidity and flavor in cocktails.",
    "cocktails": [
      "margarita",
      "daiquiri",
      "whiskey sour"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/citrus juice"
  },
  {
    "name": "club soda",
    "strength": "",
    "replacements": [
      "sparkling water"
    ],
    "description": "A carbonated water with a slight mineral taste, commonly used as a mixer in highball cocktails.",
    "cocktails": [
      "vodka soda",
      "tom collins",
      "mojito"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/club soda"
  },
  {
    "name": "cocktail cherry",
    "strength": "",
    "replacements": [
      "-"
    ],
    "description": "A preserved cherry used as a garnish in cocktails, typically soaked in a sweet syrup or liqueur.",
    "cocktails": [
      "manhattan",
      "singapore sling",
      "tequila sunrise"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/cocktail cherry"
  },
  {
    "name": "coconut milk",
    "strength": "",
    "replacements": [
      "coconut cream"
    ],
    "description": "A creamy liquid extracted from grated coconut flesh, often used to add a rich and tropical flavor to cocktails.",
    "cocktails": [
      "piña colada",
      "painkiller",
      "coconut mojito"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/coconut milk"
  },
  {
    "name": "coffee liqueur",
    "strength": "20-40%",
    "replacements": [
      "-"
    ],
    "description": "A liqueur made from coffee beans, with a strong and sweet coffee flavor, often used in dessert cocktails.",
    "cocktails": [
      "espresso martini",
      "white russian",
      "black russian"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/coffee liqueur"
  },
  {
    "name": "cognac",
    "strength": "40-60%",
    "replacements": [
      "brandy",
      "armagnac"
    ],
    "description": "A high-quality brandy produced in the Cognac region of France, known for its rich and complex flavors.",
    "cocktails": [
      "sidecar",
      "french connection",
      "sazerac"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/cognac"
  },
  {
    "name": "cointreau",
    "strength": "40%",
    "replacements": [
      "triple sec"
    ],
    "description": "A clear orange-flavored liqueur made from sweet and bitter orange peels, often used as a sweetener and flavor enhancer in cocktails.",
    "cocktails": [
      "margarita",
      "cosmopolitan",
      "white lady"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/cointreau"
  },
  {
    "name": "cola",
    "strength": "",
    "replacements": [
      "-"
    ],
    "description": "A carbonated soft drink flavored with cola nut extract and various sweeteners, commonly used as a mixer in cocktails.",
    "cocktails": [
      "rum and cola",
      "cuba libre",
      "long island iced tea"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/cola"
  },
  {
    "name": "cranberry juice",
    "strength": "",
    "replacements": [
      "-"
    ],
    "description": "A tart and tangy juice made from cranberries, often used as a mixer in cocktails.",
    "cocktails": [
      "cosmopolitan",
      "sea breeze",
      "cape codder"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/cranberry juice"
  },
  {
    "name": "cream",
    "strength": "",
    "replacements": [
      "-"
    ],
    "description": "The fatty part of milk, used to add richness and smoothness to cocktails.",
    "cocktails": [
      "white russian",
      "irish coffee",
      "grasshopper"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/cream"
  },
  {
    "name": "cream of coconut",
    "strength": "",
    "replacements": [
      "coconut milk"
    ],
    "description": "A sweet and creamy coconut-based ingredient, commonly used in tropical cocktails.",
    "cocktails": [
      "piña colada",
      "chi-chi",
      "coconaut"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/cream of coconut"
  },
  {
    "name": "crème de cacao",
    "strength": "20-25%",
    "replacements": [
      "chocolate liqueur"
    ],
    "description": "A sweet liqueur with a chocolate flavor, available in both dark and white varieties, often used in dessert cocktails.",
    "cocktails": [
      "grasshopper",
      "brandy alexander",
      "chocolate martini"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/crème de cacao"
  },
  {
    "name": "crème de cassis",
    "strength": "15-20%",
    "replacements": [
      "-"
    ],
    "description": "A sweet, dark red liqueur made from blackcurrants, often used in classic cocktails.",
    "cocktails": [
      "kir",
      "kir royale",
      "bramble"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/crème de cassis"
  },
  {
    "name": "crème de menthe",
    "strength": "24-28%",
    "replacements": [
      "-"
    ],
    "description": "A sweet mint-flavored liqueur available in both clear and green varieties, commonly used in dessert and after-dinner cocktails.",
    "cocktails": [
      "grasshopper",
      "stinger",
      "chocolate mint martini"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/crème de menthe"
  },
  {
    "name": "crème de mure",
    "strength": "18-20%",
    "replacements": [
      "-"
    ],
    "description": "A sweet blackberry liqueur, often used to add fruity and sweet notes to cocktails.",
    "cocktails": [
      "bramble",
      "kentucky bramble",
      "corpse reviver no. 2"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/crème de mure"
  },
  {
    "name": "crème de violette",
    "strength": "15-25%",
    "replacements": [
      "-"
    ],
    "description": "A floral liqueur with a deep purple color and a subtle violet flavor, often used in classic and vintage cocktails.",
    "cocktails": [
      "aviation",
      "blue moon",
      "violet fizz"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/crème de violette"
  },
  {
    "name": "curaçao",
    "strength": "30-40%",
    "replacements": [
      "triple sec",
      "orange liqueur"
    ],
    "description": "A sweet orange-flavored liqueur made from the dried peel of the laraha citrus fruit, commonly used in tropical cocktails.",
    "cocktails": [
      "blue margarita",
      "mai tai",
      "zombie"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/curaçao"
  },
  {
    "name": "dry curaçao",
    "strength": "30-40%",
    "replacements": [
      "triple sec",
      "orange liqueur"
    ],
    "description": "A drier and less sweet version of curaçao, often used as a substitute for Triple sec in cocktails.",
    "cocktails": [
      "white negroni",
      "corpse reviver no. 1",
      "bijou"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/dry curaçao"
  },
  {
    "name": "egg white",
    "strength": "",
    "replacements": [
      "-"
    ],
    "description": "The albumen of an egg, often used in cocktails to add texture and create a frothy foam.",
    "cocktails": [
      "whiskey sour",
      "pisco sour",
      "ramos gin fizz"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/egg white"
  },
  {
    "name": "egg yolk",
    "strength": "",
    "replacements": [
      "-"
    ],
    "description": "The yellow part of an egg, often used in creamy and rich cocktails.",
    "cocktails": [
      "golden flip",
      "brandy flip",
      "zabaione cocktail"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/egg yolk"
  },
  {
    "name": "elderflower cordial",
    "strength": "",
    "replacements": [
      "elderflower liqueur"
    ],
    "description": "A sweet and fragrant syrup made from elderflower blossoms, commonly used in floral and refreshing cocktails.",
    "cocktails": [
      "elderflower collins",
      "hugo",
      "garden of eden"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/elderflower cordial"
  },
  {
    "name": "espresso coffee",
    "strength": "",
    "replacements": [
      "-"
    ],
    "description": "A concentrated coffee beverage made by forcing hot water through finely ground coffee beans.",
    "cocktails": [
      "espresso martini",
      "irish coffee",
      "black russian"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/espresso coffee"
  },
  {
    "name": "falernum",
    "strength": "11-25%",
    "replacements": [
      "-"
    ],
    "description": "A sweet and spicy Caribbean syrup or liqueur made from lime zest, almonds, and spices, often used in Tiki cocktails.",
    "cocktails": [
      "zombie",
      "corn 'n' oil",
      "royal bermuda yacht club"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/falernum"
  },
  {
    "name": "fernet-branca",
    "strength": "39-44%",
    "replacements": [
      "-"
    ],
    "description": "A bitter and aromatic Italian herbal liqueur, often consumed as a digestif or used as a flavoring agent in cocktails.",
    "cocktails": [
      "hanky panky",
      "toronto",
      "fernet sour"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/fernet-branca"
  },
  {
    "name": "fresh mint",
    "strength": "",
    "replacements": [
      "-"
    ],
    "description": "Fragrant green leaves of the mint plant, often used as a garnish or muddled to add freshness and aroma to cocktails.",
    "cocktails": [
      "mojito",
      "mint julep",
      "southside"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/fresh mint"
  },
  {
    "name": "galliano",
    "strength": "42.3%",
    "replacements": [
      "-"
    ],
    "description": "A bright yellow herbal liqueur with a vanilla-anise flavor, often used in classic cocktails.",
    "cocktails": [
      "harvey wallbanger",
      "golden cadillac",
      "yellow bird"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/galliano"
  },
  {
    "name": "garlic",
    "strength": "",
    "replacements": [
      "-"
    ],
    "description": "A pungent and flavorful bulb used in savory dishes, sometimes used in small amounts to add a unique twist to cocktails.",
    "cocktails": [
      "bloody mary",
      "dirty martini",
      "caesar"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/garlic"
  },
  {
    "name": "gin",
    "strength": "37.5-50%",
    "replacements": [
      "-"
    ],
    "description": "A distilled spirit flavored with juniper berries and other botanicals, known for its herbal and aromatic characteristics.",
    "cocktails": [
      "martini",
      "gin and tonic",
      "negroni"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/gin"
  },
  {
    "name": "ginger",
    "strength": "",
    "replacements": [
      "-"
    ],
    "description": "A pungent and spicy root used in various culinary preparations, often used in cocktails for its unique flavor.",
    "cocktails": [
      "moscow mule",
      "dark 'n' stormy",
      "ginger martini"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/ginger"
  },
  {
    "name": "ginger ale",
    "strength": "",
    "replacements": [
      "ginger beer"
    ],
    "description": "A carbonated soft drink flavored with ginger, often used as a mixer in cocktails.",
    "cocktails": [
      "horse's neck",
      "presbyterian",
      "rum buck"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/ginger ale"
  },
  {
    "name": "ginger beer",
    "strength": "",
    "replacements": [
      "ginger ale"
    ],
    "description": "A carbonated soft drink flavored with ginger, typically spicier and more robust than ginger ale, commonly used in Moscow Mules and Dark 'n' Stormy cocktails.",
    "cocktails": [
      "moscow mule",
      "dark 'n' stormy",
      "corn 'n' oil"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/ginger beer"
  },
  {
    "name": "gold rum",
    "strength": "37.5-40%",
    "replacements": [
      "-"
    ],
    "description": "A type of rum that has been aged in oak barrels, resulting in a smoother and more complex flavor profile.",
    "cocktails": [
      "mojito",
      "piña colada",
      "daiquiri"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/gold rum"
  },
  {
    "name": "goslings black seal rum",
    "strength": "40%",
    "replacements": [
      "dark rum"
    ],
    "description": "A rich and full-bodied dark rum from Bermuda, known for its deep flavor and molasses notes.",
    "cocktails": [
      "dark 'n' stormy",
      "rum swizzle",
      "bermuda rum swizzle"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/goslings black seal rum"
  },
  {
    "name": "grand marnier",
    "strength": "40%",
    "replacements": [
      "orange liqueur"
    ],
    "description": "A premium orange liqueur made from a blend of Cognac, bitter orange essence, and sugar, with a rich and smooth flavor profile.",
    "cocktails": [
      "margarita",
      "cosmopolitan",
      "grand sidecar"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/grand marnier"
  },
  {
    "name": "grapefruit juice",
    "strength": "",
    "replacements": [
      "-"
    ],
    "description": "A tangy and slightly bitter juice made from grapefruits, used as a mixer in cocktails.",
    "cocktails": [
      "paloma",
      "greyhound",
      "hemingway daiquiri"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/grapefruit juice"
  },
  {
    "name": "grapefruit-flavored soda",
    "strength": "",
    "replacements": [
      "-"
    ],
    "description": "A carbonated soft drink with a grapefruit flavor, commonly used as a mixer in cocktails.",
    "cocktails": [
      "sea breeze",
      "greyhound",
      "paloma"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/grapefruit-flavored soda"
  },
  {
    "name": "grappa",
    "strength": "35-60%",
    "replacements": [
      "-"
    ],
    "description": "An Italian grape-based brandy made from pomace, the leftovers from winemaking, known for its strong and distinctive flavor.",
    "cocktails": [
      "grappa sour",
      "grappa old fashioned",
      "espresso grappa"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/grappa"
  },
  {
    "name": "green chartreuse",
    "strength": "55%",
    "replacements": [
      "-"
    ],
    "description": "A French herbal liqueur made from a secret blend of 130 botanicals, known for its complex and herbal flavor profile.",
    "cocktails": [
      "last word",
      "bijou",
      "champs-élysées"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/green chartreuse"
  },
  {
    "name": "grenadine",
    "strength": "",
    "replacements": [
      "-"
    ],
    "description": "A sweet syrup made from pomegranate juice and sugar, used to add a fruity and vibrant red color to cocktails.",
    "cocktails": [
      "tequila sunrise",
      "shirley temple",
      "jack rose"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/grenadine"
  },
  {
    "name": "grenadine syrup",
    "strength": "",
    "replacements": [
      "grenadine"
    ],
    "description": "A sweet syrup made from pomegranate juice and sugar, used to add a fruity and vibrant red color to cocktails.",
    "cocktails": [
      "tequila sunrise",
      "shirley temple",
      "jack rose"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/grenadine syrup"
  },
  {
    "name": "honey",
    "strength": "",
    "replacements": [
      "honey syrup"
    ],
    "description": "A sweet and viscous natural substance produced by bees, used to add sweetness and complexity to cocktails.",
    "cocktails": [
      "bee's knees",
      "gold rush",
      "penicillin"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/honey"
  },
  {
    "name": "honey syrup",
    "strength": "",
    "replacements": [
      "honey"
    ],
    "description": "A simple syrup made by mixing equal parts of honey and water, used as a sweetener in cocktails.",
    "cocktails": [
      "bee's knees",
      "gold rush",
      "penicillin"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/honey syrup"
  },
  {
    "name": "horseradish",
    "strength": "",
    "replacements": [
      "-"
    ],
    "description": "A pungent and spicy root commonly used as a condiment, sometimes used in small amounts to add heat and flavor to cocktails.",
    "cocktails": [
      "bloody mary",
      "bullshot",
      "shucker's delight"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/horseradish"
  },
  {
    "name": "hot sauce",
    "strength": "",
    "replacements": [
      "-"
    ],
    "description": "A spicy condiment made from chili peppers, commonly used to add heat and flavor to cocktails.",
    "cocktails": [
      "bloody mary",
      "michelada",
      "red snapper"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/hot sauce"
  },
  {
    "name": "ice",
    "strength": "",
    "replacements": [
      "-"
    ],
    "description": "Frozen water used to chill cocktails and keep them cold.",
    "cocktails": [
      "all cocktails"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/ice"
  },
  {
    "name": "irish whiskey",
    "strength": "40-46%",
    "replacements": [
      "-"
    ],
    "description": "A smooth and triple-distilled whiskey made in Ireland, known for its light and fruity flavor profile.",
    "cocktails": [
      "irish coffee",
      "whiskey sour",
      "irish mule"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/irish whiskey"
  },
  {
    "name": "kina lillet",
    "strength": "",
    "replacements": [
      "lillet blanc"
    ],
    "description": "A fortified wine aperitif made from a blend of wine, citrus liqueurs, and quinine, with a crisp and slightly bitter taste.",
    "cocktails": [
      "vesper",
      "corpse reviver no. 2",
      "white negroni"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/kina lillet"
  },
  {
    "name": "lemon juice",
    "strength": "",
    "replacements": [
      "-"
    ],
    "description": "The juice extracted from lemons, known for its tart and citrusy flavor, commonly used as a sour component in cocktails.",
    "cocktails": [
      "whiskey sour",
      "lemon drop martini",
      "tom collins"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/lemon juice"
  },
  {
    "name": "lemon twist",
    "strength": "",
    "replacements": [
      "-"
    ],
    "description": "A twist of lemon peel, often used as a garnish or to add citrus aroma to cocktails.",
    "cocktails": [
      "martini",
      "tom collins",
      "gin sour"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/lemon twist"
  },
  {
    "name": "lillet blanc",
    "strength": "17%",
    "replacements": [
      "kina lillet"
    ],
    "description": "A French aperitif wine made from a blend of white wine, citrus liqueurs, and quinine, with a floral and slightly bitter flavor profile.",
    "cocktails": [
      "vesper",
      "corpse reviver no. 2",
      "white negroni"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/lillet blanc"
  },
  {
    "name": "lime",
    "strength": "",
    "replacements": [
      "-"
    ],
    "description": "A sour and acidic citrus fruit, commonly used for its juice and zest in cocktails.",
    "cocktails": [
      "margarita",
      "mojito",
      "caipirinha"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/lime"
  },
  {
    "name": "lime juice",
    "strength": "",
    "replacements": [
      "-"
    ],
    "description": "The juice extracted from limes, known for its tangy and citrusy flavor, commonly used as a sour component in cocktails.",
    "cocktails": [
      "margarita",
      "daiquiri",
      "gimlet"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/lime juice"
  },
  {
    "name": "london dry gin",
    "strength": "37.5-50%",
    "replacements": [
      "gin"
    ],
    "description": "A style of gin that is dry and light-bodied, with a focus on juniper and citrus flavors.",
    "cocktails": [
      "martini",
      "negroni",
      "gin and tonic"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/london dry gin"
  },
  {
    "name": "maraschino",
    "strength": "32-40%",
    "replacements": [
      "maraschino cherry"
    ],
    "description": "A clear cherry liqueur made from Marasca cherries, with a slightly sweet and almond-like flavor.",
    "cocktails": [
      "aviation",
      "hemingway daiquiri",
      "martinez"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/maraschino"
  },
  {
    "name": "maraschino cherry",
    "strength": "",
    "replacements": [
      "maraschino"
    ],
    "description": "A preserved cherry typically soaked in Maraschino liqueur, often used as a garnish or to add a touch of sweetness to cocktails.",
    "cocktails": [
      "old fashioned",
      "manhattan",
      "singapore sling"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/maraschino cherry"
  },
  {
    "name": "mezcal",
    "strength": "40-55%",
    "replacements": [
      "-"
    ],
    "description": "A distilled spirit made from the agave plant, similar to tequila but with a smoky and earthy flavor profile due to the production process.",
    "cocktails": [
      "margarita",
      "mezcal negroni",
      "oaxaca old fashioned"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/mezcal"
  },
  {
    "name": "mint leaves",
    "strength": "",
    "replacements": [
      "fresh mint"
    ],
    "description": "Fragrant green leaves of the mint plant, often used as a garnish or muddled to add freshness and aroma to cocktails.",
    "cocktails": [
      "mojito",
      "mint julep",
      "southside"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/mint leaves"
  },
  {
    "name": "olive",
    "strength": "",
    "replacements": [
      "-"
    ],
    "description": "A small fruit of the olive tree, commonly used as a garnish or to add a savory and briny flavor to cocktails.",
    "cocktails": [
      "martini",
      "dirty martini",
      "gibson"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/olive"
  },
  {
    "name": "orange bitters",
    "strength": "",
    "replacements": [
      "-"
    ],
    "description": "A bittersweet liquid made from the peels of oranges, used to add depth and complexity to cocktails.",
    "cocktails": [
      "old fashioned",
      "negroni",
      "martini"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/orange bitters"
  },
  {
    "name": "orange flower water",
    "strength": "",
    "replacements": [
      "-"
    ],
    "description": "A distillate made from bitter orange blossoms, commonly used to add a floral and aromatic note to cocktails.",
    "cocktails": [
      "ramos gin fizz",
      "corpse reviver no. 2",
      "tom collins"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/orange flower water"
  },
  {
    "name": "orange juice",
    "strength": "",
    "replacements": [
      "-"
    ],
    "description": "The juice extracted from oranges, known for its sweet and citrusy flavor, commonly used as a mixer in cocktails.",
    "cocktails": [
      "screwdriver",
      "mimosa",
      "tequila sunrise"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/orange juice"
  },
  {
    "name": "orange liqueur",
    "strength": "25-40%",
    "replacements": [
      "-"
    ],
    "description": "A sweet and citrusy liqueur made from orange peels, commonly used to add flavor and sweetness to cocktails.",
    "cocktails": [
      "margarita",
      "sidecar",
      "cosmopolitan"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/orange liqueur"
  },
  {
    "name": "orgeat syrup",
    "strength": "",
    "replacements": [
      "-"
    ],
    "description": "A sweet syrup made from almonds, sugar, and orange flower water, commonly used in Tiki cocktails.",
    "cocktails": [
      "mai tai",
      "zombie",
      "scorpion"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/orgeat syrup"
  },
  {
    "name": "peach purée",
    "strength": "",
    "replacements": [
      "peach schnapps"
    ],
    "description": "A thick and sweet puree made from ripe peaches, often used to add a fruity and juicy flavor to cocktails.",
    "cocktails": [
      "bellini",
      "sex on the beach",
      "fuzzy navel"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/peach purée"
  },
  {
    "name": "peach schnapps",
    "strength": "15-20%",
    "replacements": [
      "peach purée"
    ],
    "description": "A sweet and fruity liqueur made from peaches, commonly used to add a peach flavor to cocktails.",
    "cocktails": [
      "sex on the beach",
      "fuzzy navel",
      "woo woo"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/peach schnapps"
  },
  {
    "name": "peruvian pisco",
    "strength": "38-48%",
    "replacements": [
      "-"
    ],
    "description": "A grape brandy made in Peru, known for its smoothness and versatility in cocktails.",
    "cocktails": [
      "pisco sour",
      "pisco punch",
      "chilcano"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/peruvian pisco"
  },
  {
    "name": "peychaud’s bitters",
    "strength": "",
    "replacements": [
      "-"
    ],
    "description": "A bright red bitters made from a secret blend of botanicals, with a distinctive anise and floral flavor profile, commonly used in classic cocktails from New Orleans.",
    "cocktails": [
      "sazerac",
      "vieux carré",
      "ramos gin fizz"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/peychaud’s bitters"
  },
  {
    "name": "pineapple juice",
    "strength": "",
    "replacements": [
      "-"
    ],
    "description": "The juice extracted from pineapples, known for its tropical and sweet flavor, commonly used as a mixer in cocktails.",
    "cocktails": [
      "piña colada",
      "painkiller",
      "bahama mama"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/pineapple juice"
  },
  {
    "name": "prosecco",
    "strength": "10.5-11.5%",
    "replacements": [
      "-"
    ],
    "description": "An Italian sparkling wine with delicate bubbles and a fruity flavor, commonly used as a base in sparkling wine cocktails.",
    "cocktails": [
      "bellini",
      "mimosa",
      "aperol spritz"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/prosecco"
  },
  {
    "name": "raspberry liqueur",
    "strength": "15-20%",
    "replacements": [
      "raspberry syrup"
    ],
    "description": "A sweet and fruity liqueur made from raspberries, commonly used to add a raspberry flavor to cocktails.",
    "cocktails": [
      "raspberry martini",
      "raspberry collins",
      "raspberry margarita"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/raspberry liqueur"
  },
  {
    "name": "raspberry syrup",
    "strength": "",
    "replacements": [
      "raspberry liqueur"
    ],
    "description": "A sweet syrup made from raspberries, used to add a fruity and vibrant red color to cocktails.",
    "cocktails": [
      "raspberry martini",
      "raspberry collins",
      "raspberry margarita"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/raspberry syrup"
  },
  {
    "name": "red chili pepper",
    "strength": "",
    "replacements": [
      "-"
    ],
    "description": "A spicy and pungent pepper, commonly used in small amounts to add heat and flavor to cocktails.",
    "cocktails": [
      "spicy margarita",
      "red snapper",
      "diablo"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/red chili pepper"
  },
  {
    "name": "red vermouth",
    "strength": "16-18%",
    "replacements": [
      "sweet vermouth"
    ],
    "description": "A fortified wine flavored with herbs and spices, known for its sweet and herbal taste.",
    "cocktails": [
      "negroni",
      "manhattan",
      "boulevardier"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/red vermouth"
  },
  {
    "name": "red wine",
    "strength": "12-15%",
    "replacements": [
      "-"
    ],
    "description": "A fermented alcoholic beverage made from dark-colored grapes, commonly used as a base in wine-based cocktails.",
    "cocktails": [
      "sangria",
      "mulled wine",
      "kalimotxo"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/red wine"
  },
  {
    "name": "ruby port",
    "strength": "19-22%",
    "replacements": [
      "-"
    ],
    "description": "A fortified wine from Portugal, known for its rich and fruity flavor, commonly used in port wine cocktails.",
    "cocktails": [
      "port and tonic",
      "ruby port smash",
      "port flip"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/ruby port"
  },
  {
    "name": "rum",
    "strength": "40-57%",
    "replacements": [
      "-"
    ],
    "description": "A distilled alcoholic beverage made from sugarcane byproducts or molasses, with a wide range of flavors depending on the type and origin.",
    "cocktails": [
      "mojito",
      "daiquiri",
      "piña colada"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/rum"
  },
  {
    "name": "rye whiskey",
    "strength": "40-50%",
    "replacements": [
      "-"
    ],
    "description": "A whiskey made primarily from rye grain, known for its spiciness and bold flavor profile.",
    "cocktails": [
      "manhattan",
      "old fashioned",
      "sazerac"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/rye whiskey"
  },
  {
    "name": "salt",
    "strength": "",
    "replacements": [
      "-"
    ],
    "description": "A crystalline mineral substance used to enhance flavors and add a savory taste to cocktails.",
    "cocktails": [
      "margarita",
      "salty dog",
      "bloody mary"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/salt"
  },
  {
    "name": "scotch whisky",
    "strength": "40-46%",
    "replacements": [
      "-"
    ],
    "description": "A whisky made in Scotland, known for its smoky and peaty flavor profile, often enjoyed straight or on the rocks.",
    "cocktails": [
      "rob roy",
      "blood and sand",
      "rusty nail"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/scotch whisky"
  },
  {
    "name": "simple syrup",
    "strength": "",
    "replacements": [
      "sugar syrup"
    ],
    "description": "A basic sweet syrup made by dissolving sugar in water, used as a sweetener in cocktails.",
    "cocktails": [
      "mojito",
      "daiquiri",
      "tom collins"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/simple syrup"
  },
  {
    "name": "soda water",
    "strength": "",
    "replacements": [
      "club soda"
    ],
    "description": "A carbonated water that is slightly salty, often used as a mixer to add fizz to cocktails.",
    "cocktails": [
      "vodka soda",
      "gin and tonic",
      "tom collins"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/soda water"
  },
  {
    "name": "sparkling wine",
    "strength": "10.5-12%",
    "replacements": [
      "-"
    ],
    "description": "A wine with significant levels of carbon dioxide, creating bubbles, commonly used in sparkling wine cocktails.",
    "cocktails": [
      "mimosa",
      "french 75",
      "bellini"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/sparkling wine"
  },
  {
    "name": "sugar",
    "strength": "",
    "replacements": [
      "sugar syrup"
    ],
    "description": "A crystalline sweet substance made from sugarcane or sugar beets, commonly used as a sweetener in cocktails.",
    "cocktails": [
      "mojito",
      "daiquiri",
      "margarita"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/sugar"
  },
  {
    "name": "sugar cane juice",
    "strength": "",
    "replacements": [
      "-"
    ],
    "description": "The juice extracted from sugarcane, used as a sweetener and flavoring in cocktails.",
    "cocktails": [
      "caipirinha",
      "ti' punch",
      "daiquiri"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/sugar cane juice"
  },
  {
    "name": "sugar syrup",
    "strength": "",
    "replacements": [
      "simple syrup"
    ],
    "description": "A sweet syrup made by dissolving sugar in water, used as a sweetener in cocktails.",
    "cocktails": [
      "mojito",
      "daiquiri",
      "tom collins"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/sugar syrup"
  },
  {
    "name": "sweet vermouth",
    "strength": "16-18%",
    "replacements": [
      "red vermouth"
    ],
    "description": "A fortified wine flavored with herbs and spices, known for its sweet and herbal taste.",
    "cocktails": [
      "manhattan",
      "negroni",
      "boulevardier"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/sweet vermouth"
  },
  {
    "name": "tequila",
    "strength": "38-40%",
    "replacements": [
      "-"
    ],
    "description": "A distilled spirit made from the blue agave plant, primarily produced in Mexico, known for its earthy and agave-forward flavor profile.",
    "cocktails": [
      "margarita",
      "tequila sunrise",
      "paloma"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/tequila"
  },
  {
    "name": "tomato juice",
    "strength": "",
    "replacements": [
      "-"
    ],
    "description": "The juice extracted from tomatoes, commonly used as a mixer in cocktails, especially in savory drinks like the Bloody Mary.",
    "cocktails": [
      "bloody mary",
      "michelada",
      "red snapper"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/tomato juice"
  },
  {
    "name": "triple sec",
    "strength": "15-40%",
    "replacements": [
      "orange liqueur"
    ],
    "description": "A sweet and clear orange-flavored liqueur, often used as a flavor enhancer and sweetener in cocktails.",
    "cocktails": [
      "margarita",
      "cosmopolitan",
      "sidecar"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/triple sec"
  },
  {
    "name": "vermouth",
    "strength": "14-18%",
    "replacements": [
      "-"
    ],
    "description": "A fortified wine flavored with botanicals, commonly used as a mixer or an aperitif in cocktails.",
    "cocktails": [
      "martini",
      "manhattan",
      "negroni"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/vermouth"
  },
  {
    "name": "vodka",
    "strength": "35-50%",
    "replacements": [
      "-"
    ],
    "description": "A distilled spirit made from fermented grains or potatoes, known for its neutral flavor and versatility in cocktails.",
    "cocktails": [
      "vodka martini",
      "moscow mule",
      "bloody mary"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/vodka"
  },
  {
    "name": "water",
    "strength": "",
    "replacements": [
      "-"
    ],
    "description": "A clear and odorless liquid composed of hydrogen and oxygen, commonly used in cocktails for dilution or as an ice substitute.",
    "cocktails": [
      "whiskey highball",
      "vodka soda",
      "tom collins"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/water"
  },
  {
    "name": "whiskey",
    "strength": "40-50%",
    "replacements": [
      "bourbon",
      "rye whiskey"
    ],
    "description": "A distilled spirit made from fermented grains, typically aged in wooden barrels, with a range of flavors depending on the type and production process.",
    "cocktails": [
      "old fashioned",
      "whiskey sour",
      "manhattan"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/whiskey"
  },
  {
    "name": "white rum",
    "strength": "37.5-40%",
    "replacements": [
      "-"
    ],
    "description": "A light and clear rum that is aged for a short period or not aged at all, known for its smooth and versatile nature.",
    "cocktails": [
      "mojito",
      "piña colada",
      "daiquiri"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/white rum"
  },
  {
    "name": "worcestershire sauce",
    "strength": "",
    "replacements": [
      "-"
    ],
    "description": "A savory and tangy sauce made from fermented anchovies, vinegar, and various spices, commonly used to add depth of flavor to cocktails.",
    "cocktails": [
      "bloody mary",
      "caesar",
      "michelada"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/worcestershire sauce"
  },
  {
    "name": "yellow chartreuse",
    "strength": "40%",
    "replacements": [
      "green chartreuse"
    ],
    "description": "A herbal liqueur made by the Carthusian monks, with a complex and aromatic flavor profile.",
    "cocktails": [
      "yellow daisy",
      "bijou",
      "champs-élysées"
    ],
    "img": "www.thecocktaildb.com/images/ingredients/yellow chartreuse"
  }
];

const ingredientSchema = new mongoose.Schema({

  name: {         
    type: String,
    required: true
  },
  strength: {     
    type: String
  },
  replacements: [String],
  description: String,
  cocktails: {    
    type: [String],
    required: true
  },
  img: String
});

export const Ingredient = mongoose.model("Ingredient", ingredientSchema);





