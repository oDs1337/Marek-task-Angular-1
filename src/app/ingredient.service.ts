import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from './ingredient';
import { INGREDIENTS } from './mock-ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {


  constructor() { }

  getIngredients(): Promise<Ingredient[]>{

    return new Promise<Ingredient[]>((resolve, reject) => {
      if(INGREDIENTS.length > 0){
        resolve(INGREDIENTS);
      }
      else{
        reject("error");
      }
    })
  }
}
