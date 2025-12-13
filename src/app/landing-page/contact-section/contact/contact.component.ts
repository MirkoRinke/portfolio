import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconsService } from '../../../shared/services/svg.icons.service';
import { WindowService } from '../../../shared/services/window.service';
import { LanguageService } from '../../../shared/services/language.service';
import { ModalService } from '../../../shared/services/modal.service';
import { WindowControlsComponent } from '../../../shared/window-controls/window-controls.component';
import { UtilityService } from '../../../shared/services/utility.service';

import { environments } from '../../../../environments/environments';

import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

export interface ContactData {
  [key: string]: string;
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule, WindowControlsComponent, FormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  providers: [WindowService],
})
export class ContactComponent {
  @Input() modalActive!: boolean;

  ifNameValid: boolean = true;
  ifEmailValid: boolean = true;
  ifMessageValid: boolean = true;
  ifSubjectValid: boolean = true;

  privacyPolicyChecked?: boolean = undefined;
  showFeedback: boolean = false;

  http: HttpClient = inject(HttpClient);
  mailTest: boolean = environments.production;

  contactData: ContactData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  post = {
    endPoint: environments.contactUrl,
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  constructor(
    public svgIconsService: SvgIconsService,
    public windowService: WindowService,
    public languageService: LanguageService,
    public modalService: ModalService,
    public utilityService: UtilityService,
  ) {}

  onSubmit(ngForm: NgForm) {
    if (!this.privacyPolicyChecked) {
      this.privacyPolicyChecked = false;
      this.ifInvalid(ngForm);
      return;
    }
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.clearForm();
            this.showFeedbackMessage();
            this.utilityService.vibrate();
          },
          error: (error) => {
            console.error(error);
          },
          // complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.info('Form Submitted Successfully (Test Mode)');
      ngForm.resetForm();
      this.clearForm();
      this.showFeedbackMessage();
    } else {
      this.ifInvalid(ngForm);
    }
  }

  showFeedbackMessage() {
    this.showFeedback = true;
    setTimeout(() => {
      this.showFeedback = false;
    }, 10000);
  }

  clearForm() {
    this.ifNameValid = true;
    this.ifEmailValid = true;
    this.ifMessageValid = true;
    this.ifSubjectValid = true;
    this.privacyPolicyChecked = undefined;
  }

  ifInvalid(form: NgForm) {
    if (form.controls['name'].invalid) this.updatePlaceholder('name');
    if (form.controls['email'].invalid) this.updatePlaceholder('email');
    if (form.controls['message'].invalid) this.updatePlaceholder('message');
    if (form.controls['subject'].invalid) this.updatePlaceholder('subject');
  }

  updatePlaceholder(inputField: string) {
    switch (inputField) {
      case 'name':
        this.ifNameValid = false;
        this.contactData.name = '';
        break;
      case 'email':
        this.ifEmailValid = false;
        this.contactData.email = '';
        break;
      case 'subject':
        this.ifSubjectValid = false;
        this.contactData.subject = '';
        break;
      case 'message':
        this.ifMessageValid = false;
        this.contactData.message = '';
        break;
    }
  }

  onPrivacyPolicyChange(event: Event): void {
    this.privacyPolicyChecked = (event.target as HTMLInputElement).checked;
  }

  ifFormValid(form: NgForm): boolean | undefined {
    return !!form.valid && this.privacyPolicyChecked;
  }
}
