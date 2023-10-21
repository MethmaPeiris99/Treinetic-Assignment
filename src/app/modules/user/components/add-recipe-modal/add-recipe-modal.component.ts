import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-recipe-modal',
  templateUrl: './add-recipe-modal.component.html',
  styleUrls: ['./add-recipe-modal.component.css'],
})
export class AddRecipeModalComponent {
  constructor(public homeService: HomeService) {}

  closeModal() {
    this.homeService.closeModal();
  }

  add_recipe_form = new FormGroup({
    recipe_name: new FormControl(''),
    recipe_ingridients: new FormControl(''),
    recipe_steps: new FormControl(''),
  });

  addRecipe() {
    console.log(this.add_recipe_form.value)
  }
}
