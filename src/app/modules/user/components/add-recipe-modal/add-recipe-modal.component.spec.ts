import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecipeModalComponent } from './add-recipe-modal.component';

describe('AddRecipeModalComponent', () => {
  let component: AddRecipeModalComponent;
  let fixture: ComponentFixture<AddRecipeModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRecipeModalComponent]
    });
    fixture = TestBed.createComponent(AddRecipeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
