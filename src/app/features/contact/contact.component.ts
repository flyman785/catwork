import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SendEmailService } from 'src/app/services/send-email.service';
import { EventEmitter } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

  constructor(
    private fb: FormBuilder,
    private sendEmailService: SendEmailService,
    private snackBar: MatSnackBar
  ) { }

  // tslint:disable-next-line:no-output-rename
  @Output('submitForm') public submitForm = new EventEmitter<boolean>();

  public subscription: Subscription;

  infoForm = this.fb.group({
    name: ['', [
      Validators.required,
      Validators.minLength(3)
    ]],
    oggetto: ['', [
      Validators.required,
      Validators.minLength(3)
    ]],
    messaggio: ['', [
      Validators.required,
      Validators.minLength(10)
    ]],
    email: ['', [
      Validators.required,
      Validators.email
    ]]
  });


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  sendMail() {
    this.submitForm.emit(true);
    this.subscription = this.sendEmailService.sendEmail(this.infoForm.value).subscribe(data => {
      const msg = data.message;
      this.submitForm.emit(false);
      this.openSnackBar(msg, 'chiudi');
      console.log(data, 'success');
      this.infoForm.reset();
    }, error => {
      this.submitForm.emit(false);
      this.openSnackBar(error.error.message, 'chiudi');
      console.error(error, 'error');
    } );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000
    });
  }

}
