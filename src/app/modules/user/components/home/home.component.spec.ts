import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HomeService } from '../../services/home.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let homeService: HomeService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [HomeService],
      imports: [HttpClientTestingModule],
    });

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    homeService = TestBed.inject(HomeService);
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test case to check whether the recipeList is not empty when the HomeComponent is initially created
  it('should initially have a non-empty recipeList', () => {
    expect(component.recipeList).not.toBeNull();
    expect(component.recipeList.length).toBeGreaterThan(0);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
