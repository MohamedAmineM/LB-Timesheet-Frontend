import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SingletonService } from 'src/app/singleton.service';

@Component({
  selector: 'app-item-team',
  templateUrl: './item-team.component.html',
  styleUrls: ['./item-team.component.css']
})
export class ItemTeamComponent implements OnInit {

  fromDialog!: string;



  constructor(public dialogRef: MatDialogRef<ItemTeamComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient,
    private singleton:SingletonService
    ) { }

  ngOnInit(): void {
  }

}
