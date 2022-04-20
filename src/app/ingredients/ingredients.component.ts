import { INGREDIENTS } from './../mock-ingredient';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  ingredientsList = INGREDIENTS;

  maximumIngredientOrderNumber = 9;
  minimumIngredientOrderNumber = 0;

  constructor() {}

  ngOnInit(): void {
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
