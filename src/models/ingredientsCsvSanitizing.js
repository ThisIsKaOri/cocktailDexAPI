const fs = require('fs');

const data = [
  {
    "Name": "Absinthe",
    "Strength": "45-74%",
    "Replacements": "Pernod, Herbsaint",
    "Description": "A highly alcoholic distilled spirit made from botanicals, primarily including grand wormwood, often associated with the \"green fairy\" and known for its anise flavor.",
    "Cocktails": "Sazerac, Corpse Reviver No. 2, Death in the Afternoon",
    "Img": ""
  },
  {
    "Name": "Agave nectar",
    "Strength": "-",
    "Replacements": "Simple syrup, Honey syrup",
    "Description": "A natural sweetener made from the sap of the agave plant, commonly used in cocktails for a touch of sweetness.",
    "Cocktails": "Margarita, Paloma, Tequila Sunrise",
    "Img": ""
  },
  {
    "Name": "Aguardiente",
    "Strength": "29-60%",
    "Replacements": "Cachaça, White rum",
    "Description": "A generic term for various alcoholic beverages, often derived from sugar cane or fruit, widely consumed in Latin America.",
    "Cocktails": "Coco Loco, Llanero",
    "Img": ""
  },
  {
    "Name": "Amaretto liqueur",
    "Strength": "24-28%",
    "Replacements": "Orgeat syrup",
    "Description": "An Italian sweet almond-flavored liqueur made from apricot pits or almonds, often used in dessert cocktails.",
    "Cocktails": "Amaretto Sour, Godfather, Alabama Slammer",
    "Img": ""
  },
  {
    "Name": "Amaro nonino",
    "Strength": "35%",
    "Replacements": "Campari, Aperol",
    "Description": "An Italian bitter liqueur made from a blend of herbs, roots, and spices, known for its complex and bittersweet flavor.",
    "Cocktails": "Negroni Sbagliato, Paper Plane, Nonino Sour",
    "Img": ""
  },
  {
    "Name": "Angostura bitters",
    "Strength": "44.7%",
    "Replacements": "Orange bitters",
    "Description": "A concentrated bitters made from a variety of herbs and spices, used to add complexity and balance to cocktails.",
    "Cocktails": "Old Fashioned, Manhattan, Trinidad Sour",
    "Img": ""
  },
  {
    "Name": "Aperol",
    "Strength": "11%",
    "Replacements": "Campari, Amaro Nonino",
    "Description": "An Italian aperitif liqueur with a bright orange color and a bitter-sweet taste, often used in refreshing cocktails.",
    "Cocktails": "Aperol Spritz, Garibaldi, Aperol Sour",
    "Img": ""
  },
  {
    "Name": "Apricot brandy",
    "Strength": "24-30%",
    "Replacements": "Peach schnapps",
    "Description": "A liqueur made from apricot juice or apricot kernels, adding a fruity and sweet flavor to cocktails.",
    "Cocktails": "Apricot Sour, Army & Navy, Flaming Lamborghini",
    "Img": ""
  },
  {
    "Name": "Bénédictine",
    "Strength": "40%",
    "Replacements": "Herbal liqueur",
    "Description": "A herbal liqueur made from a blend of 27 different herbs and spices, often used as a flavoring agent in cocktails.",
    "Cocktails": "Vieux Carré, Bénédictine Sour, Monte Carlo",
    "Img": ""
  },
  {
    "Name": "Black pepper",
    "Strength": "-",
    "Replacements": "-",
    "Description": "A common spice used to add a subtle heat and flavor to savory cocktails.",
    "Cocktails": "Black Pepper Martini, Black Pepper Bourbon Smash",
    "Img": ""
  },
  {
    "Name": "Bourbon",
    "Strength": "40-50%",
    "Replacements": "Rye whiskey, Scotch whisky",
    "Description": "A type of American whiskey made primarily from corn and aged in charred oak barrels, known for its rich, sweet, and full-bodied flavor.",
    "Cocktails": "Mint Julep, Old Fashioned, Whiskey Sour",
    "Img": ""
  },
  {
    "Name": "Brambuie",
    "Strength": "19-22%",
    "Replacements": "-",
    "Description": "A Scottish liqueur made from a blend of Scotch whisky, honey, herbs, and spices, with a sweet and herbal flavor profile.",
    "Cocktails": "Rusty Nail, Bobby Burns, Highland Sling",
    "Img": ""
  },
  {
    "Name": "Brandy",
    "Strength": "35-60%",
    "Replacements": "Cognac, Armagnac",
    "Description": "A spirit distilled from wine or fermented fruit juice, often aged in oak barrels, with a wide range of flavors depending on the origin.",
    "Cocktails": "Brandy Alexander, Sidecar, Brandy Sour",
    "Img": ""
  },
  {
    "Name": "Brown sugar",
    "Strength": "-",
    "Replacements": "White sugar",
    "Description": "A partially refined sugar with a molasses flavor, commonly used to add sweetness and depth to cocktails.",
    "Cocktails": "Mojito, Dark 'n' Stormy, Caipirinha",
    "Img": ""
  },
  {
    "Name": "Cachaça",
    "Strength": "38-48%",
    "Replacements": "Aguardiente, White rum",
    "Description": "A Brazilian spirit made from sugarcane juice, similar to rum but with a distinct flavor profile.",
    "Cocktails": "Caipirinha, Batida de Côco, Leite de Onça",
    "Img": ""
  },
  {
    "Name": "Calvados",
    "Strength": "40-50%",
    "Replacements": "Apple brandy",
    "Description": "An apple brandy produced in the Normandy region of France, known for its rich and fruity flavors.",
    "Cocktails": "Apple Martini, French 75, Calvados Sidecar",
    "Img": ""
  },
  {
    "Name": "Campari",
    "Strength": "20.5%",
    "Replacements": "Aperol, Amaro Nonino",
    "Description": "An Italian herbal liqueur known for its bright red color and bitter taste, commonly used in aperitivo cocktails.",
    "Cocktails": "Negroni, Americano, Boulevardier",
    "Img": ""
  },
  {
    "Name": "Celery",
    "Strength": "-",
    "Replacements": "Celery salt",
    "Description": "A vegetable with a crisp texture and mild, savory flavor, often used as a garnish or in savory cocktails.",
    "Cocktails": "Bloody Mary, Dirty Martini, The Last Word",
    "Img": ""
  },
  {
    "Name": "Celery salt",
    "Strength": "-",
    "Replacements": "-",
    "Description": "A seasoning blend made from ground celery seeds and salt, used to add a savory and salty note to cocktails.",
    "Cocktails": "Bloody Caesar, Michelada, Red Snapper",
    "Img": ""
  },
  {
    "Name": "Chambord",
    "Strength": "16.5-17%",
    "Replacements": "Raspberry liqueur",
    "Description": "A French raspberry liqueur with a sweet and fruity taste, commonly used in champagne cocktails.",
    "Cocktails": "French Martini, Kir Royale, Chambord Collins",
    "Img": ""
  },
  {
    "Name": "Champagne",
    "Strength": "12-12.5%",
    "Replacements": "Sparkling wine",
    "Description": "A sparkling wine produced in the Champagne region of France, known for its elegance and effervescence.",
    "Cocktails": "Champagne Cocktail, Mimosa, French 75",
    "Img": ""
  },
  {
    "Name": "Citrus juice",
    "Strength": "-",
    "Replacements": "-",
    "Description": "The juice extracted from citrus fruits like lemons, limes, oranges, and grapefruits, used for acidity and flavor in cocktails.",
    "Cocktails": "Margarita, Daiquiri, Whiskey Sour",
    "Img": ""
  },
  {
    "Name": "Club soda",
    "Strength": "-",
    "Replacements": "Sparkling water",
    "Description": "A carbonated water with a slight mineral taste, commonly used as a mixer in highball cocktails.",
    "Cocktails": "Vodka Soda, Tom Collins, Mojito",
    "Img": ""
  },
  {
    "Name": "Cocktail cherry",
    "Strength": "-",
    "Replacements": "-",
    "Description": "A preserved cherry used as a garnish in cocktails, typically soaked in a sweet syrup or liqueur.",
    "Cocktails": "Manhattan, Singapore Sling, Tequila Sunrise",
    "Img": ""
  },
  {
    "Name": "Coconut milk",
    "Strength": "-",
    "Replacements": "Coconut cream",
    "Description": "A creamy liquid extracted from grated coconut flesh, often used to add a rich and tropical flavor to cocktails.",
    "Cocktails": "Piña Colada, Painkiller, Coconut Mojito",
    "Img": ""
  },
  {
    "Name": "Coffee liqueur",
    "Strength": "20-40%",
    "Replacements": "-",
    "Description": "A liqueur made from coffee beans, with a strong and sweet coffee flavor, often used in dessert cocktails.",
    "Cocktails": "Espresso Martini, White Russian, Black Russian",
    "Img": ""
  },
  {
    "Name": "Cognac",
    "Strength": "40-60%",
    "Replacements": "Brandy, Armagnac",
    "Description": "A high-quality brandy produced in the Cognac region of France, known for its rich and complex flavors.",
    "Cocktails": "Sidecar, French Connection, Sazerac",
    "Img": ""
  },
  {
    "Name": "Cointreau",
    "Strength": "40%",
    "Replacements": "Triple sec",
    "Description": "A clear orange-flavored liqueur made from sweet and bitter orange peels, often used as a sweetener and flavor enhancer in cocktails.",
    "Cocktails": "Margarita, Cosmopolitan, White Lady",
    "Img": ""
  },
  {
    "Name": "Cola",
    "Strength": "-",
    "Replacements": "-",
    "Description": "A carbonated soft drink flavored with cola nut extract and various sweeteners, commonly used as a mixer in cocktails.",
    "Cocktails": "Rum and Cola, Cuba Libre, Long Island Iced Tea",
    "Img": ""
  },
  {
    "Name": "Cranberry juice",
    "Strength": "-",
    "Replacements": "-",
    "Description": "A tart and tangy juice made from cranberries, often used as a mixer in cocktails.",
    "Cocktails": "Cosmopolitan, Sea Breeze, Cape Codder",
    "Img": ""
  },
  {
    "Name": "Cream",
    "Strength": "-",
    "Replacements": "-",
    "Description": "The fatty part of milk, used to add richness and smoothness to cocktails.",
    "Cocktails": "White Russian, Irish Coffee, Grasshopper",
    "Img": ""
  },
  {
    "Name": "Cream of coconut",
    "Strength": "-",
    "Replacements": "Coconut milk",
    "Description": "A sweet and creamy coconut-based ingredient, commonly used in tropical cocktails.",
    "Cocktails": "Piña Colada, Chi-Chi, Coconaut",
    "Img": ""
  },
  {
    "Name": "Crème de cacao",
    "Strength": "20-25%",
    "Replacements": "Chocolate liqueur",
    "Description": "A sweet liqueur with a chocolate flavor, available in both dark and white varieties, often used in dessert cocktails.",
    "Cocktails": "Grasshopper, Brandy Alexander, Chocolate Martini",
    "Img": ""
  },
  {
    "Name": "Crème de cassis",
    "Strength": "15-20%",
    "Replacements": "-",
    "Description": "A sweet, dark red liqueur made from blackcurrants, often used in classic cocktails.",
    "Cocktails": "Kir, Kir Royale, Bramble",
    "Img": ""
  },
  {
    "Name": "Crème de menthe",
    "Strength": "24-28%",
    "Replacements": "-",
    "Description": "A sweet mint-flavored liqueur available in both clear and green varieties, commonly used in dessert and after-dinner cocktails.",
    "Cocktails": "Grasshopper, Stinger, Chocolate Mint Martini",
    "Img": ""
  },
  {
    "Name": "Crème de mure",
    "Strength": "18-20%",
    "Replacements": "-",
    "Description": "A sweet blackberry liqueur, often used to add fruity and sweet notes to cocktails.",
    "Cocktails": "Bramble, Kentucky Bramble, Corpse Reviver No. 2",
    "Img": ""
  },
  {
    "Name": "Crème de violette",
    "Strength": "15-25%",
    "Replacements": "-",
    "Description": "A floral liqueur with a deep purple color and a subtle violet flavor, often used in classic and vintage cocktails.",
    "Cocktails": "Aviation, Blue Moon, Violet Fizz",
    "Img": ""
  },
  {
    "Name": "Curaçao",
    "Strength": "30-40%",
    "Replacements": "Triple sec, Orange liqueur",
    "Description": "A sweet orange-flavored liqueur made from the dried peel of the laraha citrus fruit, commonly used in tropical cocktails.",
    "Cocktails": "Blue Margarita, Mai Tai, Zombie",
    "Img": ""
  },
  {
    "Name": "Dry curaçao",
    "Strength": "30-40%",
    "Replacements": "Triple sec, Orange liqueur",
    "Description": "A drier and less sweet version of curaçao, often used as a substitute for Triple sec in cocktails.",
    "Cocktails": "White Negroni, Corpse Reviver No. 1, Bijou",
    "Img": ""
  },
  {
    "Name": "Egg white",
    "Strength": "-",
    "Replacements": "-",
    "Description": "The albumen of an egg, often used in cocktails to add texture and create a frothy foam.",
    "Cocktails": "Whiskey Sour, Pisco Sour, Ramos Gin Fizz",
    "Img": ""
  },
  {
    "Name": "Egg yolk",
    "Strength": "-",
    "Replacements": "-",
    "Description": "The yellow part of an egg, often used in creamy and rich cocktails.",
    "Cocktails": "Golden Flip, Brandy Flip, Zabaione Cocktail",
    "Img": ""
  },
  {
    "Name": "Elderflower cordial",
    "Strength": "-",
    "Replacements": "Elderflower liqueur",
    "Description": "A sweet and fragrant syrup made from elderflower blossoms, commonly used in floral and refreshing cocktails.",
    "Cocktails": "Elderflower Collins, Hugo, Garden of Eden",
    "Img": ""
  },
  {
    "Name": "Espresso coffee",
    "Strength": "-",
    "Replacements": "-",
    "Description": "A concentrated coffee beverage made by forcing hot water through finely ground coffee beans.",
    "Cocktails": "Espresso Martini, Irish Coffee, Black Russian",
    "Img": ""
  },
  {
    "Name": "Falernum",
    "Strength": "11-25%",
    "Replacements": "-",
    "Description": "A sweet and spicy Caribbean syrup or liqueur made from lime zest, almonds, and spices, often used in Tiki cocktails.",
    "Cocktails": "Zombie, Corn 'n' Oil, Royal Bermuda Yacht Club",
    "Img": ""
  },
  {
    "Name": "Fernet-Branca",
    "Strength": "39-44%",
    "Replacements": "-",
    "Description": "A bitter and aromatic Italian herbal liqueur, often consumed as a digestif or used as a flavoring agent in cocktails.",
    "Cocktails": "Hanky Panky, Toronto, Fernet Sour",
    "Img": ""
  },
  {
    "Name": "Fresh mint",
    "Strength": "-",
    "Replacements": "-",
    "Description": "Fragrant green leaves of the mint plant, often used as a garnish or muddled to add freshness and aroma to cocktails.",
    "Cocktails": "Mojito, Mint Julep, Southside",
    "Img": ""
  },
  {
    "Name": "Galliano",
    "Strength": "42.3%",
    "Replacements": "-",
    "Description": "A bright yellow herbal liqueur with a vanilla-anise flavor, often used in classic cocktails.",
    "Cocktails": "Harvey Wallbanger, Golden Cadillac, Yellow Bird",
    "Img": ""
  },
  {
    "Name": "Garlic",
    "Strength": "-",
    "Replacements": "-",
    "Description": "A pungent and flavorful bulb used in savory dishes, sometimes used in small amounts to add a unique twist to cocktails.",
    "Cocktails": "Bloody Mary, Dirty Martini, Caesar",
    "Img": ""
  },
  {
    "Name": "Gin",
    "Strength": "37.5-50%",
    "Replacements": "-",
    "Description": "A distilled spirit flavored with juniper berries and other botanicals, known for its herbal and aromatic characteristics.",
    "Cocktails": "Martini, Gin and Tonic, Negroni",
    "Img": ""
  },
  {
    "Name": "Ginger",
    "Strength": "-",
    "Replacements": "-",
    "Description": "A pungent and spicy root used in various culinary preparations, often used in cocktails for its unique flavor.",
    "Cocktails": "Moscow Mule, Dark 'n' Stormy, Ginger Martini",
    "Img": ""
  },
  {
    "Name": "Ginger ale",
    "Strength": "-",
    "Replacements": "Ginger beer",
    "Description": "A carbonated soft drink flavored with ginger, often used as a mixer in cocktails.",
    "Cocktails": "Horse's Neck, Presbyterian, Rum Buck",
    "Img": ""
  },
  {
    "Name": "Ginger beer",
    "Strength": "-",
    "Replacements": "Ginger ale",
    "Description": "A carbonated soft drink flavored with ginger, typically spicier and more robust than ginger ale, commonly used in Moscow Mules and Dark 'n' Stormy cocktails.",
    "Cocktails": "Moscow Mule, Dark 'n' Stormy, Corn 'n' Oil",
    "Img": ""
  },
  {
    "Name": "Gold rum",
    "Strength": "37.5-40%",
    "Replacements": "-",
    "Description": "A type of rum that has been aged in oak barrels, resulting in a smoother and more complex flavor profile.",
    "Cocktails": "Mojito, Piña Colada, Daiquiri",
    "Img": ""
  },
  {
    "Name": "Goslings black seal rum",
    "Strength": "40%",
    "Replacements": "Dark rum",
    "Description": "A rich and full-bodied dark rum from Bermuda, known for its deep flavor and molasses notes.",
    "Cocktails": "Dark 'n' Stormy, Rum Swizzle, Bermuda Rum Swizzle",
    "Img": ""
  },
  {
    "Name": "Grand Marnier",
    "Strength": "40%",
    "Replacements": "Orange liqueur",
    "Description": "A premium orange liqueur made from a blend of Cognac, bitter orange essence, and sugar, with a rich and smooth flavor profile.",
    "Cocktails": "Margarita, Cosmopolitan, Grand Sidecar",
    "Img": ""
  },
  {
    "Name": "Grapefruit juice",
    "Strength": "-",
    "Replacements": "-",
    "Description": "A tangy and slightly bitter juice made from grapefruits, used as a mixer in cocktails.",
    "Cocktails": "Paloma, Greyhound, Hemingway Daiquiri",
    "Img": ""
  },
  {
    "Name": "Grapefruit-flavored soda",
    "Strength": "-",
    "Replacements": "-",
    "Description": "A carbonated soft drink with a grapefruit flavor, commonly used as a mixer in cocktails.",
    "Cocktails": "Sea Breeze, Greyhound, Paloma",
    "Img": ""
  },
  {
    "Name": "Grappa",
    "Strength": "35-60%",
    "Replacements": "-",
    "Description": "An Italian grape-based brandy made from pomace, the leftovers from winemaking, known for its strong and distinctive flavor.",
    "Cocktails": "Grappa Sour, Grappa Old Fashioned, Espresso Grappa",
    "Img": ""
  },
  {
    "Name": "Green chartreuse",
    "Strength": "55%",
    "Replacements": "-",
    "Description": "A French herbal liqueur made from a secret blend of 130 botanicals, known for its complex and herbal flavor profile.",
    "Cocktails": "Last Word, Bijou, Champs-Élysées",
    "Img": ""
  },
  {
    "Name": "Grenadine",
    "Strength": "-",
    "Replacements": "-",
    "Description": "A sweet syrup made from pomegranate juice and sugar, used to add a fruity and vibrant red color to cocktails.",
    "Cocktails": "Tequila Sunrise, Shirley Temple, Jack Rose",
    "Img": ""
  },
  {
    "Name": "Grenadine syrup",
    "Strength": "-",
    "Replacements": "Grenadine",
    "Description": "A sweet syrup made from pomegranate juice and sugar, used to add a fruity and vibrant red color to cocktails.",
    "Cocktails": "Tequila Sunrise, Shirley Temple, Jack Rose",
    "Img": ""
  },
  {
    "Name": "Honey",
    "Strength": "-",
    "Replacements": "Honey syrup",
    "Description": "A sweet and viscous natural substance produced by bees, used to add sweetness and complexity to cocktails.",
    "Cocktails": "Bee's Knees, Gold Rush, Penicillin",
    "Img": ""
  },
  {
    "Name": "Honey syrup",
    "Strength": "-",
    "Replacements": "Honey",
    "Description": "A simple syrup made by mixing equal parts of honey and water, used as a sweetener in cocktails.",
    "Cocktails": "Bee's Knees, Gold Rush, Penicillin",
    "Img": ""
  },
  {
    "Name": "Horseradish",
    "Strength": "-",
    "Replacements": "-",
    "Description": "A pungent and spicy root commonly used as a condiment, sometimes used in small amounts to add heat and flavor to cocktails.",
    "Cocktails": "Bloody Mary, Bullshot, Shucker's Delight",
    "Img": ""
  },
  {
    "Name": "Hot sauce",
    "Strength": "-",
    "Replacements": "-",
    "Description": "A spicy condiment made from chili peppers, commonly used to add heat and flavor to cocktails.",
    "Cocktails": "Bloody Mary, Michelada, Red Snapper",
    "Img": ""
  },
  {
    "Name": "Ice",
    "Strength": "-",
    "Replacements": "-",
    "Description": "Frozen water used to chill cocktails and keep them cold.",
    "Cocktails": "All cocktails",
    "Img": ""
  },
  {
    "Name": "Irish whiskey",
    "Strength": "40-46%",
    "Replacements": "-",
    "Description": "A smooth and triple-distilled whiskey made in Ireland, known for its light and fruity flavor profile.",
    "Cocktails": "Irish Coffee, Whiskey Sour, Irish Mule",
    "Img": ""
  },
  {
    "Name": "Kina lillet",
    "Strength": "-",
    "Replacements": "Lillet Blanc",
    "Description": "A fortified wine aperitif made from a blend of wine, citrus liqueurs, and quinine, with a crisp and slightly bitter taste.",
    "Cocktails": "Vesper, Corpse Reviver No. 2, White Negroni",
    "Img": ""
  },
  {
    "Name": "Lemon juice",
    "Strength": "-",
    "Replacements": "-",
    "Description": "The juice extracted from lemons, known for its tart and citrusy flavor, commonly used as a sour component in cocktails.",
    "Cocktails": "Whiskey Sour, Lemon Drop Martini, Tom Collins",
    "Img": ""
  },
  {
    "Name": "Lemon twist",
    "Strength": "-",
    "Replacements": "-",
    "Description": "A twist of lemon peel, often used as a garnish or to add citrus aroma to cocktails.",
    "Cocktails": "Martini, Tom Collins, Gin Sour",
    "Img": ""
  },
  {
    "Name": "Lillet Blanc",
    "Strength": "17%",
    "Replacements": "Kina lillet",
    "Description": "A French aperitif wine made from a blend of white wine, citrus liqueurs, and quinine, with a floral and slightly bitter flavor profile.",
    "Cocktails": "Vesper, Corpse Reviver No. 2, White Negroni",
    "Img": ""
  },
  {
    "Name": "Lime",
    "Strength": "-",
    "Replacements": "-",
    "Description": "A sour and acidic citrus fruit, commonly used for its juice and zest in cocktails.",
    "Cocktails": "Margarita, Mojito, Caipirinha",
    "Img": ""
  },
  {
    "Name": "Lime juice",
    "Strength": "-",
    "Replacements": "-",
    "Description": "The juice extracted from limes, known for its tangy and citrusy flavor, commonly used as a sour component in cocktails.",
    "Cocktails": "Margarita, Daiquiri, Gimlet",
    "Img": ""
  },
  {
    "Name": "London dry gin",
    "Strength": "37.5-50%",
    "Replacements": "Gin",
    "Description": "A style of gin that is dry and light-bodied, with a focus on juniper and citrus flavors.",
    "Cocktails": "Martini, Negroni, Gin and Tonic",
    "Img": ""
  },
  {
    "Name": "Maraschino",
    "Strength": "32-40%",
    "Replacements": "Maraschino cherry",
    "Description": "A clear cherry liqueur made from Marasca cherries, with a slightly sweet and almond-like flavor.",
    "Cocktails": "Aviation, Hemingway Daiquiri, Martinez",
    "Img": ""
  },
  {
    "Name": "Maraschino cherry",
    "Strength": "-",
    "Replacements": "Maraschino",
    "Description": "A preserved cherry typically soaked in Maraschino liqueur, often used as a garnish or to add a touch of sweetness to cocktails.",
    "Cocktails": "Old Fashioned, Manhattan, Singapore Sling",
    "Img": ""
  },
  {
    "Name": "Mezcal",
    "Strength": "40-55%",
    "Replacements": "-",
    "Description": "A distilled spirit made from the agave plant, similar to tequila but with a smoky and earthy flavor profile due to the production process.",
    "Cocktails": "Margarita, Mezcal Negroni, Oaxaca Old Fashioned",
    "Img": ""
  },
  {
    "Name": "Mint leaves",
    "Strength": "-",
    "Replacements": "Fresh mint",
    "Description": "Fragrant green leaves of the mint plant, often used as a garnish or muddled to add freshness and aroma to cocktails.",
    "Cocktails": "Mojito, Mint Julep, Southside",
    "Img": ""
  },
  {
    "Name": "Olive",
    "Strength": "-",
    "Replacements": "-",
    "Description": "A small fruit of the olive tree, commonly used as a garnish or to add a savory and briny flavor to cocktails.",
    "Cocktails": "Martini, Dirty Martini, Gibson",
    "Img": ""
  },
  {
    "Name": "Orange bitters",
    "Strength": "-",
    "Replacements": "-",
    "Description": "A bittersweet liquid made from the peels of oranges, used to add depth and complexity to cocktails.",
    "Cocktails": "Old Fashioned, Negroni, Martini",
    "Img": ""
  },
  {
    "Name": "Orange flower water",
    "Strength": "-",
    "Replacements": "-",
    "Description": "A distillate made from bitter orange blossoms, commonly used to add a floral and aromatic note to cocktails.",
    "Cocktails": "Ramos Gin Fizz, Corpse Reviver No. 2, Tom Collins",
    "Img": ""
  },
  {
    "Name": "Orange juice",
    "Strength": "-",
    "Replacements": "-",
    "Description": "The juice extracted from oranges, known for its sweet and citrusy flavor, commonly used as a mixer in cocktails.",
    "Cocktails": "Screwdriver, Mimosa, Tequila Sunrise",
    "Img": ""
  },
  {
    "Name": "Orange liqueur",
    "Strength": "25-40%",
    "Replacements": "-",
    "Description": "A sweet and citrusy liqueur made from orange peels, commonly used to add flavor and sweetness to cocktails.",
    "Cocktails": "Margarita, Sidecar, Cosmopolitan",
    "Img": ""
  },
  {
    "Name": "Orgeat syrup",
    "Strength": "-",
    "Replacements": "-",
    "Description": "A sweet syrup made from almonds, sugar, and orange flower water, commonly used in Tiki cocktails.",
    "Cocktails": "Mai Tai, Zombie, Scorpion",
    "Img": ""
  },
  {
    "Name": "Peach purée",
    "Strength": "-",
    "Replacements": "Peach schnapps",
    "Description": "A thick and sweet puree made from ripe peaches, often used to add a fruity and juicy flavor to cocktails.",
    "Cocktails": "Bellini, Sex on the Beach, Fuzzy Navel",
    "Img": ""
  },
  {
    "Name": "Peach schnapps",
    "Strength": "15-20%",
    "Replacements": "Peach purée",
    "Description": "A sweet and fruity liqueur made from peaches, commonly used to add a peach flavor to cocktails.",
    "Cocktails": "Sex on the Beach, Fuzzy Navel, Woo Woo",
    "Img": ""
  },
  {
    "Name": "Peruvian pisco",
    "Strength": "38-48%",
    "Replacements": "-",
    "Description": "A grape brandy made in Peru, known for its smoothness and versatility in cocktails.",
    "Cocktails": "Pisco Sour, Pisco Punch, Chilcano",
    "Img": ""
  },
  {
    "Name": "Peychaud’s bitters",
    "Strength": "-",
    "Replacements": "-",
    "Description": "A bright red bitters made from a secret blend of botanicals, with a distinctive anise and floral flavor profile, commonly used in classic cocktails from New Orleans.",
    "Cocktails": "Sazerac, Vieux Carré, Ramos Gin Fizz",
    "Img": ""
  },
  {
    "Name": "Pineapple juice",
    "Strength": "-",
    "Replacements": "-",
    "Description": "The juice extracted from pineapples, known for its tropical and sweet flavor, commonly used as a mixer in cocktails.",
    "Cocktails": "Piña Colada, Painkiller, Bahama Mama",
    "Img": ""
  },
  {
    "Name": "Prosecco",
    "Strength": "10.5-11.5%",
    "Replacements": "-",
    "Description": "An Italian sparkling wine with delicate bubbles and a fruity flavor, commonly used as a base in sparkling wine cocktails.",
    "Cocktails": "Bellini, Mimosa, Aperol Spritz",
    "Img": ""
  },
  {
    "Name": "Raspberry liqueur",
    "Strength": "15-20%",
    "Replacements": "Raspberry syrup",
    "Description": "A sweet and fruity liqueur made from raspberries, commonly used to add a raspberry flavor to cocktails.",
    "Cocktails": "Raspberry Martini, Raspberry Collins, Raspberry Margarita",
    "Img": ""
  },
  {
    "Name": "Raspberry syrup",
    "Strength": "-",
    "Replacements": "Raspberry liqueur",
    "Description": "A sweet syrup made from raspberries, used to add a fruity and vibrant red color to cocktails.",
    "Cocktails": "Raspberry Martini, Raspberry Collins, Raspberry Margarita",
    "Img": ""
  },
  {
    "Name": "Red chili pepper",
    "Strength": "-",
    "Replacements": "-",
    "Description": "A spicy and pungent pepper, commonly used in small amounts to add heat and flavor to cocktails.",
    "Cocktails": "Spicy Margarita, Red Snapper, Diablo",
    "Img": ""
  },
  {
    "Name": "Red vermouth",
    "Strength": "16-18%",
    "Replacements": "Sweet vermouth",
    "Description": "A fortified wine flavored with herbs and spices, known for its sweet and herbal taste.",
    "Cocktails": "Negroni, Manhattan, Boulevardier",
    "Img": ""
  },
  {
    "Name": "Red wine",
    "Strength": "12-15%",
    "Replacements": "-",
    "Description": "A fermented alcoholic beverage made from dark-colored grapes, commonly used as a base in wine-based cocktails.",
    "Cocktails": "Sangria, Mulled Wine, Kalimotxo",
    "Img": ""
  },
  {
    "Name": "Ruby port",
    "Strength": "19-22%",
    "Replacements": "-",
    "Description": "A fortified wine from Portugal, known for its rich and fruity flavor, commonly used in port wine cocktails.",
    "Cocktails": "Port and Tonic, Ruby Port Smash, Port Flip",
    "Img": ""
  },
  {
    "Name": "Rum",
    "Strength": "40-57%",
    "Replacements": "-",
    "Description": "A distilled alcoholic beverage made from sugarcane byproducts or molasses, with a wide range of flavors depending on the type and origin.",
    "Cocktails": "Mojito, Daiquiri, Piña Colada",
    "Img": ""
  },
  {
    "Name": "Rye whiskey",
    "Strength": "40-50%",
    "Replacements": "-",
    "Description": "A whiskey made primarily from rye grain, known for its spiciness and bold flavor profile.",
    "Cocktails": "Manhattan, Old Fashioned, Sazerac",
    "Img": ""
  },
  {
    "Name": "Salt",
    "Strength": "-",
    "Replacements": "-",
    "Description": "A crystalline mineral substance used to enhance flavors and add a savory taste to cocktails.",
    "Cocktails": "Margarita, Salty Dog, Bloody Mary",
    "Img": ""
  },
  {
    "Name": "Scotch whisky",
    "Strength": "40-46%",
    "Replacements": "-",
    "Description": "A whisky made in Scotland, known for its smoky and peaty flavor profile, often enjoyed straight or on the rocks.",
    "Cocktails": "Rob Roy, Blood and Sand, Rusty Nail",
    "Img": ""
  },
  {
    "Name": "Simple syrup",
    "Strength": "-",
    "Replacements": "Sugar syrup",
    "Description": "A basic sweet syrup made by dissolving sugar in water, used as a sweetener in cocktails.",
    "Cocktails": "Mojito, Daiquiri, Tom Collins",
    "Img": ""
  },
  {
    "Name": "Soda water",
    "Strength": "-",
    "Replacements": "Club soda",
    "Description": "A carbonated water that is slightly salty, often used as a mixer to add fizz to cocktails.",
    "Cocktails": "Vodka Soda, Gin and Tonic, Tom Collins",
    "Img": ""
  },
  {
    "Name": "Sparkling wine",
    "Strength": "10.5-12%",
    "Replacements": "-",
    "Description": "A wine with significant levels of carbon dioxide, creating bubbles, commonly used in sparkling wine cocktails.",
    "Cocktails": "Mimosa, French 75, Bellini",
    "Img": ""
  },
  {
    "Name": "Sugar",
    "Strength": "-",
    "Replacements": "Sugar syrup",
    "Description": "A crystalline sweet substance made from sugarcane or sugar beets, commonly used as a sweetener in cocktails.",
    "Cocktails": "Mojito, Daiquiri, Margarita",
    "Img": ""
  },
  {
    "Name": "Sugar cane juice",
    "Strength": "-",
    "Replacements": "-",
    "Description": "The juice extracted from sugarcane, used as a sweetener and flavoring in cocktails.",
    "Cocktails": "Caipirinha, Ti' Punch, Daiquiri",
    "Img": ""
  },
  {
    "Name": "Sugar syrup",
    "Strength": "-",
    "Replacements": "Simple syrup",
    "Description": "A sweet syrup made by dissolving sugar in water, used as a sweetener in cocktails.",
    "Cocktails": "Mojito, Daiquiri, Tom Collins",
    "Img": ""
  },
  {
    "Name": "Sweet vermouth",
    "Strength": "16-18%",
    "Replacements": "Red vermouth",
    "Description": "A fortified wine flavored with herbs and spices, known for its sweet and herbal taste.",
    "Cocktails": "Manhattan, Negroni, Boulevardier",
    "Img": ""
  },
  {
    "Name": "Tequila",
    "Strength": "38-40%",
    "Replacements": "-",
    "Description": "A distilled spirit made from the blue agave plant, primarily produced in Mexico, known for its earthy and agave-forward flavor profile.",
    "Cocktails": "Margarita, Tequila Sunrise, Paloma",
    "Img": ""
  },
  {
    "Name": "Tomato juice",
    "Strength": "-",
    "Replacements": "-",
    "Description": "The juice extracted from tomatoes, commonly used as a mixer in cocktails, especially in savory drinks like the Bloody Mary.",
    "Cocktails": "Bloody Mary, Michelada, Red Snapper",
    "Img": ""
  },
  {
    "Name": "Triple sec",
    "Strength": "15-40%",
    "Replacements": "Orange liqueur",
    "Description": "A sweet and clear orange-flavored liqueur, often used as a flavor enhancer and sweetener in cocktails.",
    "Cocktails": "Margarita, Cosmopolitan, Sidecar",
    "Img": ""
  },
  {
    "Name": "Vermouth",
    "Strength": "14-18%",
    "Replacements": "-",
    "Description": "A fortified wine flavored with botanicals, commonly used as a mixer or an aperitif in cocktails.",
    "Cocktails": "Martini, Manhattan, Negroni",
    "Img": ""
  },
  {
    "Name": "Vodka",
    "Strength": "35-50%",
    "Replacements": "-",
    "Description": "A distilled spirit made from fermented grains or potatoes, known for its neutral flavor and versatility in cocktails.",
    "Cocktails": "Vodka Martini, Moscow Mule, Bloody Mary",
    "Img": ""
  },
  {
    "Name": "Water",
    "Strength": "-",
    "Replacements": "-",
    "Description": "A clear and odorless liquid composed of hydrogen and oxygen, commonly used in cocktails for dilution or as an ice substitute.",
    "Cocktails": "Whiskey Highball, Vodka Soda, Tom Collins",
    "Img": ""
  },
  {
    "Name": "Whiskey",
    "Strength": "40-50%",
    "Replacements": "Bourbon, Rye whiskey",
    "Description": "A distilled spirit made from fermented grains, typically aged in wooden barrels, with a range of flavors depending on the type and production process.",
    "Cocktails": "Old Fashioned, Whiskey Sour, Manhattan",
    "Img": ""
  },
  {
    "Name": "White rum",
    "Strength": "37.5-40%",
    "Replacements": "-",
    "Description": "A light and clear rum that is aged for a short period or not aged at all, known for its smooth and versatile nature.",
    "Cocktails": "Mojito, Piña Colada, Daiquiri",
    "Img": ""
  },
  {
    "Name": "Worcestershire sauce",
    "Strength": "-",
    "Replacements": "-",
    "Description": "A savory and tangy sauce made from fermented anchovies, vinegar, and various spices, commonly used to add depth of flavor to cocktails.",
    "Cocktails": "Bloody Mary, Caesar, Michelada",
    "Img": ""
  },
  {
    "Name": "Yellow chartreuse",
    "Strength": "40%",
    "Replacements": "Green chartreuse",
    "Description": "A herbal liqueur made by the Carthusian monks, with a complex and aromatic flavor profile.",
    "Cocktails": "Yellow Daisy, Bijou, Champs-Élysées",
    "Img": ""
  }
]

// ? sanitize string list values 
data.forEach((ingredient) => {
  // Converto la stringa 'replacements' in un array di stringhe con trim degli elementi
  ingredient.Replacements = ingredient.Replacements.split(',').map((replacement) => replacement.trim());

  // Converto la stringa 'cocktails' in un array di stringhe con trim degli elementi
  ingredient.Cocktails = ingredient.Cocktails.split(',').map((cocktail) => cocktail.trim());
});

// ? lowercasing all cocktails, replacements and names
data.forEach((item) => {
  const newItem = {};
  Object.keys(item).forEach((key) => {
    if (key === 'Name' || key === 'Replacements' || key === 'Cocktails') {
      if (typeof item[key] === 'string') {
        item[key] = item[key].toLowerCase();
      } else if (Array.isArray(item[key])) {
        item[key] = item[key].map((value) => value.toLowerCase());
      }
    }
    newItem[key.toLowerCase()] = item[key];
  });
  Object.assign(item, newItem);
});

// ? replacing all emptyes with empty string
const updatedData = data.map(obj =>
  Object.entries(obj).reduce((acc, [key, value]) => {
    // Sostituisci il valore "-" con una stringa vuota
    acc[key] = (value === '-') ? '' : value;
    return acc;
  }, {})
);

// ? sanitize capitalized keys
const newData = updatedData.map((item) => {
  const newItem = {};
  Object.keys(item).forEach((key) => {
    newItem[key.toLowerCase()] = item[key];
  });
  return newItem;
});

const jsonString = JSON.stringify(newData, null, 2);

fs.writeFileSync('/Users/kaori/Library/Mobile Documents/com~apple~CloudDocs/Documenti/its/react/cocktailDex/cocktailDexAPI/src/models/ingredients.json', jsonString, 'utf8');

console.log('File JSON sovrascritto con successo!');