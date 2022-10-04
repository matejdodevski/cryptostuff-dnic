import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  emailaddress = '';
  password = '';

  constructor() {}

  ngOnInit(): void {}

  login() {
    if (this.emailaddress != '' && this.password != '') {
      localStorage.setItem('email', this.emailaddress);
      window.location.assign('https://crypto-stuff.netlify.app');
    }
  }
}
