/**
 * @fileoverview Defines application routes for main content, imprint, and privacy policy components
 */

/**
 * Importing the Routes interface from the Angular Router module.
 * This interface is used to define the routes configuration for the application.
 */
import { Routes } from '@angular/router';

/**
 * Importing the MainContentComponent from the main-content directory.
 * This component will be used as one of the route components in the application.
 */
import { MainContentComponent } from './main-content/main-content.component';

/**
 * Importing the ImprintComponent from the imprint directory.
 * This component will be used as one of the route components in the application.
 */
import { ImprintComponent } from './imprint/imprint.component';

/**
 * Importing the PrivacyPolicyComponent from the privacy-policy directory.
 * This component will be used as one of the route components in the application.
 */
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

/**
 * Defining the routes for the application.
 * - The default route ('') will load the MainContentComponent.
 * - The 'imprint' route will load the ImprintComponent.
 * - The 'privacy' route will load the PrivacyPolicyComponent.
 */
export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy', component: PrivacyPolicyComponent },
];
