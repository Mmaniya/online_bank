import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent implements OnInit {

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
  removeamount: any;
  apiUrl: string = 'http://localhost/bankauth/User/removeamount.php';

  constructor(
    public dialogRef: MatDialogRef<WithdrawComponent>,
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
      "removeamount" : this.removeamount,
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
