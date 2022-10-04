import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
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
