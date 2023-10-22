import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  
  private modalOpenSubject = new BehaviorSubject<boolean>(false);
  modalOpen = this.modalOpenSubject.asObservable();

  isModalOpen: boolean[] = Array(12).fill(false);

  openModal() {
    this.modalOpenSubject.next(true);
  }

  closeModal() {
    this.modalOpenSubject.next(false);
  }

  openRecipeModal(index:number) {
    this.isModalOpen[index] = true
  }
}
