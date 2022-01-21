import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Note} from "../../core/models/Note";
import {defaultNote, defaultNotesArray} from "../../constans/notesDefaults";
import NotesService from "../../core/services/NotesService";


@Component({
  selector: 'app-notes-page',
  templateUrl: './notes-page.component.html',
  styleUrls: ['./notes-page.component.css'],
  providers: [NotesService]
})
export class NotesPageComponent implements OnInit {

  constructor(private notesService: NotesService, private client: HttpClient){}

  ngOnInit(): void {
    this.notesService.getNotesByUserId(this.client, 1).subscribe((notes) => this.notes = notes);
  }

  activeNote: Note = defaultNote;
  notes: Note[] = [];

  onActiveNoteChange(activeNote: Note){
    this.activeNote = activeNote;
  }

}
