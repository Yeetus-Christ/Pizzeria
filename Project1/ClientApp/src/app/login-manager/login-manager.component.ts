import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginManagerService } from '../api/services';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login-manager',
  templateUrl: './login-manager.component.html',
  styleUrls: ['./login-manager.component.css']
})
export class LoginManagerComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private loginManagerService: LoginManagerService,
    private router: Router  ) { }

  form = this.fb.group({
    name: ["", Validators.compose([Validators.required])],
    password: ["", Validators.compose([Validators.required])]
  })

  ngOnInit(): void {
  }

  loginManager() {
    console.log(this.form.get('name')?.value)
    console.log(this.form.get('password')?.value)
    this.loginManagerService.findLoginManager({ name: this.form.get('name')?.value, password: this.form.get('password')?.value })
      .subscribe(_ => this.authService.loginManager({ name: this.form.get('name')?.value, password: this.form.get('password')?.value }))

    if (this.authService.currentManager) {
      this.router.navigate(["/manager"])
    }
    else {
      return;
    }
  }

}
