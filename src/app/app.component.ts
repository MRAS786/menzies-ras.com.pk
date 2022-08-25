import { Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReCaptcha2Component } from 'ngx-captcha';
import Swal from 'sweetalert2';
import { ApiService } from './Services/API/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Menzies-RAS';
  @ViewChild('captchaElem') captchaElem: any = ReCaptcha2Component;
  @ViewChild('langInput') langInput: any = ElementRef;
  clicked = false;
  public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaIsExpired = false;
  public captchaResponse?: string;

  public theme: 'light' | 'dark' = 'light';
  public size: 'compact' | 'normal' = 'normal';
  public lang = 'en';
  public type: 'image' | 'audio';

  @ViewChildren("closeMessageModal") closeMessageModal: any;
  submitted: boolean = false;
  MessageForm: FormGroup;
  constructor(public router: Router, public API: ApiService) {
    this.type = "image";

    this.MessageForm = new FormGroup({
      name: new FormControl("", [Validators.required, this.noWhitespaceValidator]),
      emailAddress: new FormControl("", [Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      message: new FormControl("", [Validators.required, this.noWhitespaceValidator]),
      recaptcha: new FormControl("", Validators.compose([Validators.required,])),
    });
  }

  get f() { return this.MessageForm.controls; }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }



  addMessage() {
    this.submitted = false;
    this.MessageForm.reset();
    this.captchaElem.resetCaptcha();
  }
  submitForm() {
    if (this.MessageForm.controls.recaptcha.value == "" || this.MessageForm.controls.recaptcha.value == null) {
      Swal.fire({
        text: "Please verify that you’re a human!",
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }
    this.submitted = true;
    this.clicked = true;
    if (this.MessageForm.valid) {
   
      let body = {
        emailAddress: this.MessageForm.controls.emailAddress.value,
        message: this.MessageForm.controls.message.value,
        name: this.MessageForm.controls.name.value,
      }
      this.API.PostDataWithoutHeader('/Menzies/SendEMail', body).subscribe(
        (data) => {
          if (data.Status == "OK") {
            //this.closeMessageModal["first"].nativeElement.click();
            Swal.fire({
              text: data.Message,
              icon: 'success',
              confirmButtonText: 'OK'
            });
            this.MessageForm.reset();
            this.clicked = false;
            document.getElementById('hideModal')?.click();
          }
          else {
          }
        },
        error => {
          Swal.fire({
            text: error.error.Message,
            icon: 'error',
            confirmButtonText: 'OK'
          });
          this.clicked = false;
        });
    }
  }

  handleSuccess(data: any) {
    console.log(data);
  }
}
export class request {
  emailAddress: string = "";
  message: string = "";
  name: string = "";
}