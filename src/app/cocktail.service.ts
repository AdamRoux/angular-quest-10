import { Injectable } from  '@angular/core';

@Injectable({
        providedIn:  'root'
})

export  class  CocktailService {

    listCocktails = [
        {name : "Sex on the Beach", price : 5, img : "https://assets.afcdn.com/recipe/20180705/80336_w1024h1024c1cx1859cy2900.webp"},
        {name : "Mojito", price : 7, img : "https://img.cuisineaz.com/610x610/2014/08/29/i6096-mojito-apero-a-ma-facon.jpeg"},  ];
    
      constructor() { 
      }
    
      public getCocktails(){
        return this.listCocktails;
      }

}