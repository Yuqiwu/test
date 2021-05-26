export default class Drink {
    constructor(drinkData) {
        this.idDrink = drinkData.idDrink
        this.strDrink = drinkData.strDrink
        this.strDrinkAlternate = drinkData.strDrinkAlternate
        this.strTags = drinkData.strTags
        this.strVideo = drinkData.strVideo
        this.strCategory = drinkData.strCategory
        this.strIBA = drinkData.strIBA
        this.strAlcoholic = drinkData.strAlcoholic
        this.strGlass = drinkData.strGlass
        this.strInstructions = [
            drinkData.strInstructions,
            drinkData.strInstructionsES,
            drinkData.strInstructionsDE,
            drinkData['strInstructionsZH-HANS'],
            drinkData['strInstructionsZH-HANT'],
        ]
        this.strDrinkThumb = drinkData.strDrinkThumb
        this.strIngredients = [
            drinkData.strIngredient1,
            drinkData.strIngredient2,
            drinkData.strIngredient3,
            drinkData.strIngredient4,
            drinkData.strIngredient5,
            drinkData.strIngredient6,
            drinkData.strIngredient7,
            drinkData.strIngredient8,
            drinkData.strIngredient9,
            drinkData.strIngredient10,
            drinkData.strIngredient11,
            drinkData.strIngredient12,
            drinkData.strIngredient13,
            drinkData.strIngredient14,
            drinkData.strIngredient15
        ]
        this.strMeasures = [
            drinkData.strMeasure1,
            drinkData.strMeasure2,
            drinkData.strMeasure3,
            drinkData.strMeasure4,
            drinkData.strMeasure5,
            drinkData.strMeasure6,
            drinkData.strMeasure7,
            drinkData.strMeasure8,
            drinkData.strMeasure9,
            drinkData.strMeasure10,
            drinkData.strMeasure11,
            drinkData.strMeasure12,
            drinkData.strMeasure13,
            drinkData.strMeasure14,
            drinkData.strMeasure15
        ]
        this.strImageSource = drinkData.strImageSource
        this.strImageAttribution = drinkData.strImageAttribution
        this.strCreativeCommonsConfirmed = drinkData.strCreativeCommonsConfirmed
        this.dateModified = drinkData.dateModified
    }
}