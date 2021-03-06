import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

import {Note} from "../../../core/models/Note";

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Note) { }

  ngOnInit(): void {}

  onInputTitle(title: string){
    this.data.title = title;
  }

  onInputDescription(description: string){
    this.data.description = description;
  }
}
