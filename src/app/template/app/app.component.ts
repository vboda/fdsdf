import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() { }
  items = ['mouse', 'keyboard', 'monitor', 'cable', 'wifi', 'router'];

  ngOnInit(): void {
  }

  loginText = 'Login';
  signUpText = 'Sign Up'; 
  lessons = ['Lesson 1', 'Lessons 2'];
  login() {
        console.log('Login');
  }

  signUp() {
        console.log('Sign Up');
  }
  totalEstimate = 10;
  ctx = {estimate: this.totalEstimate};

}
