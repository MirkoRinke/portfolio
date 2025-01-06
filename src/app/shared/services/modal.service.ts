import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isModalOpen = false;

  title: any;
  content: any;

  constructor() {}

  openModal(newContent: any, newTitle: string) {
    this.isModalOpen = true;
    this.content = newContent;
    this.title = newTitle;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
