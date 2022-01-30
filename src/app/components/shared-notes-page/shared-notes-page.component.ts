import { Component, OnInit } from '@angular/core';

import {defaultSharedNote, defaultSharedNotesArray} from "../../constans/sharedNotesDefaults";
import {Note} from "../../core/models/Note";
import {from, Observable} from "rxjs";

@Component({
  selector: 'app-shared-notes-page',
  templateUrl: './shared-notes-page.component.html',
  styleUrls: ['./shared-notes-page.component.css']
})
export class SharedNotesPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  activeNote: Note = defaultSharedNote;
  notes : Note[] = [];

  onActiveNoteChange(activeNote: Note){
    this.activeNote = activeNote;
  }
}
