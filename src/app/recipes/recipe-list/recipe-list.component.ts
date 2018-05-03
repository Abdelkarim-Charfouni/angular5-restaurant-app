import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe('A test recipe','This is simply a test recipe','https://www.seriouseats.com/recipes/images/2016/12/20161201-crispy-roast-potatoes-29-1500x1125.jpg'),
    new Recipe('Another test recipe','This is simply Another test recipe','https://www.seriouseats.com/recipes/images/2016/12/20161201-crispy-roast-potatoes-29-1500x1125.jpg'),
    new Recipe('A khbach test recipe','This is simply a khbach test recipe','https://www.seriouseats.com/recipes/images/2016/12/20161201-crispy-roast-potatoes-29-1500x1125.jpg')
  ]

  @Output() sentRecipe = new EventEmitter<Recipe>();
  onSend(recipe : Recipe){
      this.sentRecipe.emit(recipe);
  }
 
  constructor() { }

  ngOnInit() {
  }

}
