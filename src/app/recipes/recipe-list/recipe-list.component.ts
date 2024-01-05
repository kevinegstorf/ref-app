import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from '../recipe.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeItemComponent, CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  @Output() recipewasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Pizza', 'This is simply a test', 'https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?size=626&ext=jpg'),
    new Recipe('Chicken', 'This is simply a test', 'https://assets.epicurious.com/photos/62f16ed5fe4be95d5a460eed/1:1/w_2560%2Cc_limit/RoastChicken_RECIPE_080420_37993.jpg'),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipewasSelected.emit(recipe);
  }
}
