/**
 * @fileoverview Application configuration for providers and routing
 */

/**
 * Importing ApplicationConfig and provideZoneChangeDetection from the Angular core module.
 * ApplicationConfig is used to configure the application at a global level.
 * provideZoneChangeDetection is used to configure zone-based change detection.
 */
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

/**
 * Importing provideRouter from the Angular Router module.
 * This function is used to configure the router for the application.
 */
import { provideRouter } from '@angular/router';

/**
 * Importing the routes configuration from the app.routes file.
 * This will be used to provide the routing configuration for the application.
 */
import { routes } from './app.routes';

/**
 * Importing provideHttpClient from the Angular common HTTP module.
 * This function is used to configure the HTTP client for the application.
 */
import { provideHttpClient } from '@angular/common/http';

/**
 * Configuring the application with the necessary providers.
 * - provideZoneChangeDetection: Configures zone-based change detection with event coalescing enabled.
 * - provideRouter: Configures the router with the defined routes.
 * - provideHttpClient: Configures the HTTP client for making HTTP requests.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
  ],
};
