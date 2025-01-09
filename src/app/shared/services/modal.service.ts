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

  prevModal(modal: any, index: number, activeModal: string) {
    if (index < 0) index = modal.length - 1;
    if (!modal[index].visibility) {
      do {
        index = index - 1;
      } while (!modal[index].visibility);
    }
    this.modal = modal;
    this.index = index;
    this.activeModal = activeModal;
  }

  nextModal(modal: any, index: number, activeModal: string) {
    if (!modal[index].visibility) {
      do {
        index = index + 1;
        if (index == this.modal.length) index = 0;
      } while (!modal[index].visibility);
    }
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
