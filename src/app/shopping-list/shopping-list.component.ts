import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Sugar', 10),
    new Ingredient('Spice', 12),
    new Ingredient('Chemical X', 100),

  ];

  constructor() { }

  ngOnInit() {
  }

}
