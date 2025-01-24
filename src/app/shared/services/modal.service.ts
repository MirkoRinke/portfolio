import { Injectable } from '@angular/core';

import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modal: any;
  index!: number;
  activeModal!: string;

  ifModalOpen: boolean = false;

  constructor(public utilityService: UtilityService) {}

  openModal(modal: Object | string, index: number, activeModal: string) {
    this.modal = modal;
    if (this.modal !== 'unset') this.index = index;
    this.activeModal = activeModal;
    this.ifModalOpen = true;
    this.activeModal !== 'menu'
      ? this.utilityService.disabledScroll()
      : this.utilityService.addScrollListeners();
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
    this.ifModalOpen = false;
    this.activeModal !== 'menu'
      ? this.utilityService.enableScroll()
      : this.utilityService.removeScrollListeners();
    this.activeModal = '';
  }
}
