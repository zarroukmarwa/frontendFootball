import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};
  loginForm!: FormGroup

  constructor(private formBuilder: FormBuilder,
    private userservice: UserService,
    private router: Router) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({

      email: [''],
      password: ['']


    })
  }
  login() {
    this.userservice.login(this.user).subscribe(data => {
      if (data) {
        window.sessionStorage.removeItem('token');
        window.sessionStorage.setItem('token', data.token);
        window.sessionStorage.removeItem('username');
        window.sessionStorage.setItem('username', data.username);
        this.router.navigate(['/admin']);

      }
    },

      (error) => {

      }

    )
  };
}