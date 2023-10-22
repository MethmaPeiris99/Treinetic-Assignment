import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
    recipe_name: new FormControl('', [Validators.required]),
    recipe_ingridients: new FormControl('', [Validators.required]),
    recipe_steps: new FormControl('', [Validators.required]),
    prepTime: new FormControl('', [Validators.required]),
  });

  addRecipe() {
    console.log(this.add_recipe_form.value);
  }

  get recipe_name() {
    return this.add_recipe_form.get('recipe_name');
  }

  get recipe_ingridients() {
    return this.add_recipe_form.get('recipe_ingridients');
  }

  get recipe_steps() {
    return this.add_recipe_form.get('recipe_steps');
  }

  get prepTime() {
    return this.add_recipe_form.get('prepTime');
  }
}
