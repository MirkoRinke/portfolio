/**
 * @fileoverview This file defines the ProjectService which manages project selection and modal state in the application.
 */

/**
 * Angular's Injectable decorator is used to define a service class that can be injected into other components or services.
 */
import { Injectable } from '@angular/core';

/**
 * Importing BehaviorSubject from RxJS to manage and observe state changes over time.
 */
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * The Injectable decorator marks this class as a service that can be injected.
 * The providedIn: 'root' metadata ensures that the service is available as a singleton throughout the application.
 */
@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  /**
   * A BehaviorSubject that holds the current project ID.
   * Initialized with a default value of 0.
   *
   * @private
   */
  private currentProjectSource = new BehaviorSubject<number>(0);

  /**
   * An observable that emits the current project.
   *
   * This observable is derived from the `currentProjectSource` subject and can be subscribed to
   * in order to receive updates whenever the current project changes.
   */
  currentProject$ = this.currentProjectSource.asObservable();

  /**
   * A BehaviorSubject that holds the state of the project modal's open status.
   *
   * @private
   * @type {BehaviorSubject<boolean>}
   * @default false - The project modal is initially closed.
   */
  private projectModalOpenSource: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  /**
   * An observable that emits the current state of the project modal.
   *
   * This observable can be subscribed to in order to receive updates
   * on whether the project modal is open or closed.
   *
   * @type {Observable<boolean>}
   */
  projectModalOpen$: Observable<boolean> =
    this.projectModalOpenSource.asObservable();

  /**
   * Sets the current project by updating the current project source with the given project ID.
   *
   * @param {number} projectId - The ID of the project to set as the current project.
   */
  setCurrentProject(projectId: number) {
    this.currentProjectSource.next(projectId);
  }

  /**
   * Sets the state of the project modal.
   *
   * @param {boolean} isOpen - A boolean indicating whether the project modal should be open (true) or closed (false).
   */
  setProjectModalOpen(isOpen: boolean) {
    this.projectModalOpenSource.next(isOpen);
  }
}
