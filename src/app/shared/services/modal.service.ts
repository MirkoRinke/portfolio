import { Injectable } from '@angular/core';

import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  index!: number;
  activeModal!: string;

  ifModalOpen: boolean = false;

  constructor(public utilityService: UtilityService) {}

  openModal(index: number, activeModal: string) {
    this.index = index;
    this.activeModal = activeModal;
    this.ifModalOpen = true;
    this.activeModal !== 'menu'
      ? this.utilityService.disabledScroll()
      : this.utilityService.addScrollListeners();
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
