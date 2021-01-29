import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { UserService } from 'src/app/service/user.service';
import { MustMatch } from 'src/app/validators/mustMatch';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService,
    private Router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.minLength(3), Validators.required]],
      lastName: ['', [Validators.minLength(4), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]],
      ConfirmPassword: ['']

    },
    {
      validators: MustMatch('password','ConfirmPassword')
    })
  }
  // signup(x: any) {
  //   console.log('here my object', x);
  //  // let users = JSON.parse(localStorage.getItem('users') || '[]');
  //  //users.push(x);
  //  // localStorage.setItem('users', JSON.stringify(users));
  //   // localStorage.removeItem('users'); 
  // }

  signup(x: any) {
    this.userService.addUser(x).subscribe(user => {
      this.Router.navigate(['login']);
    })

  }

}
