import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {
  data: any;
  username: string;
  userid: string;
  address: any;
  dob: any;
  genter: any;
  mobile: any;
  accountsno: any;
  pincode: any;
  amount: any;
  addamount: any;
  apiUrl: string = 'http://localhost/bankauth/User/addamount.php';

  constructor(
    public dialogRef: MatDialogRef<VerificationComponent>,
    private http: HttpClient,
    private router: Router) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }
  onSubmit() {
    this.dialogRef.close();
    let datas = JSON.parse(localStorage.getItem('atm'));
    let postData = {
      "cust_id" : datas[0].cust_id,
      "cus_accountno" : datas[0].cus_accountno,
      "cus_pincode" : datas[0].cus_pincode,
      "cus_amount" : datas[0].cus_amount,
      "addamount" : this.addamount,
    }

    this.http.post(this.apiUrl, postData).subscribe(
      (res: any) => {
          alert(res.result);       
      },
      err => {
        alert(JSON.stringify(err));
      }
    );

  }
}
