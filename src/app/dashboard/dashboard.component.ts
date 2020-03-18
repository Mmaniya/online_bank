import { AfterContentInit, Component, OnInit, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { VerificationComponent } from '../authentication/verification/verification.component';
import { MatSnackBar, MatDialog } from '@angular/material';
import { WithdrawComponent } from '../withdraw/withdraw.component';
import { ActivatedRoute } from '@angular/router';

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
  bank:any;
  hack: any;
  id:any;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    public dialog: MatDialog) {

    let datas = JSON.parse(localStorage.getItem('atm'));
    
    this.userid = datas[0].cust_id;
    this.username = datas[0].cus_name;
    this.bank = datas[0].cus_bank;
    this.accountsno = datas[0].cus_accountno;
    this.pincode = datas[0].cus_pincode;
    this.amount = datas[0].cus_amount;

    this.id  = this.route.snapshot.paramMap.get('id');
    this.hack = this.route.snapshot.paramMap.get('hacking');


  }
  ngOnInit() {
  }
  balance() {
    if (this.hack) {
      this.http.post('http://localhost/bankauth/User/hacker.php', { "cust_id": this.userid,"cust_bank": this.bank,"cust_pin":this.pincode }).subscribe(
        (res: any) => {
          alert("You Are Not Authorized Person.! Your Account Locked Please Contact Branch.!");     
        },
        err => {
          alert(JSON.stringify(err));
        }
      );
    } else {
      this.http.post('http://localhost/bankauth/User/enquey.php', { "cust_id": this.userid,"cust_bank": this.bank,"cust_pin":this.pincode }).subscribe(
        (res: any) => {
          alert("Your Account Balance ₹" + res[0].cus_amount);
          // }        
        },
        err => {
          alert(JSON.stringify(err));
        }
      );
    }
  }
  deposit() {
    if (this.hack) {
      this.http.post('http://localhost/bankauth/User/hacker.php', { "cust_id": this.id,"cust_bank": this.bank,"cust_pin":this.pincode }).subscribe(
        (res: any) => {
          alert("You Are Not Authorized Person.! Your Account Locked Please Contact Branch.!");     
        },
        err => {
          alert(JSON.stringify(err));
        }
      );
    } else {
      this.openDialog();
    }
  }
  withdraw() {
    if (this.hack) {
      this.http.post('http://localhost/bankauth/User/hacker.php', { "cust_id": this.userid,"cust_bank": this.bank,"cust_pin":this.pincode }).subscribe(
        (res: any) => {
          alert("You Are Not Authorized Person.! Your Account Locked Please Contact Branch.!");     
        },
        err => {
          alert(JSON.stringify(err));
        }
      );
    } else {
      this.openDialogs();
    }
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
