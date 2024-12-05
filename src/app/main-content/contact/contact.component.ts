/**
 * @fileoverview Contact form component for handling user inquiries
 */

/**
 * Importing Component decorator and inject function from @angular/core:
 * - Component: Core decorator to define Angular components and their metadata
 * - inject: Function to handle dependency injection in a more functional way
 * Used for component definition and service injection in this contact form component
 */
import { Component, inject } from '@angular/core';

/**
 * Importing form-related modules and types from @angular/forms:
 * - FormsModule: Required module for template-driven forms functionality
 * - NgForm: Directive for working with template-driven form instances
 * Used to implement and validate the contact form in this component
 */
import { FormsModule, NgForm } from '@angular/forms';

/**
 * Importing CommonModule from @angular/common:
 * - Provides common Angular directives and pipes
 * - Includes *ngIf, *ngFor, | async, etc.
 * - Required for basic template functionality
 * Used to access core Angular template features in this component
 */
import { CommonModule } from '@angular/common';

/**
 * Importing HttpClient from @angular/common/http:
 * - Provides functionality for making HTTP requests
 * - Used to send form data to backend server
 * - Handles request/response lifecycle and error handling
 * Essential for implementing contact form submission functionality
 */
import { HttpClient } from '@angular/common/http';

/**
 * Importing Subscription from rxjs:
 * - Used to manage observable subscriptions
 * - Helps prevent memory leaks through proper subscription cleanup
 * - Essential for handling asynchronous operations and events
 * Important for managing component lifecycle and language service subscription
 */
import { Subscription } from 'rxjs';

/**
 * Importing LanguageService to handle language switching functionality:
 * - Manages translation state between German and English
 * - Provides methods to switch languages
 * - Emits language change events for components to react
 * - Core service for application internationalization
 */
import { LanguageService } from '../../shared/services/language.service';

/**
 * Importing language-related interfaces and constants:
 * - Texts: Interface defining structure of text content
 * - textsDE: German translation text content
 * - textsEN: English translation text content
 * Used to support multi-language functionality in About Me section
 */
import { Texts, textsDE, textsEN } from './language';

/**
 * Importing RouterModule from @angular/router:
 * - Provides routing and navigation functionality
 * - Enables navigation between different views and components
 * - Required for navigation in Angular applications
 * Used to navigate to different views in the application
 */
import { RouterModule } from '@angular/router';

/**
 * Interface representing the contact data.
 *
 * @property {string} name - The name of the contact.
 * @property {string} email - The email address of the contact.
 * @property {string} message - The message from the contact.
 */
import { ContactInfoComponent } from '../contact-info/contact-info.component';

/**
 * Represents contact information submitted through a contact form.
 */
export interface ContactData {
  /**
   * The name of the person submitting the contact form.
   */
  name: string;

  /**
   * The email address of the person submitting the contact form.
   */
  email: string;

  /**
   * The message or inquiry provided in the contact form.
   */
  message: string;
}

/**
 * ContactComponent is responsible for displaying the contact section of the application.
 * It is a standalone component.
 *
 * @component
 * @selector app-contact
 * @standalone true
 * @imports [FormsModule, CommonModule, RouterModule, ContactInfoComponent]
 * @templateUrl ./contact.component.html
 * @styleUrls ./contact.component.scss
 */
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, ContactInfoComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  /**
   * Holds the texts to be displayed in the "About Me" section of the main content.
   * The texts are assigned from the `textsDE` object, which contains the German translations.
   *
   * @type {Texts}
   */
  texts: Texts = textsDE;

  /**
   * Subscription to track changes in the selected language.
   * This subscription is used to update the component when the language changes.
   * It is initialized as undefined and will be assigned when the subscription is created.
   *
   * @private
   */
  private languageSubscription: Subscription | undefined;

  /**
   * A placeholder string for the name input field in the contact component.
   * This can be used to display a default text in the input field before the user enters their name.
   */
  placeholderName: string = '';

  /**
   * A placeholder string for the email input field in the contact component.
   * This can be used to provide a hint to the user about the expected input format.
   */
  placeholderEmail: string = '';

  /**
   * A placeholder message used in the contact component.
   * This string can be used to display a default message in the input field.
   */
  placeholderMessage: string = '';

  /**
   * A CSS class name used to style the placeholder for the name input field.
   * The default value is 'placeholder-valid'.
   */
  placeholderNameClass: string = 'placeholder-valid';

  /**
   * A CSS class applied to the email input placeholder to indicate its validation state.
   * The default value is 'placeholder-valid'.
   */
  placeholderEmailClass: string = 'placeholder-valid';

  /**
   * A CSS class applied to the placeholder message element.
   * This class is used to style the placeholder message when it is in a valid state.
   *
   * @type {string}
   */
  placeholderMessageClass: string = 'placeholder-valid';

  /**
   * Indicates whether the privacy policy has been checked by the user.
   * This property is optional and can be undefined.
   */
  privacyPolicyChecked?: boolean = undefined;

  /**
   * A boolean flag indicating whether to show feedback to the user.
   * When set to `true`, feedback will be displayed.
   * When set to `false`, feedback will be hidden.
   */
  showFeedback: boolean = false;

  /**
   * Injects the HttpClient service to make HTTP requests.
   *
   * @type {HttpClient}
   */
  http: HttpClient = inject(HttpClient);

  /**
   * A boolean flag indicating whether the mail test is enabled.
   * When set to `true`, the mail test is active.
   */
  mailTest: boolean = false;

  /**
   * Holds the contact form data.
   *
   * @property {string} name - The name of the person submitting the contact form.
   * @property {string} email - The email address of the person submitting the contact form.
   * @property {string} message - The message content from the contact form.
   */
  contactData: ContactData = {
    name: '',
    email: '',
    message: '',
  };

  /**
   * Configuration object for posting data to the server.
   *
   * @property {string} endPoint - The endpoint URL for the POST request.
   * @property {function} body - Function to convert the payload to a JSON string.
   * @property {object} options - Options for the POST request.
   * @property {object} options.headers - Headers for the POST request.
   * @property {string} options.headers['Content-Type'] - The content type of the request.
   * @property {string} options.headers.responseType - The response type of the request.
   */
  post = {
    endPoint: './sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  /**
   * Creates an instance of ContactComponent.
   *
   * @param {LanguageService} languageService - The service used for handling language-related operations.
   */
  constructor(private languageService: LanguageService) {}

  /**
   * Lifecycle hook that is called after the component's view has been initialized.
   * Subscribes to the language service to listen for language changes and loads the initial texts.
   *
   * @returns {void}
   */
  ngOnInit(): void {
    this.languageSubscription =
      this.languageService.selectedLanguage$.subscribe((language) => {
        this.loadTexts(language);
      });
    this.loadTexts(this.languageService.getLanguage());
  }

  /**
   * Lifecycle hook that is called when the component is destroyed.
   * Unsubscribes from the language subscription to prevent memory leaks.
   *
   * @returns {void}
   */
  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  /**
   * Loads the text content based on the selected language and sets the placeholders.
   * If the language is 'de', it loads the German texts.
   * If the language is 'en', it loads the English texts.
   * If the language is neither 'de' nor 'en', it defaults to English texts.
   *
   * @param {string} language - The selected language ('de' or 'en').
   * @returns {void}
   */
  loadTexts(language: string): void {
    if (language === 'de') (this.texts = textsDE), this.setPlaceholders();
    else if (language === 'en') (this.texts = textsEN), this.setPlaceholders();
    else (this.texts = textsEN), this.setPlaceholders();
  }

  /**
   * Sets the placeholder texts for the contact form fields.
   * The placeholders are assigned from the `texts` object, which contains the placeholder text content.
   *
   * @returns {void}
   */
  setPlaceholders(): void {
    this.placeholderName = this.texts.placeholderName;
    this.placeholderEmail = this.texts.placeholderEmail;
    this.placeholderMessage = this.texts.placeholderMessage;
  }

  /**
   * Handles the form submission event.
   *
   * @param {NgForm} ngForm - The form to be submitted.
   *
   * This method performs the following actions:
   * - Checks if the privacy policy checkbox is checked. If not, it sets `privacyPolicyChecked` to false and returns.
   * - If the form is submitted, valid, and not in test mode, it sends a POST request with the contact data.
   *   - On successful response, it resets the form and shows a feedback message.
   *   - On error, it logs the error to the console.
   *   - On completion, it logs a completion message to the console.
   * - If the form is submitted, valid, and in test mode, it logs a success message, resets the form, clears the form, and shows a feedback message.
   * - If the form is not valid, it updates the placeholders.
   */
  onSubmit(ngForm: NgForm): void {
    if (!this.privacyPolicyChecked) {
      this.privacyPolicyChecked = false;
      return;
    }
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.showFeedbackMessage();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log('Form Submitted Successfully (Test Mode)');
      ngForm.resetForm();
      this.clearForm();
      this.showFeedbackMessage();
    } else {
      this.updatePlaceholders(ngForm);
    }
  }

  /**
   * Displays a feedback message for a specified duration.
   *
   * This method sets the `showFeedback` property to `true`, which presumably
   * triggers the display of a feedback message in the UI. After 5 seconds (5000 milliseconds),
   * it sets the `showFeedback` property back to `false`, hiding the feedback message.
   */
  showFeedbackMessage(): void {
    this.showFeedback = true;
    setTimeout(() => {
      this.showFeedback = false;
    }, 5000);
  }

  /**
   * Clears the contact form by resetting the privacy policy checkbox and
   * setting the placeholder classes for name, email, and message fields to 'placeholder-valid'.
   */
  clearForm(): void {
    this.privacyPolicyChecked = undefined;
    this.placeholderNameClass = 'placeholder-valid';
    this.placeholderEmailClass = 'placeholder-valid';
    this.placeholderMessageClass = 'placeholder-valid';
  }

  /**
   * Updates the placeholders for the form fields based on their validation status.
   *
   * @param {NgForm} form - The form whose fields' placeholders need to be updated.
   *
   * This method checks the validity of the 'name', 'email', and 'message' controls
   * in the provided form. If any of these controls are invalid, it calls the respective
   * methods to update their placeholders.
   */
  updatePlaceholders(form: NgForm): void {
    if (form.controls['name'].invalid) {
      this.updatePlaceholdersName();
    }
    if (form.controls['email'].invalid) {
      this.updatePlaceholdersEmail();
    }
    if (form.controls['message'].invalid) {
      this.updatePlaceholdersMessage();
    }
  }

  /**
   * Updates the placeholder for the name input field to indicate that it is required.
   * Sets the placeholder text to the required name text, clears the contact name data,
   * and applies the 'placeholder-invalid' CSS class to the placeholder.
   *
   * @returns {void}
   */
  updatePlaceholdersName(): void {
    this.placeholderName = this.texts.requiredName;
    this.contactData.name = '';
    this.placeholderNameClass = 'placeholder-invalid';
  }

  /**
   * Updates the email placeholder to indicate that an email is required.
   *
   * This method sets the `placeholderEmail` to the required email text,
   * clears the `contactData.email` field, and applies the 'placeholder-invalid'
   * class to the `placeholderEmailClass` property.
   *
   * @returns {void}
   */
  updatePlaceholdersEmail(): void {
    this.placeholderEmail = this.texts.requiredEmail;
    this.contactData.email = '';
    this.placeholderEmailClass = 'placeholder-invalid';
  }

  /**
   * Updates the placeholders and message for the contact form.
   *
   * This method sets the `placeholderMessage` to the required message text,
   * clears the `contactData.message`, and assigns the 'placeholder-invalid'
   * class to `placeholderMessageClass`.
   *
   * @returns {void}
   */
  updatePlaceholdersMessage(): void {
    this.placeholderMessage = this.texts.requiredMessage;
    this.contactData.message = '';
    this.placeholderMessageClass = 'placeholder-invalid';
  }

  /**
   * Handles the change event for the privacy policy checkbox.
   *
   * @param {Event} event - The event triggered by the checkbox change.
   */
  onPrivacyPolicyChange(event: Event): void {
    this.privacyPolicyChecked = (event.target as HTMLInputElement).checked;
  }

  /**
   * Checks if the form is valid and the privacy policy is checked.
   *
   * @param {NgForm} form - The form to validate.
   * @returns {boolean | undefined} - Returns `true` if the form is valid and the privacy policy is checked,
   *                                  `false` if the form is invalid or the privacy policy is not checked,
   *                                  or `undefined` if the form is not provided.
   */
  isFormValid(form: NgForm): boolean | undefined {
    return !!form.valid && this.privacyPolicyChecked;
  }
}
