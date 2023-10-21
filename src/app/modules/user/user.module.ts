import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { UserContainerComponent } from './components/user-container/user-container.component';
import { AddRecipeModalComponent } from './components/add-recipe-modal/add-recipe-modal.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UserContainerComponent,
    AddRecipeModalComponent,
    RecipeCardComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
