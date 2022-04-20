import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient';
import { INGREDIENTS } from './mock-ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor() { }

  getIngredients(): Ingredient[]{
    return INGREDIENTS;
  }
}
