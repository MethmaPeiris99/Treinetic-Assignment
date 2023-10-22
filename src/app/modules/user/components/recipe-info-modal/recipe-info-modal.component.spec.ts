import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeInfoModalComponent } from './recipe-info-modal.component';

describe('RecipeInfoModalComponent', () => {
  let component: RecipeInfoModalComponent;
  let fixture: ComponentFixture<RecipeInfoModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeInfoModalComponent]
    });
    fixture = TestBed.createComponent(RecipeInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
