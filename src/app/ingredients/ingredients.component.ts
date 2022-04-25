import { Ingredient } from './../ingredient';
import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  ingredientsList: Ingredient[] = [];

  maximumIngredientOrderNumber = 9;
  minimumIngredientOrderNumber = 0;

  constructor(private ingredientService: IngredientService) {}

  ngOnInit(): void {
    this.getIngredients();
  }

  getIngredients(): void{
    this.ingredientService.getIngredients().then((successfullyFetchedIngredients) => {
      if(successfullyFetchedIngredients[0].name != ''){
        this.ingredientsList = successfullyFetchedIngredients;
      }
    })
  }


  incrementData(index: number){
    const value = this.ingredientsList[index];
    value.count = value.count + 1;
  }
  decrementData(index: number){
    const value = this.ingredientsList[index];
    value.count = value.count - 1;
  }


}
