import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Note} from "../../core/models/Note";
import {defaultNote, defaultNotesArray} from "../../constans/notesDefaults";
import NotesService from "../../core/services/NotesService";

export interface NoteViewModel {
  title: string,
  description: string,
}

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

  onEditNote(editedNote: Note){
    this.activeNote = editedNote;
    this.notes.forEach(note=> {
      if(note.id == editedNote.id){
        note.description = editedNote.description;
        note.title = editedNote.title;
        return;
      }
    })
  }

  onCreateNote(note: NoteViewModel){
    const newNote = {
      id: Math.max.apply(null, this.notes.map(note=> note.id)) + 1,
      title: note.title,
      description: note.description,
      date: Date.now().toString(),
      userId: 1,
    }
    this.notes = this.notes.concat(newNote);
    this.notesService.createNote(this.client, newNote).subscribe();
  }
}
