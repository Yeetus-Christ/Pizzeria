import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginChefService } from '../api/services';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login-chef',
  templateUrl: './login-chef.component.html',
  styleUrls: ['./login-chef.component.css']
})
export class LoginChefComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private loginChefService: LoginChefService,
    private router: Router) { }

  form = this.fb.group({
    name: ["", Validators.compose([Validators.required])],
    password: ["", Validators.compose([Validators.required])]
  })

  ngOnInit(): void {
  }

  loginChef() {
    console.log(this.form.get('name')?.value)
    console.log(this.form.get('password')?.value)
    this.loginChefService.findLoginChef({ name: this.form.get('name')?.value, password: this.form.get('password')?.value })
      .subscribe(_ => this.authService.loginChef({ name: this.form.get('name')?.value, password: this.form.get('password')?.value }))

    if (this.authService.currentChef) {
      this.router.navigate(["/chef"])
    }
    else {
      return;
    }
  }

}
