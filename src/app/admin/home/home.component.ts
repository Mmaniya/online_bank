import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  scanList


  constructor(private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient) { 

    this.http.get('http://localhost/bankauth/User/customers.php').subscribe(
   
      data => {
        this.scanList = data as string [];	 // FILL THE ARRAY WITH DATA.
      },
    );
  }

  ngOnInit() {

  }

  formClear(){
    this.router.navigate(['/hackerhome']);

  }

}
