import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


export interface PeriodicElement {
  id: string;
  name: string;
  acno: number;
  hacker_ip: string;
  date:string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 'cust001', name: 'ravi', acno: 100794343, hacker_ip: '123.234.99.47', date: '2020-02-12'},
  {id: 'cust002', name: 'kumar', acno: 443440026, hacker_ip: '132.143.39.47', date: '2020-02-11'},
  {id: 'cust003', name: 'mani', acno: 64554941, hacker_ip: '233.4.34.44', date: '2020-01-12'},
  {id: 'cust004', name: 'kavi', acno: 945450122, hacker_ip: '157.26.99.77', date: '2019-12-12'},
  {id: 'cust005', name: 'brabhu', acno: 104545811, hacker_ip: '127.36.09.47', date: '2020-02-01'},
];
@Component({
  selector: 'app-hackerhome',
  templateUrl: './hackerhome.component.html',
  styleUrls: ['./hackerhome.component.scss']
})

export class HackerhomeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'acno', 'hacker_ip','date'];
  dataSource = ELEMENT_DATA;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit() {
  }
  formClear(){
    this.router.navigate(['/home']);
  }
}
