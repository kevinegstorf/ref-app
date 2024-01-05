import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { DirectiveModule } from '../../shared/directive/directive.module';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [DirectiveModule],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe | undefined;
}
