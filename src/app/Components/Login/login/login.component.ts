import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(private loginService: LoginService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    let email = String(this.checkoutForm.get('email')?.value);
    let password = String(this.checkoutForm.get('password')?.value);

    this.loginService.ValidataUserCredentials(email, password).subscribe(response => {
      if (response) {
        this.router.navigate(["/invoicing"])
      }
    });
  }
}
