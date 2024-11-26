import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  /**
   * A BehaviorSubject that holds the current project ID.
   * Initialized with a default value of 0.
   * @private
   */
  private currentProjectSource = new BehaviorSubject<number>(0);

  /**
   * Observable stream of the current project.
   */
  currentProject$ = this.currentProjectSource.asObservable();

  /**
   * A BehaviorSubject that holds the state of the project modal's open status.
   * Initially set to `false`, indicating the modal is closed.
   */
  private projectModalOpenSource = new BehaviorSubject<boolean>(false);

  /**
   * Observable that emits the state of the project modal.
   * It indicates whether the project modal is open or closed.
   */
  projectModalOpen$ = this.projectModalOpenSource.asObservable();

  /**
   * Sets the current project by emitting the given project ID.
   * @param {number} projectId - The ID of the project to set as current.
   */
  setCurrentProject(projectId: number) {
    this.currentProjectSource.next(projectId);
  }

  /**
   * Sets the state of the project modal.
   * @param isOpen - A boolean indicating whether the project modal should be open (true) or closed (false).
   */
  setProjectModalOpen(isOpen: boolean) {
    this.projectModalOpenSource.next(isOpen);
  }

  disableScroll() {
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollBarWidth}px`;
  }

  enableScroll() {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }

  // preventScroll = (event: Event) => {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   return false;
  // };

  // addScrollListeners() {
  //   window.addEventListener('scroll', this.preventScroll, { passive: false });
  //   window.addEventListener('wheel', this.preventScroll, { passive: false });
  //   window.addEventListener('touchmove', this.preventScroll, {
  //     passive: false,
  //   });
  // }

  // removeScrollListeners() {
  //   window.removeEventListener('scroll', this.preventScroll);
  //   window.removeEventListener('wheel', this.preventScroll);
  //   window.removeEventListener('touchmove', this.preventScroll);
  // }
}
