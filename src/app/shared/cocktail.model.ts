export class Cocktail {
    name: string;
    price: number;
    imageUrl: string;

    constructor(cocktailName:string, cocktailPrice:number, cocktailImageUrl:string){
        this.name = cocktailName
        this.price = cocktailPrice
        this.imageUrl = cocktailImageUrl
    }
}