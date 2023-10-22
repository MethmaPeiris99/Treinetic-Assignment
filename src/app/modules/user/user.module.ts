import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UserRoutingModule } from './user-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { UserContainerComponent } from './components/user-container/user-container.component';
import { AddRecipeModalComponent } from './components/add-recipe-modal/add-recipe-modal.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { RecipeInfoModalComponent } from './components/recipe-info-modal/recipe-info-modal.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UserContainerComponent,
    AddRecipeModalComponent,
    RecipeCardComponent,
    RecipeInfoModalComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class UserModule { }
