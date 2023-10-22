import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css'],
})
export class RecipeCardComponent {
  @Input() recipeInfo: any;
  @Input() recipeIndex: any;
  @Output() recipeInfoClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor(public homeService: HomeService) {}

  openRecipeModal(index: number) {
    this.homeService.openRecipeModal(index);
    console.log(index)
  }

  sendRecipeInfo() {
    this.recipeInfoClicked.emit(this.recipeInfo);
    console.log(this.recipeInfo)
    this.openRecipeModal;
  }
}
