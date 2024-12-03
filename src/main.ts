/** @fileoverview This file bootstraps the Angular application with the necessary configurations. */

/**
 * Importing bootstrapApplication from the Angular platform-browser module.
 * This function is used to bootstrap the Angular application.
 */
import { bootstrapApplication } from '@angular/platform-browser';

/**
 * Importing the appConfig from the app.config file.
 * This configuration object contains the necessary providers for the application.
 */
import { appConfig } from './app/app.config';

/**
 * Importing the AppComponent from the app.component file.
 * This is the root component of the Angular application.
 */
import { AppComponent } from './app/app.component';

// Bootstrapping the Angular application with the root AppComponent and the appConfig configuration.
// If an error occurs during the bootstrap process, it will be logged to the console.
bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
