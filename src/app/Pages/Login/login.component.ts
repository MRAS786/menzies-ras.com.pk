import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/Services/API/api.service';
import { GvarService } from 'src/app/Services/gvar.service';
import { TokenResponse } from './TokenResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl: string = "";
  TokenResponse: TokenResponse;
  validForm: boolean = true;
  loginForm: FormGroup;
  submitted: boolean = false;
  clicked: boolean = false;
  constructor(public GV: GvarService,
    public API: ApiService, private route: ActivatedRoute, private router: Router) {
    this.TokenResponse = new TokenResponse();
    this.loginForm= new FormGroup({
      Grant_Type : new FormControl(),
      ClientId : new FormControl(),
      Username : new FormControl(),
      Password : new FormControl(),
      Refresh_Token : new FormControl(),
    })
  }

  ngOnInit(): void {
  }
  onLoginSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      this.clicked = true;
      this.loginForm.controls.Grant_Type.setValue("password");
      this.loginForm.controls.ClientId.setValue("");
      this.loginForm.controls.Refresh_Token.setValue("");

      this.TokenResponse = this.loginForm.value;


      this.API.LoginUser('/api/Token/Auth', this.TokenResponse).subscribe(
        (data) => {
          // this.toastr.success('Login Successful', 'Success', {
          //   timeOut: 3000,
          //   'progressBar': true,
          // });

          localStorage.setItem('token', data.Access_Token);
          localStorage.setItem('userRoles', data.Roles);
          localStorage.setItem('userName', data.empName);
          localStorage.setItem('userID', data.UserId);
          if (this.GV.canGetOwner) {
            this.router.navigate(['/Users']);
          }
          else {
            this.router.navigate(['/Companies']);
          }
        },
        (error) => {
          this.clicked = false;
          this.loginForm.enable({ emitEvent: true });
          if (error.error != undefined) {
            // this.toastr.error(error.error.Message, 'Error', {
            //   timeOut: 3000,
            //   'progressBar': true,
            // });
          } else {
            // this.toastr.error('Network Error', 'POS', {
            //   timeOut: 3000,
            //   'progressBar': true,
            // });
          }
        }
      );
    }
  }
}
