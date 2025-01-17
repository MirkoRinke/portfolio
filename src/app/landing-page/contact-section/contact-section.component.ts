import { Component } from '@angular/core';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-contact-section',
  imports: [ContactComponent],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
})
export class ContactSectionComponent {}
