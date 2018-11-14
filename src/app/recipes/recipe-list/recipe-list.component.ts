import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Pasta',
      'Pasta Recipe',
      'https://cdn.pixabay.com/photo/2017/03/16/20/39/noodles-2150181_960_720.jpg'
    ),
    new Recipe(
      'Burger',
      'Burger Recipe',
      'https://cdn.pixabay.com/photo/2017/03/16/20/39/noodles-2150181_960_720.jpg'
    )
  ];
  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
