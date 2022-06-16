import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SingletonService } from 'src/app/singleton.service';

@Component({
  selector: 'app-item-calendar',
  templateUrl: './item-calendar.component.html',
  styleUrls: ['./item-calendar.component.css']
})
export class ItemCalendarComponent implements OnInit {

  fromDialog!: string;



  constructor(public dialogRef: MatDialogRef<ItemCalendarComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    
    private http: HttpClient,
    private singleton:SingletonService
    
  ) {}

  ngOnInit(): void {
  }

}
