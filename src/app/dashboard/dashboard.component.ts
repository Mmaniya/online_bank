import { AfterContentInit, Component, OnInit, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { VerificationComponent } from '../authentication/verification/verification.component';
import { MatSnackBar, MatDialog } from '@angular/material';
import { WithdrawComponent } from '../withdraw/withdraw.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
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

  constructor(private router: Router,
    private http: HttpClient,
    public dialog: MatDialog) {

    let datas = JSON.parse(localStorage.getItem('atm'));
    this.username = datas[0].cus_name;
    this.accountsno = datas[0].cus_accountno;
    this.pincode = datas[0].cus_pincode;
    this.amount = datas[0].cus_amount;

  }
  ngOnInit() {
  }
  balnce() {
    alert("Your Balance Amount is ₹" + this.amount);
  }
  deposit() {
    this.openDialog();
  }
  withdraw() {
    this.openDialogs();
  }

  openDialog(): void {
    this.dialog.open(VerificationComponent, {
      width: '300px',
      height: '300px'
    });
  }
  openDialogs(): void {
    this.dialog.open(WithdrawComponent, {
      width: '300px',
      height: '300px'
    });
  }
}
