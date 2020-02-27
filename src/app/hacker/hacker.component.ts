import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar, MatDialog } from '@angular/material';
import { HockerhomeComponent } from './hockerhome/hockerhome.component';

@Component({
  selector: 'app-hacker',
  templateUrl: './hacker.component.html',
  styleUrls: ['./hacker.component.scss']
})
export class HackerComponent implements OnInit {

  constructor(private router: Router,
    private http: HttpClient,
    public dialog: MatDialog) { }

  ngOnInit() {
  }

  getdetails(){
    this.dialog.open(HockerhomeComponent, {
          width: '400px',
          height: '400px'
        });
      }
}
