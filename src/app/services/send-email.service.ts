
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  constructor(private http: HttpClient) { }

  sendEmail(obj: object): Observable<any> {
    return this.http.post('https://send-email-54c58.web.app/sendFormData', obj);
  }
}
