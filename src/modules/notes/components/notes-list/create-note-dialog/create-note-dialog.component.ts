import {Component, OnInit} from '@angular/core';
import {NoteDTO} from "../../../core/models/NoteDTO";

@Component({
  selector: 'app-create-note-dialog',
  templateUrl: './create-note-dialog.component.html',
  styleUrls: ['./create-note-dialog.component.css']
})
export class CreateNoteDialogComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {}

  note: NoteDTO = {title: "", description: ""};

  onInputTitle(title: string){
    this.note.title = title;
  }

  onInputDescription(description: string){
    this.note.description = description;
  }
}
