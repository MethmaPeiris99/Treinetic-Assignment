import { Component, Input } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css'],
})
export class RecipeCardComponent {
  @Input() recipeInfo: any;
  @Input() recipeIndex: any;

  constructor(public homeService: HomeService) {}

  openRecipeModal(index: number) {
    console.log(index)
    this.homeService.openRecipeModal(index);
  }
}
