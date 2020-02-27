import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


export interface PeriodicElement {
  cust_id: string;
  cust_name: string;
  cust_acno: number;
  cust_ip: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {cust_id: 'cust001', cust_name: 'ravi', cust_acno: 100794343, cust_ip: '157.46.99.47'},
  {cust_id: 'cust002', cust_name: 'kumar', cust_acno: 443440026, cust_ip: '157.46.99.47'},
  {cust_id: 'cust003', cust_name: 'mani', cust_acno: 64554941, cust_ip: '157.46.99.47'},
  {cust_id: 'cust004', cust_name: 'kavi', cust_acno: 945450122, cust_ip: '157.46.99.47'},
  {cust_id: 'cust005', cust_name: 'brabhu', cust_acno: 104545811, cust_ip: '157.46.99.47'},
  {cust_id: 'cust006', cust_name: 'latha', cust_acno: 12450107, cust_ip: '157.46.99.47'},
  {cust_id: 'cust007', cust_name: 'suresh', cust_acno: 14450067, cust_ip: '157.46.99.47'},
  {cust_id: 'cust008', cust_name: 'kavin', cust_acno: 1554994, cust_ip: '157.46.99.47'},
  {cust_id: 'cust009', cust_name: 'ganesh', cust_acno: 18459984, cust_ip: '157.46.99.47'},
  {cust_id: 'cust010', cust_name: 'makesh', cust_acno: 20454797, cust_ip: '157.46.99.47'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  scanList

  displayedColumns: string[] = ['cust_id', 'cust_name', 'cust_acno', 'cust_ip'];
  dataSource = ELEMENT_DATA;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient) { 

    this.http.get('http://localhost/bankauth/User/customers.php').subscribe(
      (res: any) => {
        this.scanList = res[1].cust_id;
      }
    );
  }

  ngOnInit() {

  }

  formClear(){
    this.router.navigate(['/hackerhome']);

  }

}
