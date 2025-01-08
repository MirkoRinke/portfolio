import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isModalOpen = false;

  modal: any;
  activeModal!: string;

  constructor() {}

  openModal(modal: Object, activeModal: any) {
    this.isModalOpen = true;
    this.modal = modal;
    this.activeModal = activeModal;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
