import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  ingredientsList = [
    { name: 'Tomato',
      price: '1.30',
      count: 0,},
      { name: 'Pepperoni',
      price: '1.50',
      count: 0,},
      { name: 'Chicken',
      price: '2.30',
      count: 0,},
      { name: 'Cheese',
      price: '1.00',
      count: 0,
    },
  ];

  incrementData(index: number){
    const value = this.ingredientsList[index];
    value.count = value.count + 1;
  }
  decrementData(index: number){
    const value = this.ingredientsList[index];
    value.count = value.count - 1;
  }

  constructor() {}

  ngOnInit(): void {
  }

}
