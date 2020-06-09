import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is a Test","https://pinchofyum.com/wp-content/uploads/Crockpot-Braised-Beef-Ragu.jpg"),
    new Recipe("A Test Recipe", "This is a Test","https://pinchofyum.com/wp-content/uploads/Crockpot-Braised-Beef-Ragu.jpg")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
