import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Cookies', 'Yummy cookies', 'http://placekitten.com/200/150'),
    new Recipe('Macrons', 'Yummy macrons', 'http://placekitten.com/201/200'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
