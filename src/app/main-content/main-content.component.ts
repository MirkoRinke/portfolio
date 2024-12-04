/**
 * @fileoverview Main content component for the application.
 * This component serves as the container for various sections of the main content,
 * including the hero/banner, about me, skills, and featured projects sections.
 */

/**
 * Importing Component decorator from @angular/core.
 * Core Angular decorator used to:
 * - Define component metadata and configuration
 * - Mark class as an Angular component
 * - Specify component properties like selector, template, styles
 * - Required for creating any Angular component
 */
import { Component } from '@angular/core';

/**
 * Importing HeroComponent from hero subdirectory.
 * Used as a child component to display the hero/banner section of the main content:
 * - Contains introduction and headline content
 * - Provides navigation and call-to-action elements
 * - Part of the main page layout structure
 */
import { HeroComponent } from './hero/hero.component';

/**
 * Importing AboutMeComponent from about-me subdirectory.
 * Used as a child component to display the "About Me" section:
 * - Contains biographical and professional information
 * - Displays skills and experience details
 * - Part of the main content structure
 * - Rendered in the main page layout
 */
import { AboutMeComponent } from './about-me/about-me.component';

/**
 * Importing SkillsComponent from skills subdirectory.
 * Used as a child component to display technical skills section:
 * - Shows current technical skills and expertise
 * - Displays skills being learned/developed
 * - Contains skill categories and proficiency levels
 * - Part of the main page content structure
 */
import { SkillsComponent } from './skills/skills.component';

/**
 * Importing FeaturedProjectsComponent from featured-projects subdirectory.
 * Used as a child component to display showcase projects section:
 * - Displays portfolio of selected projects
 * - Contains project previews and details
 * - Handles project modal interactions
 * - Integrates with project navigation and filtering
 */
import { FeaturedProjectsComponent } from './featured-projects/featured-projects.component';

/**
 * Importing TestimonialsComponent from testimonials subdirectory.
 * Used as a child component to display testimonials/reviews section:
 * - Shows client/colleague testimonials and feedback
 * - Manages testimonial carousel/slider functionality
 * - Handles responsive layout and animations
 * - Integrates language switching for testimonial content
 */
import { TestimonialsComponent } from './testimonials/testimonials.component';

/**
 * Importing ContactComponent from contact subdirectory.
 * Used as a child component to display the contact form section:
 * - Handles user contact form submission
 * - Contains form validation and error handling
 * - Manages form state and submissions
 * - Integrates language switching for form labels/messages
 */
import { ContactComponent } from './contact/contact.component';

/**
 * Component decorator configuration for MainContentComponent.
 * @Component defines the following metadata:
 * - selector: 'app-main-content' - HTML selector used to insert this component
 * - standalone: true - Component is self-contained without NgModule
 * - imports: Required child components:
 *   - HeroComponent: Hero/banner section
 *   - AboutMeComponent: About section
 *   - SkillsComponent: Skills showcase
 *   - FeaturedProjectsComponent: Project portfolio
 *   - TestimonialsComponent: Reviews/testimonials
 *   - ContactComponent: Contact form
 *   - FooterComponent: Page footer
 * - templateUrl: Points to external HTML template file
 * - styleUrl: Points to external SCSS styles file
 */
@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    HeroComponent,
    AboutMeComponent,
    SkillsComponent,
    FeaturedProjectsComponent,
    TestimonialsComponent,
    ContactComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}
