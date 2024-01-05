import { Component } from '@angular/core';
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
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?size=626&ext=jpg'),
  ];
}
