import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void{
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['user'])
    }
  }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  onSubmit(): void{
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        (result) => {
          this.router.navigate(['user'])
        },
        (error: Error) => {
          alert(error.message)
        }
      )
    }
  }
}
