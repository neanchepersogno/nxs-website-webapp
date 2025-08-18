import { NgClass } from '@angular/common';
import { Component, HostListener, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormspreeService } from '../../shared/services/formspree.service';
import { Message } from 'primeng/message';
import { ButtonModule } from 'primeng/button';
import { IMessageForm } from '../../shared/models/message-form.interface';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, NgClass, FormsModule, ReactiveFormsModule, Message, ButtonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  uriAssetsImages: string = environment.uriAssetsImages;
  emailCopy: string = "neanchepersognorecords@gmail.com";
  isHidden = false;
  private lastScrollTop = 0;

  // Models
  messageForm:IMessageForm = {} as IMessageForm

  // Form validation
  fgNewsletter: FormGroup;
  isLoadingForm: boolean = false;
  visibleMessageForm = signal(false);

  constructor(private _formsspreeService: FormspreeService) {

    this.fgNewsletter = new FormGroup({
      email: new FormBuilder().control('', [Validators.required, Validators.email])
    });

  }
  ngOnInit(): void {
    this.visibleMessageForm.set(false);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > this.lastScrollTop && currentScroll > 100) {
      // Scrolleando hacia abajo
      this.isHidden = true;
    } else {
      // Scrolleando hacia arriba
      this.isHidden = false;
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  // Functions
  onSubmitForm(){
    this.isLoadingForm = true;
    this.visibleMessageForm.set(false);
    if (this.fgNewsletter.valid) {
      const data = new FormData();
      data.append('email', this.fgNewsletter.value.email);

      this._formsspreeService.sendFormData(data).subscribe({
        next: (response) => {
          console.log("ok: ", response)
          this.fgNewsletter.reset();
          this.isLoadingForm = false;
          this.messageForm = { severity: 'success', message: 'Ti sei iscritto con successo!' };
        },
        error: (error) => {
          this.fgNewsletter.reset();
          console.error("Error submitting form: ", error);
          this.messageForm = { severity: 'error', message: 'Oops! Qualcosa è andato male, riprova più tardi.' };
          this.isLoadingForm = false;
          this.visibleMessageForm.set(true);
        }
      });

    }

    return;
  }

  onCopyEmail() {
    const email = "neanchepersognorecords@gmail.com";
   navigator.clipboard.writeText(email).then(() => {
     this.emailCopy = "Copied to clipboard!";
   }).catch(err => {
     console.error('Failed to copy email: ', err);
   });
  }

}
