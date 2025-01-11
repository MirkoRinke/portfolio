import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modal: any;
  index!: number;
  activeModal!: string;

  ifModalOpen: boolean = false;

  openModal(modal: Object | string, index: number, activeModal: string) {
    console.log('openModal');
    this.modal = modal;
    if (this.modal !== 'unset') this.index = index;
    this.activeModal = activeModal;
    this.ifModalOpen = true;
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
    if (index == modal.length) index = 0;

    if (!modal[index].visibility) {
      do {
        index = index + 1;
        if (index == modal.length) index = 0;
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
    console.log('closeModal');
    this.ifModalOpen = false;
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
