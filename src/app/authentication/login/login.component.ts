import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { AppService } from 'src/app/app.service';
import { HttpClient } from '@angular/common/http';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
// import { AuthenticationService } from 'src/app/services/authentication.service';
// import { NgForm } from '@angular/forms';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userid: string;
  username: string;
  password: string;
  confirmpass: string;

  selected = 'English (Default)';
  userStatus = false;
  constructor(private router: Router,
              // private authenticationService: AuthenticationService,
              private snackBar: MatSnackBar,
              private http: HttpClient,
              public dialog: MatDialog,
              private appService: AppService
  ) {}
  apiUrl: string = 'http://localhost/bankauth/User/login.php';

  ngOnInit() {
  }
  // login(ngForm: NgForm) {
  //   console.log(ngForm.value);
  //   this.userStatus = this.authenticationService.login(ngForm.value.username, ngForm.value.password);
  //   if (this.userStatus === true) {
  //     this.router.navigate(['/dashboard']);
  //   } else {
  //     this.router.navigate(['']);
  //   }
  //   this.authenticationService.login(ngForm.value.username, ngForm.value.password)
  //   .subscribe((data: any) => {
  //     if (data) {
  //       this.appService.emitConfig(true);
  //       localStorage.setItem('token', data.base64EncodedAuthenticationKey);
  //       this.router.navigate(['/dashboard']).then();
  //     } else {
  //       this.appService.emitConfig(false);
  //       this.openSnackBar('Invalid Credentials', 'close');
  //       this.router.navigate(['/login']).then();
  //     }
  //   });
  // }

  loginpage(){
    let postData = {
      "cus_id": this.username,
      "cus_pass": this.password,
    }
    this.http.post(this.apiUrl, postData).subscribe(
      (res: any) => {
        localStorage.setItem('user',JSON.stringify(res));
        if(res.result == 'Username & Password Incorrect.!'){
          alert(res.result);
        }else{
          this.router.navigate(['/useraccount']);
        }          
      },
      err => {
        alert(JSON.stringify(err));
      }
    );
  }

  openSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  onSignUp() {
    this.openDialog();
  }
  openDialog(): void {
    this.dialog.open(SignUpComponent, {
      width: '600px',
      height: '600px'
    });
  }
  onForgotPassword() {
    this.dialog.open(ForgotPasswordComponent, {
      width: '500px',
    });
  }
}
