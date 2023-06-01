import mongoose from "mongoose";

type RecipeIgredient = {

    ingredient: string;
    qty?: string;
    oz?: string;
};

export type CocktailType = {

    _id?: string;
    name: string;
    alcoholic: boolean;
    ibaFamily?: string;
    family?: string;
    recipe: RecipeIgredient[];
    glass: string;
    method: string;
    garnish: string;
    history?: string;
    variants?: string[],
    img?: string;
};

export const dummy_cocktails: CocktailType[] = [
    {
        "name": "alexander",
        "alcoholic": true,
        "ibaFamily": "the unforgettables",
        "family": "",
        "recipe": [
            {
                "ingredient": "cognac",
                "qty": "30 ml",
                "oz": ""
            },
            {
                "ingredient": "creme de cacao",
                "qty": "30 ml",
                "oz": ""
            },
            {
                "ingredient": "fresh cream",
                "qty": "30 ml",
                "oz": ""
            }
        ],
        "glass": "cocktail glass",
        "method": "Pour all ingredients into a cocktail shaker filled with ice cubes. Shake and strain into a chilled cocktail glass.",
        "garnish": "sprinkle fresh ground nutmeg on top.",
        "history": "The Alexander cocktail was born in London in 1922 by Hery McElhone, at Ciro’s Club in honor of a famous bride. Initially, it was called Panama, and Gin was used instead of Cognac, along with light cocoa cream instead of dark.",
        "variants": [
            "grasshopper",
            "alexandra",
            "alexander's sister",
            "alejandro"
        ],
        "img": ""
    },
    {
        "name": "americano",
        "alcoholic": true,
        "ibaFamily": "the unforgettables",
        "family": "",
        "recipe": [
            {
                "ingredient": "campari",
                "qty": "30 ml",
                "oz": ""
            },
            {
                "ingredient": "sweet vermouth",
                "qty": "30 ml",
                "oz": ""
            },
            {
                "ingredient": "soda water",
                "qty": "A splash",
                "oz": ""
            }
        ],
        "glass": "old-fashioned glass",
        "method": "Build all ingredients directly in a rocks glass filled with ice. Garnish with half orange slice.",
        "garnish": "half orange slice",
        "history": "The Americano cocktail is believed to have been created in the 1860s in Italy. It was originally known as the \"Milano-Torino\" because of the origin of its main ingredients. Later, it was renamed Americano due to its popularity among American tourists.",
        "variants": [],
        "img": ""
    },
    {
        "name": "angel face",
        "alcoholic": true,
        "ibaFamily": "the unforgettables",
        "family": "",
        "recipe": [
            {
                "ingredient": "gin",
                "qty": "30 ml",
                "oz": ""
            },
            {
                "ingredient": "apricot brandy",
                "qty": "30 ml",
                "oz": ""
            },
            {
                "ingredient": "calvados",
                "qty": "30 ml",
                "oz": ""
            }
        ],
        "glass": "cocktail glass",
        "method": "Shake all ingredients with ice and strain into a cocktail glass.",
        "garnish": "none",
        "history": "The Angel Face cocktail first appeared in Harry Craddock's 1930 The Savoy Cocktail Book. It is named after the nickname given to the actress Mary Pickford by her husband Douglas Fairbanks.",
        "variants": [],
        "img": ""
    },
    {
        "name": "aviation",
        "alcoholic": true,
        "ibaFamily": "the unforgettables",
        "family": "",
        "recipe": [
            {
                "ingredient": "gin",
                "qty": "45 ml",
                "oz": ""
            },
            {
                "ingredient": "maraschino liqueur",
                "qty": "15 ml",
                "oz": ""
            },
            {
                "ingredient": "lemon juice",
                "qty": "15 ml",
                "oz": ""
            },
            {
                "ingredient": "creme de violette",
                "qty": "A splash",
                "oz": ""
            }
        ],
        "glass": "cocktail glass",
        "method": "Pour all ingredients into a cocktail shaker filled with ice cubes. Shake and strain into a chilled cocktail glass.",
        "garnish": "cherry",
        "history": "The Aviation cocktail was created by Hugo Ensslin, head bartender at the Hotel Wallick in New York, around the time of World War I. The original recipe included Creme de Violette, which gives the cocktail its pale sky-blue color.",
        "variants": [],
        "img": ""
    },
    {
        "name": "between the sheets",
        "alcoholic": true,
        "ibaFamily": "the unforgettables",
        "family": "",
        "recipe": [
            {
                "ingredient": "white rum",
                "qty": "30 ml",
                "oz": ""
            },
            {
                "ingredient": "cognac",
                "qty": "30 ml",
                "oz": ""
            },
            {
                "ingredient": "triple sec",
                "qty": "30 ml",
                "oz": ""
            },
            {
                "ingredient": "lemon juice",
                "qty": "20 ml",
                "oz": ""
            }
        ],
        "glass": "cocktail glass",
        "method": "Pour all ingredients into a cocktail shaker filled with ice cubes. Shake and strain into a chilled cocktail glass.",
        "garnish": "lemon twist",
        "history": "The Between the Sheets cocktail is a variation of the classic Sidecar cocktail. It is believed to have been created in the 1930s during Prohibition. The name refers to the drink's potency.",
        "variants": [],
        "img": ""
    },
    {
        "name": "boulevardier",
        "alcoholic": true,
        "ibaFamily": "the unforgettables",
        "family": "",
        "recipe": [
            {
                "ingredient": "bourbon",
                "qty": "30 ml",
                "oz": ""
            },
            {
                "ingredient": "sweet vermouth",
                "qty": "30 ml",
                "oz": ""
            },
            {
                "ingredient": "campari",
                "qty": "30 ml",
                "oz": ""
            }
        ],
        "glass": "old-fashioned glass",
        "method": "Pour all ingredients into a mixing glass with ice. Stir well and strain into a chilled cocktail glass.",
        "garnish": "orange twist",
        "history": "The Boulevardier cocktail is believed to have been created in the 1920s by Erskine Gwynne, an American writer and socialite. It is essentially a Negroni with bourbon replacing gin.",
        "variants": [],
        "img": ""
    },
    {
        "name": "brandy crusta",
        "alcoholic": true,
        "ibaFamily": "the unforgettables",
        "family": "",
        "recipe": [
            {
                "ingredient": "cognac",
                "qty": "60 ml",
                "oz": ""
            },
            {
                "ingredient": "maraschino liqueur",
                "qty": "1 bar spoon",
                "oz": ""
            },
            {
                "ingredient": "orange curaçao",
                "qty": "1 bar spoon",
                "oz": ""
            },
            {
                "ingredient": "fresh lemon juice",
                "qty": "1 bar spoon",
                "oz": ""
            },
            {
                "ingredient": "sugar syrup",
                "qty": "1 bar spoon",
                "oz": ""
            },
            {
                "ingredient": "angostura bitters",
                "qty": "2 dashes",
                "oz": ""
            }
        ],
        "glass": "old-fashioned glass",
        "method": "Prepare a sugar-rimmed glass. Stir the ingredients in a mixing glass with ice cubes. Strain into the prepared glass.",
        "garnish": "lemon peel",
        "history": "The Brandy Crusta cocktail is a classic drink that dates back to the mid-19th century. It was first created by Joseph Santini, a bartender in New Orleans. The cocktail is known for its elaborate presentation with a sugar-rimmed glass and a long, spiral lemon peel.",
        "variants": [],
        "img": ""
    },
    {
        "name": "casino",
        "alcoholic": true,
        "ibaFamily": "the unforgettables",
        "family": "",
        "recipe": [
            {
                "ingredient": "old tom gin",
                "qty": "40 ml",
                "oz": ""
            },
            {
                "ingredient": "maraschino liqueur",
                "qty": "10 ml",
                "oz": ""
            },
            {
                "ingredient": "orange bitters",
                "qty": "2 dashes",
                "oz": ""
            },
            {
                "ingredient": "lemon juice",
                "qty": "10 ml",
                "oz": ""
            }
        ],
        "glass": "cocktail glass",
        "method": "Stir all ingredients with ice and strain into a cocktail glass.",
        "garnish": "lemon twist",
        "history": "The Casino cocktail dates back to the late 19th century and was first mentioned in Harry Johnson's 1888 Bartender's Manual. It is a classic gin cocktail with a touch of sweetness from the Maraschino liqueur.",
        "variants": [],
        "img": ""
    },
    {
        "name": "clover club",
        "alcoholic": true,
        "ibaFamily": "the unforgettables",
        "family": "",
        "recipe": [
            {
                "ingredient": "gin",
                "qty": "45 ml",
                "oz": ""
            },
            {
                "ingredient": "raspberry syrup",
                "qty": "15 ml",
                "oz": ""
            },
            {
                "ingredient": "lemon juice",
                "qty": "15 ml",
                "oz": ""
            },
            {
                "ingredient": "egg white",
                "qty": "A splash",
                "oz": ""
            }
        ],
        "glass": "cocktail glass",
        "method": "Dry shake all ingredients. Add ice and shake again. Strain into a cocktail glass.",
        "garnish": "lemon twist",
        "history": "The Clover Club cocktail is believed to have originated in the late 19th century at the Clover Club, a men's club in Philadelphia. It became a popular drink during the pre-Prohibition era and is known for its pink color.",
        "variants": [],
        "img": ""
    },
    {
        "name": "daiquiri",
        "alcoholic": true,
        "ibaFamily": "the unforgettables",
        "family": "",
        "recipe": [
            {
                "ingredient": "white rum",
                "qty": "50 ml",
                "oz": ""
            },
            {
                "ingredient": "lime juice",
                "qty": "20 ml",
                "oz": ""
            },
            {
                "ingredient": "simple syrup",
                "qty": "10 ml",
                "oz": ""
            }
        ],
        "glass": "cocktail glass",
        "method": "Shake all ingredients with ice and strain into a chilled cocktail glass.",
        "garnish": "lime wheel",
        "history": "The Daiquiri cocktail is believed to have originated in Cuba in the late 19th century. It was named after a beach near Santiago de Cuba. The original recipe was simple, consisting of rum, lime juice, and sugar.",
        "variants": [],
        "img": ""
    },
    {
        "name": "dry martini",
        "alcoholic": true,
        "ibaFamily": "the unforgettables",
        "family": "",
        "recipe": [
            {
                "ingredient": "london dry gin",
                "qty": "60 ml",
                "oz": ""
            },
            {
                "ingredient": "dry vermouth",
                "qty": "10 ml",
                "oz": ""
            }
        ],
        "glass": "cocktail glass",
        "method": "Stir all ingredients with ice and strain into a chilled cocktail glass.",
        "garnish": "lemon twist or olive",
        "history": "The Dry Martini is one of the most iconic cocktails in the world. Its exact origins are uncertain, but it became popular in the late 19th and early 20th centuries. The drink is known for its simplicity and elegance.",
        "variants": [],
        "img": ""
    },
    {
        "name": "gin fizz",
        "alcoholic": true,
        "ibaFamily": "the unforgettables",
        "family": "",
        "recipe": [
            {
                "ingredient": "gin",
                "qty": "45 ml",
                "oz": ""
            },
            {
                "ingredient": "lemon juice",
                "qty": "30 ml",
                "oz": ""
            },
            {
                "ingredient": "simple syrup",
                "qty": "10 ml",
                "oz": ""
            },
            {
                "ingredient": "soda water",
                "qty": "60 ml",
                "oz": ""
            }
        ],
        "glass": "collins glass",
        "method": "Shake all ingredients with ice, except soda water. Strain into a glass filled with ice. Top with soda water.",
        "garnish": "lemon slice",
        "history": "The Gin Fizz is a classic cocktail that originated in the United States in the mid-19th century. It is a refreshing drink made with gin, lemon juice, sugar, and soda water. The addition of soda water gives it a fizzy texture.",
        "variants": [],
        "img": ""
    },
    {
        "name": "hanky panky",
        "alcoholic": true,
        "ibaFamily": "the unforgettables",
        "family": "",
        "recipe": [
            {
                "ingredient": "gin",
                "qty": "45 ml",
                "oz": ""
            },
            {
                "ingredient": "sweet vermouth",
                "qty": "45 ml",
                "oz": ""
            },
            {
                "ingredient": "fernet branca",
                "qty": "5 ml",
                "oz": ""
            }
        ],
        "glass": "cocktail glass",
        "method": "Stir all ingredients with ice and strain into a chilled cocktail glass.",
        "garnish": "orange peel",
        "history": "The Hanky Panky cocktail was created by Ada Coleman, head bartender at the American Bar in the Savoy Hotel, London, in the early 20th century. It was named by actor Charles Hawtrey, who said it had \"a real hanky-panky\" effect on him.",
        "variants": [],
        "img": ""
    },
    {
        "name": "john collins",
        "alcoholic": true,
        "ibaFamily": "the unforgettables",
        "family": "",
        "recipe": [
            {
                "ingredient": "london dry gin",
                "qty": "45 ml",
                "oz": ""
            },
            {
                "ingredient": "lemon juice",
                "qty": "30 ml",
                "oz": ""
            },
            {
                "ingredient": "sugar syrup",
                "qty": "15 ml",
                "oz": ""
            },
            {
                "ingredient": "soda water",
                "qty": "A splash",
                "oz": ""
            }
        ],
        "glass": "collins glass",
        "method": "Pour all ingredients except soda water into a shaker. Shake well and strain into a Collins glass filled with ice cubes. Top with soda water.",
        "garnish": "lemon slice and cherry",
        "history": "The John Collins cocktail is believed to be a variation of the Tom Collins cocktail, which dates back to the 19th century. It is named after the headwaiter of the Limmer's Hotel in London, where the drink was popularized.",
        "variants": [],
        "img": ""
    },
    {
        "name": "manhattan",
        "alcoholic": true,
        "ibaFamily": "the unforgettables",
        "family": "",
        "recipe": [
            {
                "ingredient": "rye whiskey",
                "qty": "50 ml",
                "oz": ""
            },
            {
                "ingredient": "sweet vermouth",
                "qty": "25 ml",
                "oz": ""
            },
            {
                "ingredient": "angostura bitters",
                "qty": "2 dashes",
                "oz": ""
            }
        ],
        "glass": "cocktail glass",
        "method": "Stir all ingredients with ice and strain into a chilled cocktail glass.",
        "garnish": "cherry",
        "history": "The Manhattan cocktail is believed to have originated in the mid-19th century and was first mentioned in William Schmidt's 1891 book \"The Flowing Bowl.\" It is a classic whiskey cocktail that has stood the test of time.",
        "variants": [],
        "img": ""
    },
    {
        "name": "mint julep",
        "alcoholic": true,
        "ibaFamily": "the unforgettables",
        "family": "",
        "recipe": [
            {
                "ingredient": "bourbon",
                "qty": "60 ml",
                "oz": ""
            },
            {
                "ingredient": "sugar syrup",
                "qty": "10 ml",
                "oz": ""
            },
            {
                "ingredient": "fresh mint leaves",
                "qty": "8"
            },
            {
                "ingredient": "crushed ice",
                "qty": "A handful"
            }
        ],
        "glass": "julep cup",
        "method": "Muddle the mint leaves and sugar syrup in the bottom of a glass. Fill the glass with crushed ice and pour in the bourbon. Stir gently until the glass becomes frosted. Add more ice and stir again before serving.",
        "garnish": "mint sprig",
        "history": "The Mint Julep is a classic Southern cocktail that is closely associated with the Kentucky Derby. It has been enjoyed for centuries and is known for its refreshing and aromatic qualities.",
        "variants": [],
        "img": ""
    },
    {
        "name": "mojito",
        "alcoholic": true,
        "ibaFamily": "the unforgettables",
        "family": "",
        "recipe": [
            {
                "ingredient": "white rum",
                "qty": "50 ml",
                "oz": ""
            },
            {
                "ingredient": "lime juice",
                "qty": "25 ml",
                "oz": ""
            },
            {
                "ingredient": "sugar syrup",
                "qty": "2 bar spoons",
                "oz": ""
            },
            {
                "ingredient": "mint leaves",
                "qty": "6"
            },
            {
                "ingredient": "soda water",
                "qty": "A splash",
                "oz": ""
            }
        ],
        "glass": "collins glass",
        "method": "Muddle the mint leaves and sugar syrup in the bottom of a glass. Add lime juice and rum. Fill the glass with crushed ice and top with soda water. Stir gently.",
        "garnish": "mint sprig and lime wheel",
        "history": "The Mojito is a popular cocktail that originated in Cuba and is associated with the Cuban culture and lifestyle. It was originally consumed for medicinal purposes but gained popularity as a refreshing and delicious drink.",
        "variants": [],
        "img": ""
    },
    {
        "name": "moscow mule",
        "alcoholic": true,
        "ibaFamily": "the unforgettables",
        "family": "",
        "recipe": [
            {
                "ingredient": "vodka",
                "qty": "45 ml",
                "oz": ""
            },
            {
                "ingredient": "lime juice",
                "qty": "15 ml",
                "oz": ""
            },
            {
                "ingredient": "ginger beer",
                "qty": "Top up"
            }
        ],
        "glass": "mule mug",
        "method": "Squeeze lime juice into a Moscow Mule mug. Add ice cubes, vodka, and ginger beer. Stir gently and garnish with a lime wedge.",
        "garnish": "lime wedge",
        "history": "The Moscow Mule cocktail was created in the 1940s as a marketing collaboration between a vodka distributor and a ginger beer producer. It gained popularity and became associated with the iconic copper mug.",
        "variants": [],
        "img": ""
    },
    {
        "name": "negroni",
        "alcoholic": true,
        "ibaFamily": "the unforgettables",
        "family": "",
        "recipe": [
            {
                "ingredient": "gin",
                "qty": "30 ml",
                "oz": ""
            },
            {
                "ingredient": "campari",
                "qty": "30 ml",
                "oz": ""
            },
            {
                "ingredient": "sweet vermouth",
                "qty": "30 ml",
                "oz": ""
            }
        ],
        "glass": "old-fashioned glass",
        "method": "Stir all ingredients with ice and strain into a chilled glass filled with ice cubes.",
        "garnish": "orange peel",
        "history": "The Negroni cocktail is believed to have originated in Florence, Italy, in the early 20th century. It was created by Count Camillo Negroni, who asked his bartender to strengthen his favorite cocktail, the Americano, by adding gin instead of soda water.",
        "variants": [],
        "img": ""
    },
    {
        "name": "old fashioned",
        "alcoholic": true,
        "ibaFamily": "the unforgettables",
        "family": "",
        "recipe": [
            {
                "ingredient": "bourbon or rye whiskey",
                "qty": "50 ml",
                "oz": ""
            },
            {
                "ingredient": "sugar cube",
                "qty": "1"
            },
            {
                "ingredient": "angostura bitters",
                "qty": "2 dashes",
                "oz": ""
            },
            {
                "ingredient": "water",
                "qty": "A splash",
                "oz": ""
            }
        ],
        "glass": "old-fashioned glass",
        "method": "Muddle the sugar cube and bitters with a splash of water in an old-fashioned glass. Fill the glass with ice cubes and add the whiskey. Stir gently until well mixed.",
        "garnish": "orange peel and cherry",
        "history": "The Old Fashioned is a classic whiskey cocktail that dates back to the early 19th century. It is one of the oldest known cocktails and is known for its simplicity and timeless appeal.",
        "variants": [],
        "img": ""
    },
    {
        "name": "pina colada",
        "alcoholic": true,
        "ibaFamily": "the unforgettables",
        "family": "",
        "recipe": [
            {
                "ingredient": "white rum",
                "qty": "45 ml",
                "oz": ""
            },
            {
                "ingredient": "coconut cream",
                "qty": "45 ml",
                "oz": ""
            },
            {
                "ingredient": "pineapple juice",
                "qty": "90 ml",
                "oz": ""
            }
        ],
        "glass": "hurricane glass",
        "method": "Blend all the ingredients with ice in a blender until smooth. Pour into a hurricane glass.",
        "garnish": "pineapple wedge and cherry",
        "history": "The Pina Colada is a tropical cocktail that originated in Puerto Rico in the 1950s. It gained popularity in the United States and became a symbol of vacation and relaxation.",
        "variants": [],
        "img": ""
    },
    {
        "name": "sazerac",
        "alcoholic": true,
        "ibaFamily": "the unforgettables",
        "family": "",
        "recipe": [
            {
                "ingredient": "rye whiskey",
                "qty": "60 ml",
                "oz": ""
            },
            {
                "ingredient": "sugar cube",
                "qty": "1"
            },
            {
                "ingredient": "peychaud's bitters",
                "qty": "2 dashes",
                "oz": ""
            },
            {
                "ingredient": "absinthe",
                "qty": "A few dashes",
                "oz": ""
            },
            {
                "ingredient": "lemon peel",
                "qty": ""
            }
        ],
        "glass": "old-fashioned glass",
        "method": "Rinse an old-fashioned glass with absinthe and discard the excess. Muddle the sugar cube and Peychaud's bitters in the glass. Add the whiskey and ice cubes. Stir gently and garnish with a lemon peel.",
        "garnish": "lemon peel",
        "history": "The Sazerac is a classic New Orleans cocktail that is considered one of the oldest known American cocktails. It is made with rye whiskey, sugar, Peychaud's bitters, and a rinse of absinthe, and is traditionally served in an old-fashioned glass.",
        "variants": [],
        "img": ""
    },
    {
        "name": "tom collins",
        "alcoholic": true,
        "ibaFamily": "the unforgettables",
        "family": "",
        "recipe": [
            {
                "ingredient": "london dry gin",
                "qty": "45 ml",
                "oz": ""
            },
            {
                "ingredient": "lemon juice",
                "qty": "30 ml",
                "oz": ""
            },
            {
                "ingredient": "sugar syrup",
                "qty": "15 ml",
                "oz": ""
            },
            {
                "ingredient": "soda water",
                "qty": "Top up"
            }
        ],
        "glass": "collins glass",
        "method": "Pour the gin, lemon juice, and sugar syrup into a Collins glass. Fill with ice cubes and top with soda water. Stir gently and garnish with a lemon slice and cherry.",
        "garnish": "lemon slice and cherry",
        "history": "The Tom Collins is a classic cocktail that originated in the United States in the mid-19th century. It is made with gin, lemon juice, sugar, and soda water, and is known for its refreshing taste.",
        "variants": [],
        "img": ""
    },
    {
        "name": "whiskey sour",
        "alcoholic": true,
        "ibaFamily": "the unforgettables",
        "family": "",
        "recipe": [
            {
                "ingredient": "bourbon or rye whiskey",
                "qty": "45 ml",
                "oz": ""
            },
            {
                "ingredient": "lemon juice",
                "qty": "30 ml",
                "oz": ""
            },
            {
                "ingredient": "sugar syrup",
                "qty": "15 ml",
                "oz": ""
            }
        ],
        "glass": "rocks glass",
        "method": "Shake all ingredients with ice and strain into a rocks glass filled with ice cubes.",
        "garnish": "orange slice and cherry",
        "history": "The Whiskey Sour is a classic cocktail that dates back to the mid-19th century. It is made with whiskey, lemon juice, and sugar, and is known for its balanced sweet and sour flavors.",
        "variants": [],
        "img": ""
    },
    {
        "name": "white lady",
        "alcoholic": true,
        "ibaFamily": "the unforgettables",
        "family": "",
        "recipe": [
            {
                "ingredient": "gin",
                "qty": "45 ml",
                "oz": ""
            },
            {
                "ingredient": "triple sec",
                "qty": "30 ml",
                "oz": ""
            },
            {
                "ingredient": "lemon juice",
                "qty": "20 ml",
                "oz": ""
            }
        ],
        "glass": "cocktail glass",
        "method": "Shake all ingredients with ice and strain into a chilled cocktail glass.",
        "garnish": "lemon twist",
        "history": "The White Lady is a classic cocktail that originated in the early 20th century. It is made with gin, triple sec, and lemon juice, and is known for its elegant and refreshing taste.",
        "variants": [],
        "img": ""
    },
    {
        "name": "bellini",
        "alcoholic": true,
        "ibaFamily": "contemporary classics",
        "family": "champagne cocktails",
        "recipe": [
            {
                "ingredient": "peach puree",
                "qty": "10 cl",
                "oz": ""
            },
            {
                "ingredient": "prosecco",
                "qty": "90 cl",
                "oz": ""
            }
        ],
        "glass": "champagne flute",
        "method": "Pour peach puree into chilled flute, add Prosecco, and stir gently",
        "garnish": "peach slice",
        "history": "The Bellini was invented in Venice, Italy in the 1930s",
        "variants": [],
        "img": ""
    },
    {
        "name": "black russian",
        "alcoholic": true,
        "ibaFamily": "contemporary classics",
        "family": "",
        "recipe": [
            {
                "ingredient": "vodka",
                "qty": "5 cl",
                "oz": ""
            },
            {
                "ingredient": "coffee liqueur",
                "qty": "2 cl",
                "oz": ""
            }
        ],
        "glass": "old-fashioned glass",
        "method": "Build the ingredients in an old-fashioned glass filled with ice",
        "garnish": "none",
        "history": "The Black Russian cocktail is a classic cocktail from the 1950s. It was created by Gustave Tops, a Belgian barman, in Brussels.",
        "variants": [
            "white russian"
        ],
        "img": ""
    },
    {
        "name": "bloody mary",
        "alcoholic": true,
        "ibaFamily": "contemporary classics",
        "family": "",
        "recipe": [
            {
                "ingredient": "vodka",
                "qty": "4.5 cl",
                "oz": ""
            },
            {
                "ingredient": "tomato juice",
                "qty": "9 cl",
                "oz": ""
            },
            {
                "ingredient": "lemon juice",
                "qty": "1.5 cl",
                "oz": ""
            },
            {
                "ingredient": "worcestershire sauce",
                "qty": "1 dash",
                "oz": ""
            },
            {
                "ingredient": "tabasco sauce",
                "qty": "2 dashes",
                "oz": ""
            },
            {
                "ingredient": "salt",
                "qty": "2 dashes",
                "oz": ""
            },
            {
                "ingredient": "pepper",
                "qty": "2 dashes",
                "oz": ""
            },
            {
                "ingredient": "celery salt",
                "qty": "1 dash",
                "oz": ""
            },
            {
                "ingredient": "lime",
                "qty": "",
                "oz": "Garnish"
            },
            {
                "ingredient": "celery",
                "qty": "",
                "oz": "Garnish"
            }
        ],
        "glass": "highball glass",
        "method": "Stir gently, pour all ingredients into highball glass",
        "garnish": "lime wedge and celery stalk",
        "history": "The Bloody Mary is a cocktail that was first created in the 1920s or 1930s. It is said to have been named after Queen Mary I of England.",
        "variants": [
            "virgin mary"
        ],
        "img": ""
    },
    {
        "name": "caipirinha",
        "alcoholic": true,
        "ibaFamily": "contemporary classics",
        "family": "the new era",
        "recipe": [
            {
                "ingredient": "cachaca",
                "qty": "5 cl",
                "oz": ""
            },
            {
                "ingredient": "sugar",
                "qty": "2 tsp",
                "oz": ""
            },
            {
                "ingredient": "lime",
                "qty": "Half",
                "oz": ""
            }
        ],
        "glass": "old-fashioned glass",
        "method": "Muddle lime and sugar in an old-fashioned glass, fill with ice and add Cachaca",
        "garnish": "lime wheel",
        "history": "The Caipirinha is the national cocktail of Brazil and is made with Cachaca, a distilled spirit made from sugarcane juice.",
        "variants": [],
        "img": ""
    },
    {
        "name": "champagne cocktail",
        "alcoholic": true,
        "ibaFamily": "contemporary classics",
        "family": "",
        "recipe": [
            {
                "ingredient": "sugar cube",
                "qty": "1",
                "oz": ""
            },
            {
                "ingredient": "angostura bitters",
                "qty": "2 dashes",
                "oz": ""
            },
            {
                "ingredient": "champagne",
                "qty": "9 cl",
                "oz": ""
            }
        ],
        "glass": "champagne flute",
        "method": "Add sugar cube and dash of bitters to a champagne flute, fill with Champagne",
        "garnish": "orange twist and cherry",
        "history": "The Champagne Cocktail is one of the oldest recorded cocktails. It dates back to the 19th century.",
        "variants": [],
        "img": ""
    },
    {
        "name": "corpse reviver n.2",
        "alcoholic": true,
        "ibaFamily": "contemporary classics",
        "family": "",
        "recipe": [
            {
                "ingredient": "gin",
                "qty": "3 cl",
                "oz": ""
            },
            {
                "ingredient": "lemon juice",
                "qty": "3 cl",
                "oz": ""
            },
            {
                "ingredient": "cointreau",
                "qty": "3 cl",
                "oz": ""
            },
            {
                "ingredient": "lillet blanc",
                "qty": "3 cl",
                "oz": ""
            },
            {
                "ingredient": "absinthe",
                "qty": "1 dash",
                "oz": ""
            }
        ],
        "glass": "cocktail glass",
        "method": "Shake all ingredients with ice and strain into a cocktail glass",
        "garnish": "cherry",
        "history": "The Corpse Reviver No. 2 is a classic cocktail that was first published in 1930 in the Savoy Cocktail Book. It is said to be a hangover cure.",
        "variants": [],
        "img": ""
    },
    {
        "name": "cosmopolitan",
        "alcoholic": true,
        "ibaFamily": "contemporary classics",
        "family": "the new era",
        "recipe": [
            {
                "ingredient": "vodka",
                "qty": "4 cl",
                "oz": ""
            },
            {
                "ingredient": "cointreau",
                "qty": "1.5 cl",
                "oz": ""
            },
            {
                "ingredient": "lime juice",
                "qty": "1.5 cl",
                "oz": ""
            },
            {
                "ingredient": "cranberry juice",
                "qty": "3 cl",
                "oz": ""
            }
        ],
        "glass": "martini glass",
        "method": "Shake all ingredients with ice and strain into a chilled cocktail glass",
        "garnish": "lime twist",
        "history": "The Cosmopolitan, also known as the Cosmo, is a cocktail that gained popularity in the 1990s. It is often associated with the TV show 'Sex and the City.'",
        "variants": [],
        "img": ""
    },
    {
        "name": "cuba libre",
        "alcoholic": true,
        "ibaFamily": "contemporary classics",
        "family": "",
        "recipe": [
            {
                "ingredient": "white rum",
                "qty": "5 cl",
                "oz": ""
            },
            {
                "ingredient": "lime juice",
                "qty": "12 cl",
                "oz": ""
            },
            {
                "ingredient": "coca-cola",
                "qty": "",
                "oz": "Top up"
            }
        ],
        "glass": "highball glass",
        "method": "Build all ingredients in a highball glass filled with ice",
        "garnish": "lime wedge",
        "history": "The Cuba Libre is a classic cocktail that was created around the time of the Spanish-American War in the late 19th century.",
        "variants": [],
        "img": ""
    },
    {
        "name": "french 75",
        "alcoholic": true,
        "ibaFamily": "contemporary classics",
        "family": "",
        "recipe": [
            {
                "ingredient": "gin",
                "qty": "3 cl",
                "oz": ""
            },
            {
                "ingredient": "lemon juice",
                "qty": "1.5 cl",
                "oz": ""
            },
            {
                "ingredient": "sugar syrup",
                "qty": "2 dashes",
                "oz": ""
            },
            {
                "ingredient": "champagne",
                "qty": "6 cl",
                "oz": ""
            }
        ],
        "glass": "champagne flute",
        "method": "Shake gin, lemon juice, and sugar syrup with ice cubes, strain into a champagne flute, and top with Champagne",
        "garnish": "lemon twist",
        "history": "The French 75 is a classic cocktail that dates back to World War I. It was created at the New York Bar in Paris and was named after the French 75mm field gun.",
        "variants": [],
        "img": ""
    },
    {
        "name": "french connection",
        "alcoholic": true,
        "ibaFamily": "contemporary classics",
        "family": "the new era",
        "recipe": [
            {
                "ingredient": "cognac",
                "qty": "3.5 cl",
                "oz": ""
            },
            {
                "ingredient": "amaretto",
                "qty": "3.5 cl",
                "oz": ""
            }
        ],
        "glass": "old-fashioned glass",
        "method": "Build into old-fashioned glass filled with ice cubes, stir gently",
        "garnish": "none",
        "history": "The French Connection is a classic cocktail that became popular in the 1970s. It is made with equal parts Cognac and Amaretto.",
        "variants": [],
        "img": ""
    },
    {
        "name": "golden dream",
        "alcoholic": true,
        "ibaFamily": "contemporary classics",
        "family": "the new era",
        "recipe": [
            {
                "ingredient": "galliano",
                "qty": "2 cl",
                "oz": ""
            },
            {
                "ingredient": "triple sec",
                "qty": "2 cl",
                "oz": ""
            },
            {
                "ingredient": "orange juice",
                "qty": "2 cl",
                "oz": ""
            },
            {
                "ingredient": "cream",
                "qty": "2 cl",
                "oz": ""
            }
        ],
        "glass": "cocktail glass",
        "method": "Shake all ingredients with ice and strain into a cocktail glass",
        "garnish": "none",
        "history": "The Golden Dream is a cocktail that was popular in the 1960s and 1970s. It is known for its golden color and creamy texture.",
        "variants": [],
        "img": ""
    },
    {
        "name": "grasshopper",
        "alcoholic": true,
        "ibaFamily": "contemporary classics",
        "family": "the new era",
        "recipe": [
            {
                "ingredient": "green creme de menthe",
                "qty": "3 cl",
                "oz": ""
            },
            {
                "ingredient": "white creme de cacao",
                "qty": "3 cl",
                "oz": ""
            },
            {
                "ingredient": "cream",
                "qty": "3 cl",
                "oz": ""
            }
        ],
        "glass": "cocktail glass",
        "method": "Shake all ingredients with ice and strain into a cocktail glass",
        "garnish": "none",
        "history": "The Grasshopper is a classic cocktail that was popular in the 1950s and 1960s. It is known for its green color and minty flavor.",
        "variants": [],
        "img": ""
    },
    {
        "name": "hemingway special",
        "alcoholic": true,
        "ibaFamily": "contemporary classics",
        "family": "",
        "recipe": [
            {
                "ingredient": "white rum",
                "qty": "6 cl",
                "oz": ""
            },
            {
                "ingredient": "grapefruit juice",
                "qty": "4 cl",
                "oz": ""
            },
            {
                "ingredient": "maraschino liqueur",
                "qty": "1.5 cl",
                "oz": ""
            },
            {
                "ingredient": "lime juice",
                "qty": "1.5 cl",
                "oz": ""
            }
        ],
        "glass": "double cocktail glass",
        "method": "Shake all ingredients with ice and strain into a double cocktail glass",
        "garnish": "none",
        "history": "The Hemingway Special, also known as the Hemingway Daiquiri, is a cocktail that was created for the famous author Ernest Hemingway. It is a variation of the classic Daiquiri.",
        "variants": [],
        "img": ""
    },
    {
        "name": "horse's neck",
        "alcoholic": true,
        "ibaFamily": "contemporary classics",
        "family": "long drinks",
        "recipe": [
            {
                "ingredient": "brandy",
                "qty": "4 cl",
                "oz": ""
            },
            {
                "ingredient": "ginger ale",
                "qty": "",
                "oz": "Top up"
            },
            {
                "ingredient": "angostura bitters",
                "qty": "2 dashes",
                "oz": ""
            }
        ],
        "glass": "highball glass",
        "method": "Pour brandy and ginger ale into a highball glass filled with ice cubes, add dashes of Angostura bitters",
        "garnish": "lemon twist",
        "history": "The Horse's Neck is a classic cocktail that dates back to the late 19th century. It is named after the long, curling peel of lemon that hangs over the edge of the glass.",
        "variants": [],
        "img": ""
    },
    {
        "name": "irish coffee",
        "alcoholic": true,
        "ibaFamily": "contemporary classics",
        "family": "the new era",
        "recipe": [
            {
                "ingredient": "irish whiskey",
                "qty": "4 cl",
                "oz": ""
            },
            {
                "ingredient": "hot coffee",
                "qty": "",
                "oz": "Fill"
            },
            {
                "ingredient": "sugar",
                "qty": "1 cube",
                "oz": ""
            },
            {
                "ingredient": "fresh cream",
                "qty": "Float",
                "oz": ""
            }
        ],
        "glass": "irish coffee cup",
        "method": "Warm a glass, add the whiskey, and then fill to within 1 cm of the brim with hot coffee. Stir in the sugar until dissolved. Float the cream on top",
        "garnish": "none",
        "history": "The Irish Coffee is a classic cocktail that was created in the 1940s. It was originally made to warm up travelers at an airport in Ireland.",
        "variants": [],
        "img": ""
    },
    {
        "name": "kir",
        "alcoholic": true,
        "ibaFamily": "contemporary classics",
        "family": "the new era",
        "recipe": [
            {
                "ingredient": "creme de cassis",
                "qty": "9 cl",
                "oz": ""
            },
            {
                "ingredient": "white wine",
                "qty": "",
                "oz": "Top up"
            }
        ],
        "glass": "wine glass",
        "method": "Add the Creme de Cassis to the bottom of the glass, and then top up with white wine",
        "garnish": "none",
        "history": "The Kir is a classic French cocktail that was named after Felix Kir, a former mayor of Dijon. It is made with white wine and Creme de Cassis.",
        "variants": [],
        "img": ""
    },
    {
        "name": "long island iced tea",
        "alcoholic": true,
        "ibaFamily": "contemporary classics",
        "family": "long drinks",
        "recipe": [
            {
                "ingredient": "vodka",
                "qty": "1.5 cl",
                "oz": ""
            },
            {
                "ingredient": "tequila",
                "qty": "1.5 cl",
                "oz": ""
            },
            {
                "ingredient": "white rum",
                "qty": "1.5 cl",
                "oz": ""
            },
            {
                "ingredient": "triple sec",
                "qty": "1.5 cl",
                "oz": ""
            },
            {
                "ingredient": "gin",
                "qty": "1.5 cl",
                "oz": ""
            },
            {
                "ingredient": "lemon juice",
                "qty": "2.5 cl",
                "oz": ""
            },
            {
                "ingredient": "sugar syrup",
                "qty": "1.5 cl",
                "oz": ""
            },
            {
                "ingredient": "coca-cola",
                "qty": "",
                "oz": "Top up"
            }
        ],
        "glass": "highball glass",
        "method": "Add all ingredients into highball glass filled with ice. Stir gently and garnish with lemon twist",
        "garnish": "lemon twist",
        "history": "The Long Island Iced Tea is a popular cocktail that originated in the United States in the 1970s. Despite its name, it doesn't actually contain tea.",
        "variants": [],
        "img": ""
    },
    {
        "name": "mai-tai",
        "alcoholic": true,
        "ibaFamily": "contemporary classics",
        "family": "",
        "recipe": [
            {
                "ingredient": "white rum",
                "qty": "4 cl",
                "oz": ""
            },
            {
                "ingredient": "dark rum",
                "qty": "2 cl",
                "oz": ""
            },
            {
                "ingredient": "orange curacao",
                "qty": "1.5 cl",
                "oz": ""
            },
            {
                "ingredient": "orgeat syrup",
                "qty": "1 cl",
                "oz": ""
            },
            {
                "ingredient": "lime juice",
                "qty": "1.5 cl",
                "oz": ""
            }
        ],
        "glass": "old-fashioned glass",
        "method": "Shake all ingredients with ice and strain into an old-fashioned glass. Garnish with lime shell and mint sprig",
        "garnish": "lime shell, mint sprig",
        "history": "The Mai-Tai is a classic tiki cocktail that was created in the 1940s. It is known for its tropical flavors and rum base.",
        "variants": [],
        "img": ""
    },
    {
        "name": "margarita",
        "alcoholic": true,
        "ibaFamily": "contemporary classics",
        "family": "the new era",
        "recipe": [
            {
                "ingredient": "tequila",
                "qty": "5 cl",
                "oz": ""
            },
            {
                "ingredient": "triple sec",
                "qty": "2 cl",
                "oz": ""
            },
            {
                "ingredient": "lime juice",
                "qty": "1.5 cl",
                "oz": ""
            }
        ],
        "glass": "margarita glass",
        "method": "Shake all ingredients with ice and strain into a cocktail glass rimmed with salt",
        "garnish": "lime wheel",
        "history": "The Margarita is a classic cocktail that originated in Mexico. It is made with tequila, triple sec, and lime juice.",
        "variants": [],
        "img": ""
    },
    {
        "name": "mimosa",
        "alcoholic": true,
        "ibaFamily": "contemporary classics",
        "family": "champagne cocktails",
        "recipe": [
            {
                "ingredient": "champagne",
                "qty": "",
                "oz": "Equal parts"
            },
            {
                "ingredient": "orange juice",
                "qty": "",
                "oz": "Equal parts"
            }
        ],
        "glass": "champagne flute",
        "method": "Pour equal parts of Champagne and orange juice into a chilled champagne flute",
        "garnish": "orange twist",
        "history": "The Mimosa is a classic brunch cocktail that is made with equal parts Champagne and orange juice. It is named after the yellow flowers of the mimosa plant.",
        "variants": [],
        "img": ""
    },
    {
        "name": "mint julep",
        "alcoholic": true,
        "ibaFamily": "contemporary classics",
        "family": "the new era",
        "recipe": [
            {
                "ingredient": "bourbon",
                "qty": "6 cl",
                "oz": ""
            },
            {
                "ingredient": "sugar",
                "qty": "4 cl",
                "oz": ""
            },
            {
                "ingredient": "mint leaves",
                "qty": "8",
                "oz": ""
            }
        ],
        "glass": "mint julep cup",
        "method": "Muddle the mint leaves and sugar with a little water in a mint julep cup. Fill the cup with crushed ice and add the bourbon. Stir until the cup is frosted. Garnish with a mint sprig",
        "garnish": "mint sprig",
        "history": "The Mint Julep is a classic cocktail that is associated with the American South, particularly the Kentucky Derby. It is made with bourbon, sugar, and mint.",
        "variants": [],
        "img": ""
    },
    {
        "name": "mojito",
        "alcoholic": true,
        "ibaFamily": "contemporary classics",
        "family": "long drinks",
        "recipe": [
            {
                "ingredient": "white rum",
                "qty": "4 cl",
                "oz": ""
            },
            {
                "ingredient": "lime juice",
                "qty": "3 cl",
                "oz": ""
            },
            {
                "ingredient": "sugar",
                "qty": "2 teaspoons",
                "oz": ""
            },
            {
                "ingredient": "mint leaves",
                "qty": "6",
                "oz": ""
            },
            {
                "ingredient": "soda water",
                "qty": "",
                "oz": "Top up"
            }
        ],
        "glass": "collins glass",
        "method": "Muddle the mint leaves and sugar with a little soda water in a Collins glass. Fill the glass with ice, add rum and lime juice. Stir gently and top up with soda water. Garnish with a mint sprig",
        "garnish": "mint sprig",
        "history": "The Mojito is a classic cocktail that originated in Cuba. It is made with rum, lime juice, sugar, mint, and soda water.",
        "variants": [],
        "img": ""
    },
    {
        "name": "moscow mule",
        "alcoholic": true,
        "ibaFamily": "contemporary classics",
        "family": "long drinks",
        "recipe": [
            {
                "ingredient": "vodka",
                "qty": "4.5 cl",
                "oz": ""
            },
            {
                "ingredient": "lime juice",
                "qty": "1.5 cl",
                "oz": ""
            },
            {
                "ingredient": "ginger beer",
                "qty": "",
                "oz": "Top up"
            }
        ],
        "glass": "mule mug",
        "method": "Combine vodka and lime juice in a mule mug filled with ice. Top up with ginger beer. Stir gently and garnish with a lime wheel",
        "garnish": "lime wheel",
        "history": "The Moscow Mule is a classic cocktail that was popularized in the United States in the 1940s. It is made with vodka, lime juice, and ginger beer.",
        "variants": [],
        "img": ""
    },
    {
        "name": "piña colada",
        "alcoholic": true,
        "ibaFamily": "contemporary classics",
        "family": "new era drinks",
        "recipe": [
            {
                "ingredient": "white rum",
                "qty": "3 cl",
                "oz": ""
            },
            {
                "ingredient": "coconut cream",
                "qty": "9 cl",
                "oz": ""
            },
            {
                "ingredient": "pineapple juice",
                "qty": "9 cl",
                "oz": ""
            }
        ],
        "glass": "hurricane glass",
        "method": "Blend all the ingredients with ice in a electric blender, pour into a large cocktail glass. Garnish with pineapple wedge and a cocktail cherry",
        "garnish": "pineapple wedge, cocktail cherry",
        "history": "The Piña Colada is a classic tropical cocktail that originated in Puerto Rico. It is made with rum, coconut cream, and pineapple juice.",
        "variants": [],
        "img": ""
    },
    {
        "name": "pisco sour",
        "alcoholic": true,
        "ibaFamily": "contemporary classics",
        "family": "",
        "recipe": [
            {
                "ingredient": "pisco",
                "qty": "6 cl",
                "oz": ""
            },
            {
                "ingredient": "lime juice",
                "qty": "2 cl",
                "oz": ""
            },
            {
                "ingredient": "sugar syrup",
                "qty": "1 cl",
                "oz": ""
            },
            {
                "ingredient": "egg white",
                "qty": "1",
                "oz": ""
            }
        ],
        "glass": "old-fashioned glass",
        "method": "Shake all ingredients with ice and strain into an old-fashioned glass. Garnish with a few drops of Angostura bitters",
        "garnish": "angostura bitters",
        "history": "The Pisco Sour is a classic cocktail from South America, particularly Peru and Chile. It is made with pisco, lime juice, sugar syrup, and egg white.",
        "variants": [],
        "img": ""
    },
    {
        "name": "sea breeze",
        "alcoholic": true,
        "ibaFamily": "contemporary classics",
        "family": "new era drinks",
        "recipe": [
            {
                "ingredient": "vodka",
                "qty": "4 cl",
                "oz": ""
            },
            {
                "ingredient": "cranberry juice",
                "qty": "12 cl",
                "oz": ""
            },
            {
                "ingredient": "grapefruit juice",
                "qty": "3 cl",
                "oz": ""
            }
        ],
        "glass": "highball glass",
        "method": "Build all ingredients in a highball glass filled with ice. Stir gently and garnish with a lime wheel",
        "garnish": "lime wheel",
        "history": "The Sea Breeze is a classic cocktail that became popular in the 1970s. It is made with vodka, cranberry juice, and grapefruit juice.",
        "variants": [],
        "img": ""
    },
    {
        "name": "sex on the beach",
        "alcoholic": true,
        "ibaFamily": "contemporary classics",
        "family": "new era drinks",
        "recipe": [
            {
                "ingredient": "vodka",
                "qty": "4 cl",
                "oz": ""
            },
            {
                "ingredient": "peach schnapps",
                "qty": "2 cl",
                "oz": ""
            },
            {
                "ingredient": "cranberry juice",
                "qty": "4 cl",
                "oz": ""
            },
            {
                "ingredient": "orange juice",
                "qty": "4 cl",
                "oz": ""
            }
        ],
        "glass": "highball glass",
        "method": "Build all ingredients in a highball glass filled with ice. Stir gently and garnish with an orange slice",
        "garnish": "orange slice",
        "history": "The Sex On the Beach is a popular cocktail that originated in the United States in the 1980s. It is made with vodka, peach schnapps, cranberry juice, and orange juice.",
        "variants": [],
        "img": ""
    },
    {
        "name": "singapore sling",
        "alcoholic": true,
        "ibaFamily": "contemporary classics",
        "family": "",
        "recipe": [
            {
                "ingredient": "gin",
                "qty": "3 cl",
                "oz": ""
            },
            {
                "ingredient": "cherry liqueur",
                "qty": "1.5 cl",
                "oz": ""
            },
            {
                "ingredient": "cointreau",
                "qty": "0.75 cl",
                "oz": ""
            },
            {
                "ingredient": "benedictine",
                "qty": "0.75 cl",
                "oz": ""
            },
            {
                "ingredient": "pineapple juice",
                "qty": "12 cl",
                "oz": ""
            },
            {
                "ingredient": "lime juice",
                "qty": "1.5 cl",
                "oz": ""
            },
            {
                "ingredient": "grenadine",
                "qty": "1 cl",
                "oz": ""
            },
            {
                "ingredient": "angostura bitters",
                "qty": "1 dash",
                "oz": ""
            }
        ],
        "glass": "hurricane glass",
        "method": "Shake all ingredients with ice and strain into a hurricane glass filled with ice. Garnish with a pineapple wedge and a cocktail cherry",
        "garnish": "pineapple wedge, cocktail cherry",
        "history": "The Singapore Sling is a classic cocktail that was created in Singapore in the early 20th century. It is made with gin, cherry liqueur, Cointreau, Benedictine, pineapple juice, lime juice, grenadine, and Angostura bitters.",
        "variants": [],
        "img": ""
    },
    {
        "name": "tequila sunrise",
        "alcoholic": true,
        "ibaFamily": "contemporary classics",
        "family": "",
        "recipe": [
            {
                "ingredient": "tequila",
                "qty": "4.5 cl",
                "oz": ""
            },
            {
                "ingredient": "orange juice",
                "qty": "9 cl",
                "oz": ""
            },
            {
                "ingredient": "grenadine",
                "qty": "1.5 cl",
                "oz": ""
            }
        ],
        "glass": "highball glass",
        "method": "Pour tequila and orange juice into a highball glass filled with ice. Stir gently and slowly pour the grenadine over the back of a bar spoon, creating a sunrise effect. Garnish with an orange slice and a cherry",
        "garnish": "orange slice, cherry",
        "history": "The Tequila Sunrise is a classic cocktail that originated in the United States in the 1970s. It is made with tequila, orange juice, and grenadine.",
        "variants": [],
        "img": ""
    },
    {
        "name": "vesper",
        "alcoholic": true,
        "ibaFamily": "contemporary classics",
        "family": "the new era",
        "recipe": [
            {
                "ingredient": "gin",
                "qty": "6 cl",
                "oz": ""
            },
            {
                "ingredient": "vodka",
                "qty": "1.5 cl",
                "oz": ""
            },
            {
                "ingredient": "lillet blanc",
                "qty": "0.75 cl",
                "oz": ""
            }
        ],
        "glass": "martini glass",
        "method": "Shake all ingredients with ice and strain into a chilled martini glass. Garnish with a lemon twist",
        "garnish": "lemon twist",
        "history": "The Vesper is a classic cocktail that was popularized by James Bond in the novel 'Casino Royale'. It is made with gin, vodka, and Lillet Blanc.",
        "variants": [],
        "img": ""
    },
    {
        "name": "zombie",
        "alcoholic": true,
        "ibaFamily": "contemporary classics",
        "family": "",
        "recipe": [
            {
                "ingredient": "white rum",
                "qty": "2.5 cl",
                "oz": ""
            },
            {
                "ingredient": "gold rum",
                "qty": "2.5 cl",
                "oz": ""
            },
            {
                "ingredient": "dark rum",
                "qty": "1 cl",
                "oz": ""
            },
            {
                "ingredient": "apricot brandy",
                "qty": "1.5 cl",
                "oz": ""
            },
            {
                "ingredient": "lime juice",
                "qty": "1.5 cl",
                "oz": ""
            },
            {
                "ingredient": "pineapple juice",
                "qty": "6 cl",
                "oz": ""
            },
            {
                "ingredient": "passion fruit syrup",
                "qty": "1 cl",
                "oz": ""
            },
            {
                "ingredient": "grenadine",
                "qty": "1 cl",
                "oz": ""
            }
        ],
        "glass": "collins glass",
        "method": "Shake all ingredients with ice and strain into a Collins glass filled with crushed ice. Garnish with a mint sprig and a cherry",
        "garnish": "mint sprig, cherry",
        "history": "The Zombie is a classic cocktail that was created by Donn Beach in the 1930s. It is made with multiple types of rum, apricot brandy, lime juice, pineapple juice, passion fruit syrup, and grenadine.",
        "variants": [],
        "img": ""
    },
    {
        "name": "trinidad sour",
        "alcoholic": true,
        "ibaFamily": "new era drinks",
        "family": "",
        "recipe": [
          {
            "ingredient": "angostura bitters",
            "qty": "1.5 oz",
            "oz": ""
          },
          {
            "ingredient": "orgeat syrup",
            "qty": "1 oz",
            "oz": ""
          },
          {
            "ingredient": "rye whiskey",
            "qty": "1 oz",
            "oz": ""
          },
          {
            "ingredient": "fresh lemon juice",
            "qty": "0.75 oz",
            "oz": ""
          }
        ],
        "glass": "coupette glass",
        "method": "Shake all ingredients with ice and strain into a chilled coupette glass.",
        "garnish": "lemon twist",
        "history": "The Trinidad Sour is a modern classic cocktail created by Giuseppe Gonzalez. It is made with Angostura bitters, orgeat syrup, rye whiskey, and fresh lemon juice.",
        "variants": [],
        "img": ""
      },
      {
        "name": "barracuda",
        "alcoholic": true,
        "ibaFamily": "new era drinks",
        "family": "sparkling cocktails",
        "recipe": [
          {
            "ingredient": "gold rum",
            "qty": "4.5 cl",
            "oz": ""
          },
          {
            "ingredient": "galliano",
            "qty": "1.5 cl",
            "oz": ""
          },
          {
            "ingredient": "pineapple juice",
            "qty": "6 cl",
            "oz": ""
          },
          {
            "ingredient": "lime juice",
            "qty": "1.5 cl",
            "oz": ""
          },
          {
            "ingredient": "prosecco",
            "qty": "Top up",
            "oz": ""
          }
        ],
        "glass": "hurricane glass",
        "method": "Shake all ingredients except Prosecco with ice and strain into a hurricane glass filled with ice. Top up with Prosecco.",
        "garnish": "pineapple leaf, cherry",
        "history": "The Barracuda is a sparkling cocktail that was created in the Caribbean. It is made with gold rum, Galliano, pineapple juice, lime juice, and Prosecco.",
        "variants": [],
        "img": ""
      },
      {
        "name": "bee’s knees",
        "alcoholic": true,
        "ibaFamily": "new era drinks",
        "family": "the prohibition era",
        "recipe": [
          {
            "ingredient": "gin",
            "qty": "6 cl",
            "oz": ""
          },
          {
            "ingredient": "lemon juice",
            "qty": "2.5 cl",
            "oz": ""
          },
          {
            "ingredient": "honey syrup",
            "qty": "1.5 cl",
            "oz": ""
          }
        ],
        "glass": "coupe glass",
        "method": "Shake all ingredients with ice and strain into a chilled coupe glass.",
        "garnish": "lemon twist",
        "history": "The Bee's Knees is a classic cocktail that originated during the Prohibition era in the United States. It is made with gin, lemon juice, and honey syrup.",
        "variants": [],
        "img": ""
      },
      {
        "name": "bramble",
        "alcoholic": true,
        "ibaFamily": "new era drinks",
        "family": "modern classics",
        "recipe": [
          {
            "ingredient": "gin",
            "qty": "4 cl",
            "oz": ""
          },
          {
            "ingredient": "lemon juice",
            "qty": "1.5 cl",
            "oz": ""
          },
          {
            "ingredient": "simple syrup",
            "qty": "1 cl",
            "oz": ""
          },
          {
            "ingredient": "creme de mure",
            "qty": "1.5 cl",
            "oz": ""
          }
        ],
        "glass": "old fashioned glass",
        "method": "Build over crushed ice. Stir gently and garnish with a blackberry and a slice of lemon.",
        "garnish": "blackberry, lemon slice",
        "history": "The Bramble is a modern classic cocktail created by Dick Bradsell in the 1980s. It is made with gin, lemon juice, simple syrup, and creme de mure.",
        "variants": [],
        "img": ""
      },
      {
        "name": "canchanchara",
        "alcoholic": true,
        "ibaFamily": "new era drinks",
        "family": "",
        "recipe": [
          {
            "ingredient": "white rum",
            "qty": "6 cl",
            "oz": ""
          },
          {
            "ingredient": "lime juice",
            "qty": "2.5 cl",
            "oz": ""
          },
          {
            "ingredient": "honey",
            "qty": "2 tsp",
            "oz": ""
          },
          {
            "ingredient": "water",
            "qty": "1 tsp",
            "oz": ""
          }
        ],
        "glass": "rocks glass",
        "method": "Mix honey and water in a rocks glass until the honey is dissolved. Add rum and lime juice. Stir well.",
        "garnish": "lime wheel",
        "history": "The Canchanchara is a traditional Cuban cocktail that dates back to the 19th century. It is made with white rum, lime juice, honey, and water.",
        "variants": [],
        "img": ""
      },
      {
        "name": "dark ’n’ stormy",
        "alcoholic": true,
        "ibaFamily": "new era drinks",
        "family": "",
        "recipe": [
          {
            "ingredient": "dark rum",
            "qty": "6 cl",
            "oz": ""
          },
          {
            "ingredient": "ginger beer",
            "qty": "10 cl",
            "oz": ""
          },
          {
            "ingredient": "lime wedge",
            "qty": "",
            "oz": ""
          }
        ],
        "glass": "highball glass",
        "method": "Build the ingredients in a highball glass filled with ice. Stir gently and garnish with a lime wedge.",
        "garnish": "lime wedge",
        "history": "The Dark 'n' Stormy is a classic cocktail that originated in Bermuda. It is made with dark rum, ginger beer, and a lime wedge.",
        "variants": [],
        "img": ""
      },
      {
        "name": "espresso martini",
        "alcoholic": true,
        "ibaFamily": "new era drinks",
        "family": "the moderns",
        "recipe": [
          {
            "ingredient": "vodka",
            "qty": "5 cl",
            "oz": ""
          },
          {
            "ingredient": "coffee liqueur",
            "qty": "1 cl",
            "oz": ""
          },
          {
            "ingredient": "sugar syrup",
            "qty": "1 cl",
            "oz": ""
          },
          {
            "ingredient": "espresso",
            "qty": "1 shot",
            "oz": ""
          }
        ],
        "glass": "cocktail glass",
        "method": "Shake all ingredients with ice and strain into a chilled cocktail glass.",
        "garnish": "3 coffee beans",
        "history": "The Espresso Martini is a modern classic cocktail that was created by Dick Bradsell in the 1980s. It is made with vodka, coffee liqueur, sugar syrup, and espresso.",
        "variants": [],
        "img": ""
      },
      {
        "name": "fernandito",
        "alcoholic": true,
        "ibaFamily": "new era drinks",
        "family": "",
        "recipe": [
          {
            "ingredient": "white rum",
            "qty": "6 cl",
            "oz": ""
          },
          {
            "ingredient": "lime juice",
            "qty": "3 cl",
            "oz": ""
          },
          {
            "ingredient": "sugar syrup",
            "qty": "2 cl",
            "oz": ""
          },
          {
            "ingredient": "club soda",
            "qty": "6 cl",
            "oz": ""
          }
        ],
        "glass": "highball glass",
        "method": "Build the ingredients in a highball glass filled with ice. Stir gently and garnish with a lime wheel.",
        "garnish": "lime wheel",
        "history": "The Fernandito is a refreshing cocktail that originated in Cuba. It is made with white rum, lime juice, sugar syrup, and club soda.",
        "variants": [],
        "img": ""
      },
      {
        "name": "french martini",
        "alcoholic": true,
        "ibaFamily": "new era drinks",
        "family": "the moderns",
        "recipe": [
          {
            "ingredient": "vodka",
            "qty": "4.5 cl",
            "oz": ""
          },
          {
            "ingredient": "raspberry liqueur",
            "qty": "1.5 cl",
            "oz": ""
          },
          {
            "ingredient": "pineapple juice",
            "qty": "1.5 cl",
            "oz": ""
          }
        ],
        "glass": "cocktail glass",
        "method": "Shake all ingredients with ice and strain into a chilled cocktail glass.",
        "garnish": "raspberry",
        "history": "The French Martini is a modern classic cocktail that was created in the 1980s. It is made with vodka, raspberry liqueur, and pineapple juice.",
        "variants": [],
        "img": ""
      },
      {
        "name": "illegal",
        "alcoholic": true,
        "ibaFamily": "new era drinks",
        "family": "",
        "recipe": [
          {
            "ingredient": "mezcal",
            "qty": "5 cl",
            "oz": ""
          },
          {
            "ingredient": "apricot brandy",
            "qty": "2 cl",
            "oz": ""
          },
          {
            "ingredient": "lime juice",
            "qty": "1 cl",
            "oz": ""
          },
          {
            "ingredient": "agave syrup",
            "qty": "1 cl",
            "oz": ""
          }
        ],
        "glass": "rocks glass",
        "method": "Shake all ingredients with ice and strain into a rocks glass filled with ice.",
        "garnish": "lime wheel",
        "history": "The Illegal cocktail is a modern creation that features mezcal, apricot brandy, lime juice, and agave syrup.",
        "variants": [],
        "img": ""
      },
      {
        "name": "lemon drop martini",
        "alcoholic": true,
        "ibaFamily": "new era drinks",
        "family": "",
        "recipe": [
          {
            "ingredient": "vodka",
            "qty": "4 cl",
            "oz": ""
          },
          {
            "ingredient": "triple sec",
            "qty": "2 cl",
            "oz": ""
          },
          {
            "ingredient": "lemon juice",
            "qty": "1.5 cl",
            "oz": ""
          },
          {
            "ingredient": "simple syrup",
            "qty": "1.5 cl",
            "oz": ""
          }
        ],
        "glass": "cocktail glass",
        "method": "Shake all ingredients with ice and strain into a chilled cocktail glass rimmed with sugar.",
        "garnish": "lemon twist",
        "history": "The Lemon Drop Martini is a sweet and sour cocktail made with vodka, triple sec, lemon juice, and simple syrup. It is often garnished with a lemon twist and served in a sugar-rimmed glass.",
        "variants": [],
        "img": ""
      },
      {
        "name": "naked and famous",
        "alcoholic": true,
        "ibaFamily": "new era drinks",
        "family": "",
        "recipe": [
          {
            "ingredient": "mezcal",
            "qty": "2.5 cl",
            "oz": ""
          },
          {
            "ingredient": "yellow chartreuse",
            "qty": "2.5 cl",
            "oz": ""
          },
          {
            "ingredient": "aperol",
            "qty": "2.5 cl",
            "oz": ""
          },
          {
            "ingredient": "lime juice",
            "qty": "2.5 cl",
            "oz": ""
          }
        ],
        "glass": "coupette glass",
        "method": "Shake all ingredients with ice and strain into a chilled coupette glass.",
        "garnish": "lime twist",
        "history": "The Naked and Famous is a modern cocktail that was created by bartender Joaquín Simó. It is made with mezcal, yellow Chartreuse, Aperol, and lime juice.",
        "variants": [],
        "img": ""
      },
      {
        "name": "new york sour",
        "alcoholic": true,
        "ibaFamily": "new era drinks",
        "family": "",
        "recipe": [
          {
            "ingredient": "bourbon whiskey",
            "qty": "6 cl",
            "oz": ""
          },
          {
            "ingredient": "lemon juice",
            "qty": "2.5 cl",
            "oz": ""
          },
          {
            "ingredient": "simple syrup",
            "qty": "1.5 cl",
            "oz": ""
          },
          {
            "ingredient": "red wine",
            "qty": "Float",
            "oz": ""
          }
        ],
        "glass": "rocks glass",
        "method": "Shake bourbon, lemon juice, and simple syrup with ice. Strain into a rocks glass filled with ice. Float red wine on top by pouring it gently over the back of a spoon.",
        "garnish": "lemon wheel, cherry",
        "history": "The New York Sour is a classic cocktail that is a variation of the Whiskey Sour. It is made with bourbon whiskey, lemon juice, simple syrup, and a float of red wine.",
        "variants": [],
        "img": ""
      },
      {
        "name": "old cuban",
        "alcoholic": true,
        "ibaFamily": "new era drinks",
        "family": "",
        "recipe": [
          {
            "ingredient": "aged rum",
            "qty": "4.5 cl",
            "oz": ""
          },
          {
            "ingredient": "fresh lime juice",
            "qty": "2.5 cl",
            "oz": ""
          },
          {
            "ingredient": "simple syrup",
            "qty": "2 cl",
            "oz": ""
          },
          {
            "ingredient": "angostura bitters",
            "qty": "2 dashes",
            "oz": ""
          },
          {
            "ingredient": "champagne",
            "qty": "Top up",
            "oz": ""
          },
          {
            "ingredient": "mint leaves",
            "qty": "6",
            "oz": ""
          }
        ],
        "glass": "coupette glass",
        "method": "Muddle mint leaves with simple syrup in a mixing glass. Add rum, lime juice, and bitters. Fill the mixing glass with ice and stir until well-chilled. Strain into a chilled coupette glass and top up with champagne.",
        "garnish": "mint sprig",
        "history": "The Old Cuban is a modern classic cocktail that was created by mixologist Audrey Saunders. It is made with aged rum, fresh lime juice, simple syrup, Angostura bitters, champagne, and mint leaves.",
        "variants": [],
        "img": ""
      },
      {
        "name": "paloma",
        "alcoholic": true,
        "ibaFamily": "new era drinks",
        "family": "",
        "recipe": [
          {
            "ingredient": "tequila",
            "qty": "5 cl",
            "oz": ""
          },
          {
            "ingredient": "grapefruit soda",
            "qty": "10 cl",
            "oz": ""
          },
          {
            "ingredient": "lime juice",
            "qty": "1 cl",
            "oz": ""
          },
          {
            "ingredient": "salt",
            "qty": "Pinch",
            "oz": ""
          }
        ],
        "glass": "highball glass",
        "method": "Rim the highball glass with salt. Fill the glass with ice. Add tequila, lime juice, and grapefruit soda. Stir gently.",
        "garnish": "grapefruit wedge",
        "history": "The Paloma is a popular Mexican cocktail that is made with tequila, grapefruit soda, lime juice, and a pinch of salt. It is a refreshing and citrusy drink.",
        "variants": [],
        "img": ""
      },
      {
        "name": "paper plane",
        "alcoholic": true,
        "ibaFamily": "new era drinks",
        "family": "",
        "recipe": [
          {
            "ingredient": "bourbon whiskey",
            "qty": "3 cl",
            "oz": ""
          },
          {
            "ingredient": "aperol",
            "qty": "3 cl",
            "oz": ""
          },
          {
            "ingredient": "amaretto",
            "qty": "3 cl",
            "oz": ""
          },
          {
            "ingredient": "lemon juice",
            "qty": "3 cl",
            "oz": ""
          }
        ],
        "glass": "coupette glass",
        "method": "Shake all ingredients with ice and strain into a chilled coupette glass.",
        "garnish": "lemon twist",
        "history": "The Paper Plane is a modern classic cocktail that was created by bartender Sam Ross. It is made with bourbon whiskey, Aperol, amaretto, and lemon juice.",
        "variants": [],
        "img": ""
      },
      {
        "name": "penicillin",
        "alcoholic": true,
        "ibaFamily": "new era drinks",
        "family": "",
        "recipe": [
          {
            "ingredient": "blended scotch whisky",
            "qty": "6 cl",
            "oz": ""
          },
          {
            "ingredient": "fresh lemon juice",
            "qty": "2.5 cl",
            "oz": ""
          },
          {
            "ingredient": "honey ginger syrup",
            "qty": "2.5 cl",
            "oz": ""
          },
          {
            "ingredient": "islay single malt scotch whisky",
            "qty": "Float",
            "oz": ""
          },
          {
            "ingredient": "candied ginger",
            "qty": "Garnish",
            "oz": ""
          }
        ],
        "glass": "rocks glass",
        "method": "Shake blended Scotch whisky, fresh lemon juice, and honey ginger syrup with ice. Strain into a rocks glass filled with ice. Float Islay single malt Scotch whisky on top. Garnish with candied ginger.",
        "garnish": "candied ginger",
        "history": "The Penicillin is a modern classic cocktail that was created by bartender Sam Ross. It is made with blended Scotch whisky, fresh lemon juice, honey ginger syrup, and a float of Islay single malt Scotch whisky. The cocktail is named after the antibiotic drug due to its medicinal qualities.",
        "variants": [],
        "img": ""
      },
      {
        "name": "russian spring punch",
        "alcoholic": true,
        "ibaFamily": "new era drinks",
        "family": "",
        "recipe": [
          {
            "ingredient": "vodka",
            "qty": "2 cl",
            "oz": ""
          },
          {
            "ingredient": "lemon juice",
            "qty": "2 cl",
            "oz": ""
          },
          {
            "ingredient": "crème de cassis",
            "qty": "1 cl",
            "oz": ""
          },
          {
            "ingredient": "sugar syrup",
            "qty": "1 cl",
            "oz": ""
          },
          {
            "ingredient": "champagne",
            "qty": "Top up",
            "oz": ""
          }
        ],
        "glass": "collins glass",
        "method": "Shake vodka, lemon juice, crème de cassis, and sugar syrup with ice. Strain into a Collins glass filled with ice. Top up with champagne.",
        "garnish": "lemon twist",
        "history": "The Russian Spring Punch is a sparkling cocktail that features vodka, lemon juice, crème de cassis, sugar syrup, and champagne. It is a refreshing and elegant drink.",
        "variants": [],
        "img": ""
      },
      {
        "name": "southside",
        "alcoholic": true,
        "ibaFamily": "new era drinks",
        "family": "",
        "recipe": [
          {
            "ingredient": "gin",
            "qty": "6 cl",
            "oz": ""
          },
          {
            "ingredient": "lime juice",
            "qty": "2.5 cl",
            "oz": ""
          },
          {
            "ingredient": "sugar syrup",
            "qty": "1.5 cl",
            "oz": ""
          },
          {
            "ingredient": "mint leaves",
            "qty": "6",
            "oz": ""
          }
        ],
        "glass": "coupette glass",
        "method": "Muddle mint leaves with sugar syrup in a shaker. Add gin, lime juice, and ice. Shake well and strain into a chilled coupette glass.",
        "garnish": "mint sprig",
        "history": "The Southside is a classic cocktail that is believed to have originated in Chicago during the Prohibition era. It is made with gin, lime juice, sugar syrup, and mint leaves. The cocktail is similar to a mojito but uses gin instead of rum.",
        "variants": [],
        "img": ""
      },
      {
        "name": "spicy fifty",
        "alcoholic": true,
        "ibaFamily": "new era drinks",
        "family": "",
        "recipe": [
          {
            "ingredient": "vodka",
            "qty": "4 cl",
            "oz": ""
          },
          {
            "ingredient": "passion fruit purée",
            "qty": "2 cl",
            "oz": ""
          },
          {
            "ingredient": "lime juice",
            "qty": "2 cl",
            "oz": ""
          },
          {
            "ingredient": "sugar syrup",
            "qty": "2 cl",
            "oz": ""
          },
          {
            "ingredient": "fresh chili pepper",
            "qty": "1 slice",
            "oz": ""
          }
        ],
        "glass": "rocks glass",
        "method": "Muddle fresh chili pepper in the bottom of a shaker. Add vodka, passion fruit purée, lime juice, and sugar syrup. Shake well with ice and strain into a rocks glass filled with ice.",
        "garnish": "chili pepper",
        "history": "The Spicy Fifty is a cocktail that combines the flavors of vodka, passion fruit purée, lime juice, sugar syrup, and fresh chili pepper. It is a spicy and tropical drink with a kick.",
        "variants": [],
        "img": ""
      },
      {
        "name": "spritz",
        "alcoholic": true,
        "ibaFamily": "new era drinks",
        "family": "",
        "recipe": [
          {
            "ingredient": "prosecco",
            "qty": "6 cl",
            "oz": ""
          },
          {
            "ingredient": "aperol",
            "qty": "4 cl",
            "oz": ""
          },
          {
            "ingredient": "soda water",
            "qty": "Splash",
            "oz": ""
          }
        ],
        "glass": "wine glass",
        "method": "Fill a wine glass with ice. Add Prosecco and Aperol. Top up with a splash of soda water. Stir gently.",
        "garnish": "orange slice",
        "history": "The Spritz is a popular Italian aperitivo cocktail. It is made with Prosecco, Aperol (or sometimes Campari), and a splash of soda water. The cocktail is typically served over ice and garnished with an orange slice.",
        "variants": [],
        "img": ""
      },
      {
        "name": "suffering bastard",
        "alcoholic": true,
        "ibaFamily": "new era drinks",
        "family": "",
        "recipe": [
          {
            "ingredient": "gin",
            "qty": "3 cl",
            "oz": ""
          },
          {
            "ingredient": "bourbon whiskey",
            "qty": "3 cl",
            "oz": ""
          },
          {
            "ingredient": "fresh lime juice",
            "qty": "1.5 cl",
            "oz": ""
          },
          {
            "ingredient": "ginger beer",
            "qty": "2.5 cl",
            "oz": ""
          },
          {
            "ingredient": "angostura bitters",
            "qty": "Dash",
            "oz": ""
          },
          {
            "ingredient": "mint leaves",
            "qty": "6",
            "oz": ""
          }
        ],
        "glass": "collins glass",
        "method": "Muddle mint leaves with fresh lime juice in a shaker. Add gin, bourbon whiskey, and ice. Shake well and strain into a Collins glass filled with ice. Top up with ginger beer and a dash of Angostura bitters.",
        "garnish": "mint sprig, lime wheel",
        "history": "The Suffering Bastard is a classic cocktail that was created in Egypt during World War II. It is made with gin, bourbon whiskey, fresh lime juice, ginger beer, Angostura bitters, and mint leaves. The cocktail is known for its refreshing and zesty flavor.",
        "variants": [],
        "img": ""
      },
      {
        "name": "tipperary",
        "alcoholic": true,
        "ibaFamily": "new era drinks",
        "family": "",
        "recipe": [
          {
            "ingredient": "irish whiskey",
            "qty": "4.5 cl",
            "oz": ""
          },
          {
            "ingredient": "green chartreuse",
            "qty": "1.5 cl",
            "oz": ""
          },
          {
            "ingredient": "sweet vermouth",
            "qty": "1.5 cl",
            "oz": ""
          }
        ],
        "glass": "coupette glass",
        "method": "Stir all ingredients with ice and strain into a chilled coupette glass.",
        "garnish": "lemon twist",
        "history": "The Tipperary is a classic cocktail that features Irish whiskey, Green Chartreuse, and sweet vermouth. It is a strong and aromatic drink with a herbal profile.",
        "variants": [],
        "img": ""
      },
      {
        "name": "tommy’s margarita",
        "alcoholic": true,
        "ibaFamily": "new era drinks",
        "family": "",
        "recipe": [
          {
            "ingredient": "tequila",
            "qty": "6 cl",
            "oz": ""
          },
          {
            "ingredient": "fresh lime juice",
            "qty": "2 cl",
            "oz": ""
          },
          {
            "ingredient": "agave syrup",
            "qty": "2 cl",
            "oz": ""
          }
        ],
        "glass": "rocks glass",
        "method": "Shake tequila, fresh lime juice, and agave syrup with ice. Strain into a rocks glass filled with ice.",
        "garnish": "lime wheel",
        "history": "Tommy's Margarita is a modern variation of the classic Margarita cocktail. It was created by Julio Bermejo at Tommy's Mexican Restaurant in San Francisco. The cocktail replaces the traditional orange liqueur with agave syrup, resulting in a smoother and slightly sweeter flavor profile.",
        "variants": [],
        "img": ""
      },
      {
        "name": "ve.n.to",
        "alcoholic": true,
        "ibaFamily": "new era drinks",
        "family": "",
        "recipe": [
          {
            "ingredient": "gin",
            "qty": "5 cl",
            "oz": ""
          },
          {
            "ingredient": "campari",
            "qty": "2 cl",
            "oz": ""
          },
          {
            "ingredient": "sweet vermouth",
            "qty": "2 cl",
            "oz": ""
          },
          {
            "ingredient": "ginger ale",
            "qty": "Top up",
            "oz": ""
          },
          {
            "ingredient": "orange peel",
            "qty": "Garnish",
            "oz": ""
          }
        ],
        "glass": "rocks glass",
        "method": "Build the cocktail in a rocks glass filled with ice. Stir gently and garnish with an orange peel.",
        "garnish": "orange peel",
        "history": "VE.N.TO is a cocktail inspired by the classic Venetian spritz. It is made with gin, Campari, sweet vermouth, and topped up with ginger ale. The cocktail is reminiscent of the flavors of Venice and is often enjoyed as an aperitivo.",
        "variants": [],
        "img": ""
      },
      {
        "name": "yellow bird",
        "alcoholic": true,
        "ibaFamily": "new era drinks",
        "family": "",
        "recipe": [
          {
            "ingredient": "white rum",
            "qty": "3 cl",
            "oz": ""
          },
          {
            "ingredient": "galliano",
            "qty": "1.5 cl",
            "oz": ""
          },
          {
            "ingredient": "triple sec",
            "qty": "1.5 cl",
            "oz": ""
          },
          {
            "ingredient": "lime juice",
            "qty": "1.5 cl",
            "oz": ""
          }
        ],
        "glass": "hurricane glass",
        "method": "Shake all ingredients with ice and strain into a Hurricane glass filled with ice.",
        "garnish": "lime wheel",
        "history": "The Yellow Bird is a tropical cocktail that combines the flavors of white rum, Galliano, triple sec, and lime juice. It is a sweet and citrusy drink with a vibrant yellow color.",
        "variants": [],
        "img": ""
      }
];

const recipeIngredientSchema = new mongoose.Schema({

    ingredient: {
        type: String,
        required: true,
    },
    qty: {
        type: String,
    },
    oz: {
        type: String
    }
});

const cocktailSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    alcoholic: {
        type: Boolean,
        required: true,
    },
    ibaFamily: String,
    family: String,
    recipe: {
        type: [recipeIngredientSchema],
        required: true,
    },
    glass: {
        type: String,
        required: true,
    },
    method: {
        type: String,
        required: true,
    },
    garnish: {
        type: String,
        required: true,
    },
    history: String,
    variants: [String],
    img: String,
});

export const Cocktail = mongoose.model("Cocktail", cocktailSchema);