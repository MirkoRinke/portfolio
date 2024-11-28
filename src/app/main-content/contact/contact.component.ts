import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../shared/services/language.service';
import { Texts, textsDE, textsEN } from './language';

interface ContactData {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  texts: Texts = textsDE;
  private languageSubscription: Subscription | undefined;
  placeholderName: string = '';
  placeholderEmail: string = '';
  placeholderMessage: string = '';
  placeholderNameClass: string = 'placeholder-valid';
  placeholderEmailClass: string = 'placeholder-valid';
  placeholderMessageClass: string = 'placeholder-valid';
  privacyPolicyChecked?: boolean;
  http = inject(HttpClient);
  mailTest: boolean = true;

  contactData: ContactData = {
    name: '',
    email: '',
    message: '',
  };

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

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageSubscription =
      this.languageService.selectedLanguage$.subscribe((language) => {
        this.loadTexts(language);
      });
    this.loadTexts(this.languageService.getLanguage());
  }

  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  loadTexts(language: string): void {
    if (language === 'de') (this.texts = textsDE), this.setPlaceholders();
    else if (language === 'en') (this.texts = textsEN), this.setPlaceholders();
    else this.texts = textsEN;
  }

  setPlaceholders(): void {
    this.placeholderName = this.texts.placeholderName;
    this.placeholderEmail = this.texts.placeholderEmail;
    this.placeholderMessage = this.texts.placeholderMessage;
  }

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
    } else {
      this.updatePlaceholders(ngForm);
    }
  }

  clearForm(): void {
    this.privacyPolicyChecked;
    this.placeholderNameClass = 'placeholder-valid';
    this.placeholderEmailClass = 'placeholder-valid';
    this.placeholderMessageClass = 'placeholder-valid';
  }

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

  updatePlaceholdersName(): void {
    this.placeholderName = this.texts.requiredName;
    this.contactData.name = '';
    this.placeholderNameClass = 'placeholder-invalid';
  }

  updatePlaceholdersEmail(): void {
    this.placeholderEmail = this.texts.requiredEmail;
    this.contactData.email = '';
    this.placeholderEmailClass = 'placeholder-invalid';
  }

  updatePlaceholdersMessage(): void {
    this.placeholderMessage = this.texts.requiredMessage;
    this.contactData.message = '';
    this.placeholderMessageClass = 'placeholder-invalid';
  }

  onPrivacyPolicyChange(event: Event): void {
    this.privacyPolicyChecked = (event.target as HTMLInputElement).checked;
  }

  isFormValid(form: NgForm): boolean | undefined {
    return !!form.valid && this.privacyPolicyChecked;
  }
}
