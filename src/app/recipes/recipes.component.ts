import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  comeRecipe : Recipe;
  onCome(recipe : Recipe){
      // console.log(recipe);
      this.comeRecipe = recipe;
      console.log(this.comeRecipe);
  }
  constructor() { }

  ngOnInit() {
  }

}
