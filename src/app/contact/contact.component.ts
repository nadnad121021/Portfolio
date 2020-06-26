import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: string = '';
  number: string = '';
  message: string = '';
  email: string = '';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onSendMessage() {
    this.http
      .post<any>(
        'https://script.google.com/macros/s/AKfycbz4R8fBpliesolZZXRpq312pliovGak49HeaNf-/exec',
        {
          name: 'Angular POST Request Example',
          number: '09736274634',
          message: 'Message',
          email: 'sample@gmail.com'
        }
      )
      .subscribe(data => {
        alert(data);
      });
    //console.log('submitting');
  }
}
