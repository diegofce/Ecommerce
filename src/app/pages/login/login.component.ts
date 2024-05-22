import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  password: any;
  email: any;

  
  
  constructor() {}

  login() {
    console.log(this.email);
    console.log(this.password);
  }

}
