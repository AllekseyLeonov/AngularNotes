import { Component, OnInit } from '@angular/core';
import {Note} from "../../core/models/Note";
import {defaultNote} from "../../constans/notesDefaults";

@Component({
  selector: 'app-notes-page',
  templateUrl: './notes-page.component.html',
  styleUrls: ['./notes-page.component.css']
})
export class NotesPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  activeNote: Note = defaultNote;

  onActiveNoteChange(activeNote: Note){
    this.activeNote = activeNote;
  }

}
