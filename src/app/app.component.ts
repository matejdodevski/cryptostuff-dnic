import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'crypto-stuff';
  email = localStorage.getItem("email");
  ngOnInit(){

  }

  logout(){
    console.log("clear")
    localStorage.clear();
    window.location.assign('https://crypto-stuff.netlify.app');
  }
}

