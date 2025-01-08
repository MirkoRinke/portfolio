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

  prevModal(modal: Object, index: number, activeModal: string) {
    if (index < 0) index = this.modal.length - 1;
    this.modal = modal;
    this.index = index;
    this.activeModal = activeModal;
  }

  nextModal(modal: Object, index: number, activeModal: string) {
    if (index == this.modal.length) index = 0;
    this.modal = modal;
    this.index = index;
    this.activeModal = activeModal;
  }

  closeModalWrapper(event: Event) {
    if (event.target === event.currentTarget) this.closeModal();
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
