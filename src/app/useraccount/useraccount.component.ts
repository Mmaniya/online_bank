import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-useraccount',
  templateUrl: './useraccount.component.html',
  styleUrls: ['./useraccount.component.scss']
})
export class UseraccountComponent implements OnInit {
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

  constructor(
    public dialog: MatDialog,
    private http: HttpClient,
    private router: Router,
  ) {
    let data = JSON.parse(localStorage.getItem('user'));
    this.username = data[0].cus_name;
    this.userid = data[0].cus_id;

    this.getIPAddress();
  }

  apiUrl: string = 'http://localhost/bankauth/User/updateuser.php';

  ngOnInit() {
  }
  getIPAddress() {
    this.http.post("http://localhost/bankauth/User/getuser.php",  {"cus_id": this.userid}).subscribe((res: any) => {
      localStorage.setItem('userdetails',JSON.stringify(res));
      let datas = JSON.parse(localStorage.getItem('userdetails'));
      this.username = datas[0].cus_name;
      this.address = datas[0].cus_address;
      this.dob = datas[0].cus_dob;
      this.genter = datas[0].cus_gender;
      this.mobile = datas[0].cus_contactno;
      this.accountsno = datas[0].cus_accountno;
      this.pincode = datas[0].cus_pincode;
      this.amount = datas[0].cus_amount;
    });
  }


  formSubmit() {
    let postData = {
      "cus_id": this.userid,
      "cus_name": this.username,
      "cus_address": this.address,
      "cus_dob": this.dob,
      "cus_gender": this.genter,
      "cus_contactno": this.mobile,
      "cus_accountno": this.accountsno,
      "cus_pincode": this.pincode,
      "cus_amount": this.amount,
    }
    this.http.post(this.apiUrl, postData).subscribe(
      (res: any) => {
        alert(JSON.stringify(res.result));
        if (res.result == 'Successfully Registered.!') {
          
        } else if (res.result == 'User Aleardy Exist.!') {
        }
      },
      err => {
        alert(JSON.stringify(err));
      }
    );
  }
  formClear(){
    this.address = '';
    this.dob = '';
    this.genter = '';
    this.mobile = '';
    this.accountsno = '';
    this.pincode = '';
    this.amount = '';
  }
  
  formExit(){
    this.router.navigate(['/useraccount']);
  }
}
