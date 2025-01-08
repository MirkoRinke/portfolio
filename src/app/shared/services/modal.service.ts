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
    this.disabledScroll();
  }

  closeModal() {
    this.isModalOpen = false;
    this.enableScroll();
  }

  disabledScroll() {
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollBarWidth}px`;
  }

  enableScroll() {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }
}
