import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cryptostuff-pro',
  templateUrl: './cryptostuff-pro.component.html',
  styleUrls: ['./cryptostuff-pro.component.scss']
})
export class CryptostuffProComponent implements OnInit {

  email = localStorage.getItem("email");
  constructor() { }

  ngOnInit(): void {
  }

}
