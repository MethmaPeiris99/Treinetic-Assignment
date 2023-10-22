import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  recipeList: any;

  constructor(public homeService: HomeService, public httpClient: HttpClient) {
    this.recipeList = []
  }

  openModal() {
    this.homeService.openModal();
  }

  ngOnInit():void {
    this.getRecipeInfo()
  }

  getRecipeInfo() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe((result: any) => {
      this.recipeList = result
    });
  }
}
