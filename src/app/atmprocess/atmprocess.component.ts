import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { AppService } from 'src/app/app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-atmprocess',
  templateUrl: './atmprocess.component.html',
  styleUrls: ['./atmprocess.component.scss']
})
export class AtmprocessComponent implements OnInit {

  username: string;
  pinnumber: string;

  constructor(private router: Router,
    // private authenticationService: AuthenticationService,
    private snackBar: MatSnackBar,
    private http: HttpClient,
    public dialog: MatDialog,
    private appService: AppService
  ) { }

  apiUrl: string = 'http://localhost/bankauth/User/atm.php';

  ngOnInit() {
  }

  loginpage(){
    let postData = {
      "cus_id": this.username,
      "cus_pincode": this.pinnumber,
    }
    this.http.post(this.apiUrl, postData).subscribe(
      (res: any) => {
        localStorage.setItem('atm',JSON.stringify(res));
        if(res.result == 'Customer Id & Pincode Incorrect.!'){
          alert(res.result);
        }else{
          this.router.navigate(['/dashboard']);
        }          
      },
      err => {
        alert(JSON.stringify(err));
      }
    );
  }

}
