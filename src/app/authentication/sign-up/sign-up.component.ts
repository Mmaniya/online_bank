import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { VerificationComponent } from '../verification/verification.component';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  userid: string;
  username: string;
  password: string;
  confirmpass: string;
  ipAddress = '';

  constructor(
    public dialogRef: MatDialogRef<SignUpComponent>,
    public dialog: MatDialog,
    private http: HttpClient,
    private router: Router,
    private userService: UserService) { }

  apiUrl: string = 'http://localhost/bankauth/User/signup.php';
  // onNoClick(): void {
  //   this.dialogRef.close();
  // }
  // onSignUp(ngform: NgForm) {
  //   this.onNoClick();
  //   console.log(ngform.value);
  //   this.userService.onCreateUser(ngform.value).subscribe((data: any) => {
  //     console.log(data);
  //   });
  //   this.openDialog();
  // }
  ngOnInit() {
    this.getIPAddress();
  }
  getIPAddress() {
    this.http.get("http://api.ipify.org/?format=json").subscribe((res: any) => {
      this.ipAddress = res.ip;
    });
  }
  onClick() {
    let postData = {
      "cus_id": this.userid,
      "cus_name": this.username,
      "cus_pass": this.password,
      "confirmpass": this.confirmpass,
      "ipaddress": this.ipAddress,
    }
    this.http.post(this.apiUrl, postData).subscribe(
      (res: any) => {
        alert(JSON.stringify(res.result));
        if (res.result == 'Successfully Registered.!') {
          this.dialogRef.close();
        } else if (res.result == 'User Aleardy Exist.!') {
          this.dialogRef.close();
        } else if (res.result == 'Password Miss Match.!') {
          this.dialogRef.close();
        }
      },
      err => {
        alert(JSON.stringify(err));
      }
    );
  }

  // openDialog(): void {
  //   this.dialog.open(VerificationComponent, {
  //     width: '500px',
  //   });
  // }

}
