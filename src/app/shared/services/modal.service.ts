import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isModalOpen = false;

  modal: any;
  index!: number;
  activeModal!: string;

  constructor() {}

  openModal(modal: Object, index: number, activeModal: string) {
    this.isModalOpen = true;
    this.modal = modal;
    this.index = index;
    this.activeModal = activeModal;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
