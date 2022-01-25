import {Component, OnInit} from '@angular/core';
import {Note} from "../../../core/models/Note";
import {NoteViewModel} from "../../notes-page/notes-page.component";

@Component({
  selector: 'app-create-note-dialog',
  templateUrl: './create-note-dialog.component.html',
  styleUrls: ['./create-note-dialog.component.css']
})
export class CreateNoteDialogComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {}

  note: NoteViewModel = {title: "", description: ""};

  onInputTitle(title: string){
    this.note.title = title;
  }

  onInputDescription(description: string){
    this.note.description = description;
  }
}
