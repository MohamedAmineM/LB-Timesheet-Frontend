import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SingletonService } from 'src/app/singleton.service';

@Component({
  selector: 'app-item-job-title',
  templateUrl: './item-job-title.component.html',
  styleUrls: ['./item-job-title.component.css']
})
export class ItemJobTitleComponent implements OnInit {

  fromDialog!: string;



  constructor(public dialogRef: MatDialogRef<ItemJobTitleComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    
    private http: HttpClient,
    private singleton:SingletonService
    
  ) {}

  ngOnInit(): void {
  }

}
