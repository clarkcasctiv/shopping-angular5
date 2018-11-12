import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Pasta',
      'Pasta Recipe',
      'https://cdn.pixabay.com/photo/2017/03/16/20/39/noodles-2150181_960_720.jpg'
    ),
    new Recipe(
      'Pasta',
      'Pasta Recipe',
      'https://cdn.pixabay.com/photo/2017/03/16/20/39/noodles-2150181_960_720.jpg'
    )
  ];
  constructor() {}

  ngOnInit() {}
}
