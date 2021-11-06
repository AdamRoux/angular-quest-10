import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../shared/cocktail.model';


@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  cocktails: any[];

  constructor(public cocktail : CocktailService) {
    this.cocktails = cocktail.getCocktails();
   }

  ngOnInit(): void {
  }

}
