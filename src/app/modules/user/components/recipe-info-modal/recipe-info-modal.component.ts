import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-info-modal',
  templateUrl: './recipe-info-modal.component.html',
  styleUrls: ['./recipe-info-modal.component.css'],
})
export class RecipeInfoModalComponent {
  @Input() recipeInfo:any
 }
