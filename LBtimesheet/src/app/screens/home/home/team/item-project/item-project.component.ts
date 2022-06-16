import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Optional } from 'ag-grid-community';
import { SingletonService } from 'src/app/singleton.service';


@Component({
  selector: 'app-item-project',
  templateUrl: './item-project.component.html',
  styleUrls: ['./item-project.component.css']
})
export class ItemProjectComponent implements OnInit {

  fromDialog!: string;



  constructor(public dialogRef: MatDialogRef<ItemProjectComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient,
    private singleton:SingletonService
    ) { }

  ngOnInit(): void {
  }

}
