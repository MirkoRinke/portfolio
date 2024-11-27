import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  placeholderName: string = 'Your name goes here';
  placeholderEmail: string = 'youremail@email.com';
  placeholderMessage: string = 'Hello Lukas, I am interested in...';

  placeholderNameClass: string = 'placeholder-valid';
  placeholderEmailClass: string = 'placeholder-valid';
  placeholderMessageClass: string = 'placeholder-valid';

  privacyPolicyChecked = false;

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit(NgForm: NgForm) {
    if (NgForm.valid && NgForm.submitted) {
      console.log('Form Submitted Successfully');
    } else {
      this.updatePlaceholders(NgForm);
    }
  }

  updatePlaceholders(form: NgForm) {
    if (form.controls['name'].invalid) {
      this.placeholderName = 'Name is required';
      this.contactData.name = '';
      this.placeholderNameClass = 'placeholder-invalid';
    }
    if (form.controls['email'].invalid) {
      this.placeholderEmail = 'Valid email is required';
      this.contactData.email = '';
      this.placeholderEmailClass = 'placeholder-invalid';
    }
    if (form.controls['message'].invalid) {
      this.placeholderMessage = 'Message is required';
      this.contactData.message = '';
      this.placeholderMessageClass = 'placeholder-invalid';
    }
  }

  onPrivacyPolicyChange(event: Event) {
    this.privacyPolicyChecked = (event.target as HTMLInputElement).checked;
  }
}
