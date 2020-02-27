import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hockerhome',
  templateUrl: './hockerhome.component.html',
  styleUrls: ['./hockerhome.component.scss']
})
export class HockerhomeComponent implements OnInit {
  data: any;
  username: string;
  userid: string;
  address: any;
  dob: any;
  genter: any;
  mobile: any;
  accountsno: any;
  cust_pin: any;
  amount: any;
  ipaddress:any;
  constructor(private router: Router,) { 
    let datas = JSON.parse(localStorage.getItem('userdetails'));
    this.userid = datas[0].cust_id;
    this.address = datas[0].cus_address;
    this.dob = datas[0].cus_dob;
    this.genter = datas[0].cus_gender;
    this.mobile = datas[0].cus_contactno;
    this.accountsno = datas[0].cus_accountno;
    this.cust_pin = datas[0].cus_pincode;
    this.amount = datas[0].cus_amount;
    this.ipaddress = datas[0].cus_ip;
  }

  ngOnInit() {
  }

  onClick(){
    this.router.navigate(['/dashboard']);
  }

}
