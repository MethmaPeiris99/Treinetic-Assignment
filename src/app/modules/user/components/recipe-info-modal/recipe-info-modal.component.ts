import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-recipe-info-modal',
  templateUrl: './recipe-info-modal.component.html',
  styleUrls: ['./recipe-info-modal.component.css'],
})
export class RecipeInfoModalComponent {
  @Input() recipeInfo: any;
  @Input() recipeIndex: any;
  recipeSteps: any;

  constructor(public httpClient: HttpClient, public homeService: HomeService) {
    this.recipeSteps = [];
  }

  ngOnInit(): void {
    this.getRecipeSteps();
  }

  getRecipeSteps() {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/comments')
      .subscribe((result: any) => {
        this.recipeSteps = result;
      });
  }

  closeRecipeModal(index: number) {
    this.homeService.closeRecipeModal(index);
  }
}
